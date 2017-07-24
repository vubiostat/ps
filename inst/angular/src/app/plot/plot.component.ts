import {
  Component, Input, OnInit, OnChanges, SimpleChanges, AfterViewChecked,
  ViewChild, ElementRef, ViewEncapsulation
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import * as d3 from 'd3';

import { AbstractPlotComponent } from '../abstract-plot.component';
import { Range } from '../range';
import { TTestSet } from '../t-test';
import { PaletteService } from '../palette.service';
import { SerializePlotComponent } from '../serialize-plot.component';

interface PlotData {
  name: string;
  target?: number;
  range: Range;
  title: string;
  sym: string;
}

interface Point {
  x: number;
  y: number;
}

@Component({
  selector: 'app-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PlotComponent extends AbstractPlotComponent implements OnInit, OnChanges, AfterViewChecked {
  @Input() modelSet: TTestSet;

  @ViewChild('unit') unitElement: ElementRef;
  @ViewChild('bottomAxis') bottomAxisElement: ElementRef;
  @ViewChild('leftAxis') leftAxisElement: ElementRef;
  @ViewChild('target') targetElement: ElementRef;

  constructor(public palette: PaletteService) { super(); }

  x: PlotData;
  y: PlotData;
  margin: number = 50;
  width: number;
  height: number;
  mainClipPathId: string;
  targetClipPathId: string;
  xScale: any;
  yScale: any;
  paths: string[];
  dropPaths: string[];
  mainData: any[];
  targetPoint: Point;
  hoverX: number;
  hoverY: number;
  hoverPoint: Point;
  xTargetRange: number[];
  yTargetRange: number[];
  xBisector: any;

  targetDragging = false;
  showTargetInfo = false;
  showHoverInfo = false;
  needDraw = false;

  private subscription: Subscription;

  ngOnInit(): void {
    this.mainClipPathId = `${this.name}-plot-area`;
    this.targetClipPathId = `${this.name}-target-area`;
    this.plotOptions.onChange.subscribe(() => { this.compute(); } );
    this.compute();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.modelSet) {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
      if (this.modelSet) {
        let callback = () => { this.compute(); };
        let ranges = this.modelSet.ranges;
        this.subscription = this.modelSet.onCompute.subscribe(callback);
        this.subscription.add(ranges.onChange.subscribe(callback));
        this.compute();
      }
    }
  }

  ngAfterViewChecked(): void {
    this.draw();
  }

  onResize(): void {
    this.compute();
  }

  redraw(): void {
    this.compute();
  }

  toggleTargetInfo(value: boolean): void {
    if (!this.targetDragging) {
      this.showTargetInfo = value;
    }
  }

  toggleHoverInfo(value: boolean): void {
    this.showHoverInfo = value;
  }

  hover(event: any): void {
    var dim = event.target.getBoundingClientRect();
    var x = event.clientX - dim.left;
    var y = event.clientY - dim.top;

    if (x > this.xTargetRange[0] && x < this.xTargetRange[1] &&
        y > this.yTargetRange[0] && y < this.yTargetRange[1]) {
      // hide hover info if too close to the target point
      this.showHoverInfo = false;
      return;
    }

    let index = this.xBisector(this.mainData, this.xScale.invert(x));
    let data = this.mainData[index];
    if (data) {
      this.hoverPoint = {
        x: data[this.x.name],
        y: data[this.y.name]
      }
      this.hoverX = this.xScale(this.hoverPoint.x);
      this.hoverY = this.yScale(this.hoverPoint.y);
      this.showHoverInfo = true;
    } else {
      this.showHoverInfo = false;
    }
  }

  hoverInfoY(): string {
    if (this.hoverY < this.yTargetRange[0]) {
      return "-3.5em";
    }
    return "1em";
  }

  private dragTargetStart(): void {
    this.targetDragging = true;
  }

  private dragTarget(event: any): void {
    let x = this.xScale.invert(d3.event.x - this.margin);
    if (x < this.x.range.min) {
      x = this.x.range.min;
    } else if (x > this.x.range.max) {
      x = this.x.range.max;
    }
    let index = this.xBisector(this.mainData, x);
    let data = this.mainData[index];
    if (!data) return;

    this.targetPoint.x = data[this.x.name];
    this.targetPoint.y = data[this.y.name];
    this.computeDropPaths();
  }

  private dragTargetEnd(): void {
    this.targetDragging = false;
    this.showTargetInfo = false;

    if (this.modelSet && this.x.name) {
      let output = this.modelSet.model.output;
      this.modelSet.model.update({
        [output]: this.targetPoint.y,
        [this.x.name]: this.targetPoint.x
      });
    }
  }

  private compute(): void {
    if (!this.modelSet) {
      return;
    }

    // setup
    let model = this.modelSet.model;
    let ranges = this.modelSet.ranges;
    let data;
    switch (this.modelSet.model.output) {
      case "n":
        if (this.name == "top-left") {
          this.x = {
            name: "power", range: ranges.power, target: model.power,
            title: "Power", sym: "1-β"
          };
        } else if (this.name == "top-right") {
          this.x = {
            name: "delta", range: ranges.delta, target: model.delta,
            title: "Detectable Alternative", sym: "δ"
          };
        }
        this.y = {
          name: "n", range: ranges.n, target: model.n,
          title: "Sample Size", sym: "n"
        };
        data = this.modelSet.data.map(d => d.primary.data);
        break;
      case "power":
        if (this.name == "top-left") {
          this.x = {
            name: "n", range: ranges.n, target: model.n,
            title: "Sample Size", sym: "n"
          };
          this.y = {
            name: "power", range: ranges.power, target: model.power,
            title: "Power", sym: "1-β"
          };
          data = this.modelSet.data.map(d => d.primary.data);
        } else if (this.name == "top-right") {
          this.x = {
            name: "delta", range: ranges.delta, target: model.delta,
            title: "Detectable Alternative", sym: "δ"
          };
          this.y = {
            name: "power", range: ranges.power, target: model.power,
            title: "Power", sym: "1-β"
          };
          data = this.modelSet.data.map(d => d.secondary.data);
        }
        break;
      case "delta":
        if (this.name == "top-left") {
          this.x = {
            name: "n", range: ranges.n, target: model.n,
            title: "Sample Size", sym: "n"
          };
        } else if (this.name == "top-right") {
          this.x = {
            name: "power", range: ranges.power, target: model.power,
            title: "Power", sym: "1-β"
          };
        }
        this.y = {
          name: "delta", range: ranges.delta, target: model.delta,
          title: "Detectable Alternative", sym: "δ"
        };
        data = this.modelSet.data.map(d => d.primary.data);
        break;
    }
    if (!this.x || !this.y) {
      console.log("bad:", this.x, this.y);
      return;
    }
    this.title = `${this.y.title} vs. ${this.x.title}`;
    this.targetPoint = { x: this.x.target, y: this.y.target };

    // margin
    let unitBox = this.unitElement.nativeElement.getBBox();
    if (unitBox && unitBox.width) {
      this.margin = unitBox.width * 2 + (20 * this.plotOptions.axisFontSize);
    }

    // dimensions
    this.width  = this.getDimension('width')  - (this.margin * 2);
    this.height = this.getDimension('height') - (this.margin * 2);

    // scales
    this.xScale = d3.scaleLinear().
      domain(this.x.range.toArray()).
      range([0, this.width]);

    this.yScale = d3.scaleLinear().
      domain(this.y.range.toArray().reverse()).
      range([0, this.height]);

    // paths
    data.reverse(); // reverse data so main line is drawn on top
    this.paths = data.map(subData => this.getPath(subData, this.x.name, this.y.name));
    this.mainData = data[data.length - 1].slice();
    this.mainData.sort((a, b) => a[this.x.name] - b[this.x.name]);

    // drop paths
    this.computeDropPaths();

    // target hover ranges
    let xTargetPos = this.xScale(this.targetPoint.x);
    this.xTargetRange = [xTargetPos - 5, xTargetPos + 5];
    let yTargetPos = this.yScale(this.targetPoint.y);
    this.yTargetRange = [yTargetPos - 5, yTargetPos + 5];
    this.xBisector = d3.bisector(point => point[this.x.name]).left;

    this.needDraw = true;
  }

  private computeDropPaths(): void {
    let data = [
      [
        { x: this.xScale.domain()[0], y: this.targetPoint.y },
        { x: this.targetPoint.x, y: this.targetPoint.y }
      ],
      [
        { x: this.targetPoint.x, y: this.yScale.domain()[1] },
        { x: this.targetPoint.x, y: this.targetPoint.y }
      ],
    ];
    this.dropPaths = data.map(subData => this.getPath(subData, 'x', 'y'));
  }

  private draw(): void {
    if (!this.needDraw) {
      return;
    }

    // axes (drawn by d3)
    let xAxis = d3.axisBottom(this.xScale).ticks(6);
    d3.select(this.bottomAxisElement.nativeElement).
      call(xAxis).
      attr("font-size", 15 * this.plotOptions.axisFontSize).
      attr("stroke-width", this.plotOptions.axisLineWidth * 1.5);

    let yAxis = d3.axisLeft(this.yScale).ticks(6);
    d3.select(this.leftAxisElement.nativeElement).
      call(yAxis).
      attr("font-size", 15 * this.plotOptions.axisFontSize).
      attr("stroke-width", this.plotOptions.axisLineWidth * 1.5);

    // make target point draggable
    let target = d3.select(this.targetElement.nativeElement);
    let drag = d3.drag().
      on("start", this.dragTargetStart.bind(this)).
      on("drag", this.dragTarget.bind(this)).
      on("end", this.dragTargetEnd.bind(this));
    target.call(drag);

    this.needDraw = false;
  }

  private mainClipPath(): string {
    return `url(#${this.mainClipPathId})`;
  }

  private targetClipPath(): string {
    return `url(#${this.targetClipPathId})`;
  }
}
