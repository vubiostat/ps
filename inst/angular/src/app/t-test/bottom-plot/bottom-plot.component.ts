import {
  Component, Input, OnInit, OnChanges, SimpleChanges, AfterViewChecked,
  ViewChild, ElementRef, ViewEncapsulation
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/debounceTime';

import * as d3 from 'd3';

import { AbstractPlotComponent } from '../abstract-plot.component';
import { TTestSet } from '../t-test';
import { Range } from '../range';
import { PlotOptionsService } from '../plot-options.service';
import { PaletteService } from '../palette.service';

interface Group {
  leftPath: string,
  centerPath: string,
  rightPath: string,
  distPath: string,
  left: number,
  target: number
  right: number
};

enum CIBar {
  Left,
  Right
};

@Component({
  selector: 't-test-bottom-plot',
  templateUrl: './bottom-plot.component.html',
  styleUrls: ['./bottom-plot.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BottomPlotComponent extends AbstractPlotComponent implements OnInit, OnChanges, AfterViewChecked {
  @Input('model-set') modelSet: TTestSet;
  @Input('fixed-width') fixedWidth: number;
  @Input('fixed-height') fixedHeight: number;
  @Input('disable-drag-target') disableDragTarget = false;
  @Input('disable-drag-ci') disableDragCI = false;

  @ViewChild('unit') unitElement: ElementRef;
  @ViewChild('target') targetElement: ElementRef;
  @ViewChild('leftBar') leftBarElement: ElementRef;
  @ViewChild('rightBar') rightBarElement: ElementRef;

  title = "Precision vs. Effect Size";
  margin: number = 50;
  width: number;
  height: number;
  innerWidth: number;
  innerHeight: number;
  unitLength: number;
  xScale: any;
  yScale: any;
  yScaleSD: any;
  mainGroup: Group;
  groups: Group[];
  needDraw: boolean;

  // target dragging
  targetOffset = 0;
  targetTranslateOffset = 0;
  targetDragging = false;
  targetWasDragging = false;
  showTargetInfo = false;

  // bar dragging
  barOffset = 0;
  barTranslateOffset = 0;
  barDragging = false;
  barWasDragging = false;
  showLeftBarInfo = false;
  showRightBarInfo = false;

  private subscription: Subscription;

  constructor(public plotOptions: PlotOptionsService, public palette: PaletteService) {
    super();
  }

  ngOnInit() {
    this.plotOptions.onChange.subscribe(this.compute.bind(this));
    this.compute();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.modelSet) {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
      if (this.modelSet) {
        let observable = Observable.merge(this.modelSet.onCompute, this.modelSet.onChange);
        this.subscription = observable.debounceTime(10).subscribe(this.compute.bind(this));
        this.compute();
      }
    } else if (changes.fixedWidth || changes.fixedHeight) {
      this.compute();
    }
  }

  ngAfterViewChecked(): void {
    this.draw();
  }

  redraw(): void {
    this.compute();
  }

  toggleTargetInfo(value: boolean): void {
    if (!this.targetDragging && !this.barDragging) {
      this.showTargetInfo = value;
    }
  }

  toggleLeftBarInfo(value: boolean): void {
    if (!this.targetDragging && !this.barDragging) {
      this.showLeftBarInfo = value;
    }
  }

  toggleRightBarInfo(value: boolean): void {
    if (!this.targetDragging && !this.barDragging) {
      this.showRightBarInfo = value;
    }
  }

  getColor(index: number): string {
    return this.palette.getColor(index, this.plotOptions.paletteTheme);
  }

  trackByIndex(index: number, thing: any): any {
    return index;
  }

  private compute(): void {
    if (!this.modelSet) {
      return;
    }

    // margin
    let unitBox = this.unitElement.nativeElement.getBBox();
    if (unitBox && unitBox.width) {
      this.margin = unitBox.width * 2 + (20 * this.plotOptions.axisFontSize);
      this.unitLength = unitBox.width;
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
      range([0, this.yScale(0.5)]).
      clamp(true);

    this.groups = data.reverse().map(subData => {
      // main lines
      let leftLimit = subData.range[0];
      let leftPath = this.getPath([
        { x: leftLimit, y: 0.35 },
        { x: leftLimit, y: 0.65 }
      ]);

      let rightLimit = subData.range[1];
      let rightPath = this.getPath([
        { x: rightLimit, y: 0.35 },
        { x: rightLimit, y: 0.65 }
      ]);

      let centerPath = this.getPath([
        { x: leftLimit, y: 0.5 },
        { x: rightLimit, y: 0.5 }
      ]);

      // sample distribution
      let distPath = this.getArea(subData.data, 'pSpace', 'sampDist');

      let result = {
        leftPath: leftPath,
        centerPath: centerPath,
        rightPath: rightPath,
        distPath: distPath,
        left: leftLimit,
        target: subData.target,
        right: rightLimit
      }
      return result;
    });
    this.mainGroup = this.groups.pop();

    // reset dragging
    this.targetTranslateOffset = this.targetOffset = 0;
    this.targetWasDragging = this.targetDragging;
    this.targetDragging = false;
    this.barTranslateOffset = this.barOffset = 0;
    this.barWasDragging = this.barDragging;
    this.barDragging = false;

    this.needDraw = true;
  }

  private draw(): void {
    if (!this.needDraw) {
      return;
    }

    let t = d3.select(this.plotElement.nativeElement).transition();

    // axes (drawn by d3)
    let xAxis = d3.axisBottom(this.xScale).ticks(6);
    t.select(`#${this.name}-bottom-axis`).
      call(xAxis).
      attr("font-size", 15 * this.plotOptions.axisFontSize).
      attr("stroke-width", this.plotOptions.axisLineWidth * 1.5);

    // alternate groups
    this.groups.forEach((group, index) => {
      let prefix = `#${this.name}-group-${index}`;
      t.select(`${prefix}-dist`).attr('d', group.distPath);
      t.select(`${prefix}-center`).attr('d', group.centerPath);
      t.select(`${prefix}-left`).attr('d', group.leftPath);
      t.select(`${prefix}-right`).attr('d', group.rightPath);
      t.select(`${prefix}-target`).
        attr('cx', this.xScale(group.target)).
        attr('cy', this.yScale(0.5));
    });

    // main group
    if (this.targetWasDragging || this.barWasDragging) {
      // don't use animations if user was dragging things
      t = d3.select(this.plotElement.nativeElement);
    }
    let prefix = `#${this.name}-main`;
    t.select(`${prefix}-dist`).attr('d', this.mainGroup.distPath);
    t.select(`${prefix}-center`).attr('d', this.mainGroup.centerPath);
    t.select(`${prefix}-left`).attr('d', this.mainGroup.leftPath);
    t.select(`${prefix}-right`).attr('d', this.mainGroup.rightPath);
    t.select(`${prefix}-target`).
      attr('cx', this.xScale(this.mainGroup.target)).
      attr('cy', this.yScale(0.5));

    // make target point draggable
    let targetElt = this.targetElement.nativeElement;
    let target = d3.select(targetElt);
    let targetDrag = d3.drag().
      container(targetElt.parentNode.parentNode).
      on("start", this.dragTargetStart.bind(this)).
      on("drag", this.dragTarget.bind(this)).
      on("end", this.dragTargetEnd.bind(this));
    target.call(targetDrag);

    // make left bar draggable
    let leftBarElt = this.leftBarElement.nativeElement;
    let leftBar = d3.select(leftBarElt);
    let leftBarDrag = d3.drag().
      container(leftBarElt.parentNode.parentNode).
      on("start", this.dragBarStart.bind(this, CIBar.Left)).
      on("drag", this.dragBar.bind(this, CIBar.Left)).
      on("end", this.dragBarEnd.bind(this, CIBar.Left));
    leftBar.call(leftBarDrag);

    // make right bar draggable
    let rightBarElt = this.rightBarElement.nativeElement;
    let rightBar = d3.select(rightBarElt);
    let rightBarDrag = d3.drag().
      container(rightBarElt.parentNode.parentNode).
      on("start", this.dragBarStart.bind(this, CIBar.Right)).
      on("drag", this.dragBar.bind(this, CIBar.Right)).
      on("end", this.dragBarEnd.bind(this, CIBar.Right));
    rightBar.call(rightBarDrag);

    this.needDraw = false;
  }

  ciWidth(): number {
    return Math.abs((this.mainGroup.right - this.barOffset) - (this.mainGroup.left + this.barOffset));
  }

  private getArea(points: any[], xName: string, yName: string): string {
    let area = d3.area().
      x((d, i) => this.xScale(d[xName])).
      y0(this.yScaleSD(0)).
      y1((d, i) => this.yScaleSD(d[yName]));

    return area(points);
  }

  private dragTargetStart(): void {
    if (this.disableDragTarget) return;

    this.targetDragging = true;
  }

  private dragTarget(event: any): void {
    if (this.disableDragTarget) return;

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
    this.targetTranslateOffset = mouseX - targetX;

    this.targetOffset = x - this.mainGroup.target;
  }

  private dragTargetEnd(): void {
    if (this.disableDragTarget) return;

    if (this.modelSet) {
      let modelChanges = {
        delta: this.mainGroup.target + this.targetOffset
      };
      this.modelSet.getModel(0).update(modelChanges);
    }
    this.showTargetInfo = false;
  }

  private dragBarStart(which: CIBar): void {
    if (this.disableDragCI) return;

    this.barDragging = true;
  }

  private dragBar(which: CIBar, event: any): void {
    if (this.disableDragCI) return;

    let mouseX = d3.event.x - this.margin;
    let x = this.xScale.invert(mouseX);

    switch (which) {
      case CIBar.Left:
        let leftBarX = this.xScale(this.mainGroup.left);
        this.barTranslateOffset = mouseX - leftBarX;
        this.barOffset = x - this.mainGroup.left;
        break;

      case CIBar.Right:
        let rightBarX = this.xScale(this.mainGroup.right);
        this.barTranslateOffset = rightBarX - mouseX;
        this.barOffset = this.mainGroup.right - x;
        break;
    }

    let centerPath = this.getPath([
      { x: this.mainGroup.left + this.barOffset, y: 0.5 },
      { x: this.mainGroup.right - this.barOffset, y: 0.5 }
    ]);
    d3.select(`#${this.name}-main-center`).attr('d', centerPath);
  }

  private dragBarEnd(which: CIBar): void {
    if (this.disableDragCI) return;

    if (this.modelSet) {
      let modelChanges = {
        ci: this.ciWidth(),
        ciMode: true
      };
      this.modelSet.getModel(0).update(modelChanges);
    }
    this.showLeftBarInfo = false;
    this.showRightBarInfo = false;
  }
}