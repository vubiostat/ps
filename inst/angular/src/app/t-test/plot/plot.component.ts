import {
  Component, Input, OnInit, OnChanges, SimpleChanges, AfterViewChecked,
  ViewChild, ElementRef, ViewEncapsulation
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import * as d3 from 'd3';

import { AbstractPlotComponent } from '../abstract-plot.component';
import { Range } from '../range';
import { TTestSet } from '../t-test';
import { PlotOptionsService } from '../plot-options.service';
import { PaletteService } from '../palette.service';
import { SerializePlotComponent } from '../serialize-plot.component';

interface Param {
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
  selector: 't-test-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PlotComponent extends AbstractPlotComponent implements OnInit, OnChanges, AfterViewChecked {
  @Input('model-set') modelSet: TTestSet;
  @Input('hover-disabled') hoverDisabled = false;
  @Input('draw-on-init') drawOnInit = true;
  @Input('hide-drop-lines') hideDropLines = false;
  @Input('hide-target') hideTarget = false;
  @Input('fixed-width') fixedWidth: number;
  @Input('fixed-height') fixedHeight: number;
  @Input('disable-drag') disableDrag = false;

  @ViewChild('plot') plotElement: ElementRef;
  @ViewChild('unit') unitElement: ElementRef;
  @ViewChild('target') targetElement: ElementRef;
  @ViewChild('drop1') drop1Element: ElementRef;
  @ViewChild('drop2') drop2Element: ElementRef;

  constructor(public plotOptions: PlotOptionsService, public palette: PaletteService) { super(); }

  lastX: Param;
  lastY: Param;
  x: Param;
  y: Param;

  width: number;
  height: number;
  innerWidth: number;
  innerHeight: number;
  margin: number = 50;
  xScale: any;
  yScale: any;
  paths: string[];
  dropPaths: string[] = [];
  newDropPaths: string[];
  mainData: any[];
  targetPoint: Point;
  newTargetPoint: Point;
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
  initialized = false;

  private subscription: Subscription;

  ngOnInit(): void {
    this.plotOptions.onChange.subscribe(() => { this.compute(); });
    if (this.drawOnInit) {
      this.compute();
    }
    this.initialized = true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.modelSet) {
      // model set changed
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
      if (this.modelSet) {
        let callback = () => { this.compute(); };
        this.subscription = this.modelSet.onCompute.subscribe(callback);
        this.subscription.add(this.modelSet.onChange.subscribe(callback));

        if (this.initialized) {
          this.compute();
        }
      }
    } else if (changes.fixedWidth || changes.fixedHeight) {
      if (this.initialized) {
        this.compute();
      }
    }
  }

  ngAfterViewChecked(): void {
    this.draw();
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
    if (this.hoverDisabled) {
      return;
    }

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

  trackPathBy(index: number, path: string): any {
    return index;
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

    let svg = d3.select(this.plotElement.nativeElement);
    this.newTargetPoint = { x: data[this.x.name], y: data[this.y.name] }
    svg.select(`circle.target`).
      attr("cx", this.xScale(this.newTargetPoint.x)).
      attr("cy", this.yScale(this.newTargetPoint.y));

    this.newDropPaths = this.getDropPaths();
    svg.select(`#${this.name}-drop-0`).attr("d", this.newDropPaths[0]);
    svg.select(`#${this.name}-drop-1`).attr("d", this.newDropPaths[1]);
  }

  private dragTargetEnd(): void {
    this.targetDragging = false;
    this.showTargetInfo = false;

    if (this.modelSet && this.x.name) {
      let model = this.modelSet.getModel(0);
      model.update({
        [this.x.name]: this.newTargetPoint.x
      });
    }
  }

  private compute(): void {
    if (!this.modelSet) {
      return;
    }

    // dimensions
    if (this.fixedWidth) {
      this.width = this.fixedWidth;
    } else {
      this.width = this.getDimension('width');
    }
    if (this.fixedHeight) {
      this.height = this.fixedHeight;
    } else {
      this.height = this.getDimension('height');
    }
    this.innerWidth  = this.width  - (this.margin * 2);
    this.innerHeight = this.height - (this.margin * 2);

    // setup
    this.lastX = this.x;
    this.lastY = this.y;
    let model = this.modelSet.getModel(0);
    let ranges = this.modelSet.ranges;
    let plotData;
    switch (model.output) {
      case "n":
      case "nByCI":
        if (this.name == "top-left" || this.name == "top-left-export") {
          this.x = {
            name: "power", range: ranges.power, target: model.power,
            title: "Power", sym: "1-β"
          };
        } else if (this.name == "top-right" || this.name == "top-right-export") {
          this.x = {
            name: "delta", range: ranges.delta, target: model.delta,
            title: "Detectable Alternative", sym: "δ"
          };
        }
        this.y = {
          name: "n", range: ranges.n, target: model.n,
          title: "Sample Size", sym: "n"
        };
        plotData = this.modelSet.models.map(m => m.data.primary.data);
        break;
      case "power":
        if (this.name == "top-left" || this.name == "top-left-export") {
          this.x = {
            name: "n", range: ranges.n, target: model.n,
            title: "Sample Size", sym: "n"
          };
          this.y = {
            name: "power", range: ranges.power, target: model.power,
            title: "Power", sym: "1-β"
          };
          plotData = this.modelSet.models.map(m => m.data.primary.data);
        } else if (this.name == "top-right" || this.name == "top-right-export") {
          this.x = {
            name: "delta", range: ranges.delta, target: model.delta,
            title: "Detectable Alternative", sym: "δ"
          };
          this.y = {
            name: "power", range: ranges.power, target: model.power,
            title: "Power", sym: "1-β"
          };
          plotData = [];
          this.modelSet.models.forEach(m => {
            if (m.data.secondary) {
              plotData.push(m.data.secondary.data);
            }
          });
        }
        break;
      case "delta":
        if (this.name == "top-left" || this.name == "top-left-export") {
          this.x = {
            name: "n", range: ranges.n, target: model.n,
            title: "Sample Size", sym: "n"
          };
        } else if (this.name == "top-right" || this.name == "top-right-export") {
          this.x = {
            name: "power", range: ranges.power, target: model.power,
            title: "Power", sym: "1-β"
          };
        }
        this.y = {
          name: "delta", range: ranges.delta, target: model.delta,
          title: "Detectable Alternative", sym: "δ"
        };
        plotData = this.modelSet.models.map(m => m.data.primary.data);
        break;
    }
    if (!this.x || !this.y || plotData.length == 0) {
      return;
    }

    this.title = `${this.y.title} vs. ${this.x.title}`;
    this.targetPoint = { x: this.x.target, y: this.y.target };
    this.newTargetPoint = undefined;

    this.mainData = plotData[0].slice();
    this.mainData.sort((a, b) => a[this.x.name] - b[this.x.name]);

    // margin
    let unitBox = this.unitElement.nativeElement.getBBox();
    if (unitBox && unitBox.width) {
      this.margin = unitBox.width * 2 + (20 * this.plotOptions.axisFontSize);
    }

    // scales
    this.xScale = d3.scaleLinear().
      domain(this.x.range.toArray()).
      range([0, this.innerWidth]);

    this.yScale = d3.scaleLinear().
      domain(this.y.range.toArray().reverse()).
      range([0, this.innerHeight]);

    // paths
    plotData.reverse(); // plot lines in reverse for proper z-index
    this.paths = plotData.map(d => {
      let xName = this.x.name, xRange = this.x.range;
      let yName = this.y.name, yRange = this.y.range;
      return this.getPath(d, xName, yName, xRange, yRange);
    })

    // drop paths
    this.dropPaths = this.getDropPaths();

    // target hover ranges
    let xTargetPos = this.xScale(this.targetPoint.x);
    this.xTargetRange = [xTargetPos - 5, xTargetPos + 5];
    let yTargetPos = this.yScale(this.targetPoint.y);
    this.yTargetRange = [yTargetPos - 5, yTargetPos + 5];
    this.xBisector = d3.bisector(point => point[this.x.name]).left;

    this.needDraw = true;
  }

  private getDropPaths(): string[] {
    let point = this.newTargetPoint || this.targetPoint;
    let data = [
      [
        { x: this.xScale.domain()[0], y: point.y },
        { x: point.x, y: point.y }
      ],
      [
        { x: point.x, y: this.yScale.domain()[1] },
        { x: point.x, y: point.y }
      ],
    ];
    return data.map(subData => this.getPath(subData, 'x', 'y'));
  }

  private draw(): void {
    if (!this.needDraw) {
      return;
    }

    let svg = d3.select(this.plotElement.nativeElement);
    let t = svg.transition();

    // axes (drawn by d3)
    let xAxis = d3.axisBottom(this.xScale).ticks(6);
    t.select(`#${this.name}-x-axis`).
      call(xAxis).
      attr("font-size", 15 * this.plotOptions.axisFontSize).
      attr("stroke-width", this.plotOptions.axisLineWidth * 1.5);

    let yAxis = d3.axisLeft(this.yScale).ticks(6);
    t.select(`#${this.name}-y-axis`).
      call(yAxis).
      attr("font-size", 15 * this.plotOptions.axisFontSize).
      attr("stroke-width", this.plotOptions.axisLineWidth * 1.5);

    // paths
    for (let i = 0, ilen = this.paths.length; i < ilen; i++) {
      let path = t.select(`#${this.name}-path-${i}`);
      if (!path.attr("d")) {
        path.attr("d", this.paths[i]);
      } else {
        path.attrTween("d", this.pathTween(this.paths[i], 4))
      }
    }
    for (let i = 0, ilen = this.dropPaths.length; i < ilen; i++) {
      t.select(`#${this.name}-drop-${i}`).attr("d", this.dropPaths[i]);
    }

    // target
    t.select('circle.target').
      attr("cx", this.xScale(this.targetPoint.x)).
      attr("cy", this.yScale(this.targetPoint.y));

    // make target point draggable
    if (!this.disableDrag) {
      let target = d3.select(this.targetElement.nativeElement);
      let drag = d3.drag().
        on("start", this.dragTargetStart.bind(this)).
        on("drag", this.dragTarget.bind(this)).
        on("end", this.dragTargetEnd.bind(this));
      target.call(drag);
    }

    this.needDraw = false;
  }

  // from https://bl.ocks.org/mbostock/3916621
  private pathTween(d1, precision): Function {
    return function() {
      var path0 = this,
          path1 = path0.cloneNode(),
          n0 = path0.getTotalLength(),
          n1 = (path1.setAttribute("d", d1), path1).getTotalLength();

      // Uniform sampling of distance based on specified precision.
      var distances = [0], i = 0, dt = precision / Math.max(n0, n1);
      while ((i += dt) < 1) distances.push(i);
      distances.push(1);

      // Compute point-interpolators at each distance.
      var points = distances.map(function(t) {
        var p0 = path0.getPointAtLength(t * n0),
            p1 = path1.getPointAtLength(t * n1);
        return d3.interpolate([p0.x, p0.y], [p1.x, p1.y]);
      });

      return function(t) {
        return t < 1 ? "M" + points.map(function(p) { return p(t); }).join("L") : d1;
      };
    };
  }
}
