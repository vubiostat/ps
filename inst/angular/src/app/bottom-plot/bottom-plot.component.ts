import {
  Component, Input, OnInit, OnChanges, SimpleChanges, AfterViewChecked,
  ViewChild, ElementRef, ViewEncapsulation
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import * as d3 from 'd3';

import { AbstractPlotComponent } from '../abstract-plot.component';
import { TTestSet } from '../t-test';
import { Range } from '../range';
import { PlotOptionsService } from '../plot-options.service';
import { PaletteService } from '../palette.service';

interface Group { mainPaths: string[], distPath: string, target: number };

@Component({
  selector: 'app-bottom-plot',
  templateUrl: './bottom-plot.component.html',
  styleUrls: ['./bottom-plot.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BottomPlotComponent extends AbstractPlotComponent implements OnInit, OnChanges, AfterViewChecked {
  @Input('model-set') modelSet: TTestSet;
  @Input('draw-on-init') drawOnInit = true;
  @Input('fixed-width') fixedWidth: number;
  @Input('fixed-height') fixedHeight: number;
  @Input('disable-drag') disableDrag = false;

  @ViewChild('unit') unitElement: ElementRef;
  @ViewChild('bottomAxis') bottomAxisElement: ElementRef;
  @ViewChild('target') targetElement: ElementRef;

  title = "Precision vs. Effect Size";
  margin: number = 50;
  clipPathId: string;
  width: number;
  height: number;
  innerWidth: number;
  innerHeight: number;
  xScale: any;
  yScale: any;
  yScaleSD: any;
  mainGroup: Group;
  groups: Group[];
  needDraw: boolean;
  initialized = false;
  targetOffset = 0;
  translateOffset = 0;
  targetDragging = false;
  showTargetInfo = false;
  private subscription: Subscription;

  constructor(public plotOptions: PlotOptionsService, public palette: PaletteService) {
    super();
  }

  ngOnInit() {
    this.clipPathId = `${this.name}-plot-area`;
    this.plotOptions.onChange.subscribe(() => { this.compute(); } );
    if (this.drawOnInit) {
      this.compute();
    }
    this.initialized = true;
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
        this.subscription.add(this.modelSet.onChange.subscribe(callback));
        this.subscription.add(ranges.onChange.subscribe(callback));

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

  private compute(): void {
    if (!this.modelSet) {
      return;
    }

    // margin
    let unitBox = this.unitElement.nativeElement.getBBox();
    if (unitBox && unitBox.width) {
      this.margin = unitBox.width * 2 + (20 * this.plotOptions.axisFontSize);
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

    let ranges = this.modelSet.ranges;
    let data = this.modelSet.models.map(m => m.data.tertiary);

    // compute scales
    this.xScale = d3.scaleLinear().
      domain(ranges.pSpace.toArray()).
      range([0, this.innerWidth]);

    this.yScale = d3.scaleLinear().
      domain([0, 0.8]).
      range([0, this.innerHeight]);

    let sampDistExtent = data.reduce((arr, subData) => {
      let extent = d3.extent(subData.data, d => d.sampDist);
      return d3.extent(arr.concat(extent));
    }, []);
    this.yScaleSD = d3.scaleLinear().
      domain(sampDistExtent.reverse()).
      range([0, this.yScale(0.5)]);
    //console.log("sampDistExtent:", sampDistExtent);
    //console.log("ySD range:", [0, this.yScale(0.5)]);

    this.groups = data.reverse().map(subData => {
      // sample distribution
      let distPath = this.getArea(subData.data, 'pSpace', 'sampDist');

      // main lines
      let leftLimit = subData.range[0];
      let rightLimit = subData.range[1];
      let points = [
        subData.range.map((xValue, i) => {
          return { x: xValue, y: 0.5 };
        }),
        [
          { x: leftLimit, y: 0.35 },
          { x: leftLimit, y: 0.65 }
        ],
        [
          { x: rightLimit, y: 0.35 },
          { x: rightLimit, y: 0.65 }
        ]
      ];
      let mainPaths = points.map(data => this.getPath(data));

      let result = {
        mainPaths: mainPaths,
        distPath: distPath,
        target: subData.target
      }
      return result;
    });
    this.mainGroup = this.groups.pop();
    this.translateOffset = this.targetOffset = 0;
    this.targetDragging = false;
    this.needDraw = true;
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

    // make target point draggable
    if (!this.disableDrag) {
      let elt = this.targetElement.nativeElement;
      let target = d3.select(elt);
      let drag = d3.drag().
        container(elt.parentNode.parentNode).
        on("start", this.dragTargetStart.bind(this)).
        on("drag", this.dragTarget.bind(this)).
        on("end", this.dragTargetEnd.bind(this));
      target.call(drag);
    }

    this.needDraw = false;
  }

  private clipPath(): string {
    return `url(#${this.clipPathId})`;
  }

  private getArea(points: any[], xName: string, yName: string): string {
    let area = d3.area().
      x((d, i) => this.xScale(d[xName])).
      y0(this.yScaleSD(0)).
      y1((d, i) => this.yScaleSD(d[yName]));

    return area(points);
  }

  private dragTargetStart(): void {
    if (this.disableDrag) return;

    this.targetDragging = true;
  }

  private dragTarget(event: any): void {
    if (this.disableDrag) return;

    let mouseX = d3.event.x - this.margin;
    let x = this.xScale.invert(mouseX);
    if (x >= 0 && x < 1) {
      x = 1;
      mouseX = this.xScale(1);
    } else if (x < 0 && x > -1) {
      x = -1;
      mouseX = this.xScale(-1);
    }

    let targetX = this.xScale(this.mainGroup.target);
    this.translateOffset = mouseX - targetX;

    this.targetOffset = x - this.mainGroup.target;
  }

  private dragTargetEnd(): void {
    if (this.disableDrag) return;

    if (this.modelSet) {
      let modelChanges = {
        delta: this.mainGroup.target + this.targetOffset
      };
      this.modelSet.getModel(0).update(modelChanges);
    }
  }
}
