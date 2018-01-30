import {
  Component, Input, Output, OnChanges, SimpleChanges, AfterViewChecked,
  ViewChild, ElementRef, ViewEncapsulation, EventEmitter
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/debounceTime';

import * as d3 from 'd3';

import { AbstractPlotComponent, Draw } from '../abstract-plot.component';
import { Project } from '../project';
import { Range } from '../range';
import { PlotOptionsService } from '../plot-options.service';
import { PaletteService } from '../palette.service';

interface Group {
  leftPath: string;
  centerPath: string;
  rightPath: string;
  distPath: string;
  left: number;
  target: number;
  right: number;
  label: string;
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
export class BottomPlotComponent extends AbstractPlotComponent implements OnChanges, AfterViewChecked {
  @Input('project') project: Project;
  @Input('disable-drag-target') disableDragTarget = false;
  @Input('disable-drag-ci') disableDragCI = false;
  @Output() modelChanged = new EventEmitter();

  @ViewChild('target') targetElement: ElementRef;
  @ViewChild('leftBar') leftBarElement: ElementRef;
  @ViewChild('rightBar') rightBarElement: ElementRef;

  leftMargin: number = 10;
  rightMargin: number = 10;
  topMargin: number = 50;
  bottomMargin: number = 50;

  yScaleSD: any;
  plotData: any[];
  mainGroup: Group;
  groups: Group[];
  needDraw = Draw.No;

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

  constructor(
    public plotOptions: PlotOptionsService,
    public palette: PaletteService
  ) {
    super(plotOptions, palette);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setup();
  }

  ngAfterViewChecked(): void {
    this.draw();
  }

  redraw(): void {
    this.setup();
  }

  toggleTargetInfo(value: boolean): void {
    if (!this.targetDragging && !this.barDragging) {
      this.showTargetInfo = value;
      if (value) {
        this.needDraw = Draw.Hover;
      }
    }
  }

  toggleLeftBarInfo(value: boolean): void {
    if (!this.targetDragging && !this.barDragging) {
      this.showLeftBarInfo = value;
      if (value) {
        this.needDraw = Draw.Hover;
      }
    }
  }

  toggleRightBarInfo(value: boolean): void {
    if (!this.targetDragging && !this.barDragging) {
      this.showRightBarInfo = value;
      if (value) {
        this.needDraw = Draw.Hover;
      }
    }
  }

  getColor(index: number, invert = true): string {
    if (invert) {
      index = this.groups.length - index;
    }
    return this.palette.getColor(index, this.plotOptions.paletteTheme);
  }

  trackByIndex(index: number, thing: any): any {
    return index;
  }

  private setupDimensions(): void {
    // margin
    this.topMargin = this.plotOptions.getFontSize() + 10;
    this.bottomMargin = 10 + this.plotOptions.getFontSize() +
      this.plotOptions.getAxisLineWidth() +         // x axis line width
      (this.plotOptions.getAxisFontSize() / 2) + 9; // x axis tick (font + tick)
    this.leftMargin = 10;
    this.rightMargin = 10;

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
    this.innerWidth  = this.width  - this.leftMargin - this.rightMargin;
    this.innerHeight = this.height - this.topMargin - this.bottomMargin;
  }

  protected setup(): void {
    if (!this.project) {
      return;
    }

    this.setupTitle();
    this.setupDimensions();
    this.setupPlotData();
    this.setupScales();
    this.setupGroups();
    this.resetDragging();

    this.needDraw = Draw.Yes;
  }

  private setupTitle(): void {
    this.title = `Precision (95% Confidence Interval) vs. Effect Size`;
  }

  private setupPlotData(): void {
    this.plotData = this.project.models.map(m => m.sampDist);
  }

  private setupScales(): void {
    let pSpaceRange = this.project.pSpaceRange;
    this.xScale = d3.scaleLinear().
      domain(pSpaceRange.toArray()).
      range([0, this.innerWidth]);

    this.yScale = d3.scaleLinear().
      domain([0, 0.8]).
      range([0, this.innerHeight]);

    let sampDistExtent = this.plotData.reduce((arr, sampDist) => {
      let extent = d3.extent(sampDist, d => d.y);
      return d3.extent(arr.concat(extent));
    }, []);
    this.yScaleSD = d3.scaleLinear().
      domain(sampDistExtent.reverse()).
      range([0, this.yScale(0.5)]).
      clamp(true);
  }

  private setupGroups(): void {
    this.groups = this.project.models.map((model, i) => {
      let range = model.precisionRange;

      // main lines
      let leftLimit = range.min;
      let leftPath = this.getPath([
        { x: leftLimit, y: 0.35 },
        { x: leftLimit, y: 0.65 }
      ]);

      let rightLimit = range.max;
      let rightPath = this.getPath([
        { x: rightLimit, y: 0.35 },
        { x: rightLimit, y: 0.65 }
      ]);

      let centerPath = this.getPath([
        { x: leftLimit, y: 0.5 },
        { x: rightLimit, y: 0.5 }
      ]);

      // sample distribution
      let distPath = this.getArea(this.plotData[i], 'x', 'y');

      let result = {
        leftPath: leftPath,
        centerPath: centerPath,
        rightPath: rightPath,
        distPath: distPath,
        left: leftLimit,
        target: model.delta,
        right: rightLimit,
        label: "95% CI"
      }
      return result;
    }).reverse();
    this.mainGroup = this.groups.pop();
  }

  private resetDragging(): void {
    this.targetTranslateOffset = this.targetOffset = 0;
    this.targetWasDragging = this.targetDragging;
    this.targetDragging = false;
    this.barTranslateOffset = this.barOffset = 0;
    this.barWasDragging = this.barDragging;
    this.barDragging = false;
  }

  private draw(): void {
    if (this.needDraw == Draw.No) {
      return;
    }

    this.drawInfoBox('left');
    this.drawInfoBox('right');
    this.drawInfoBox('target');

    if (this.needDraw == Draw.Hover) {
      this.needDraw = Draw.No;
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

    this.needDraw = Draw.No;
  }

  private drawInfoBox(which: string): void {
    let svg = d3.select(this.plotElement.nativeElement);
    let box = svg.select(`#${this.name}-${which}-box`);
    let coords = svg.select(`#${this.name}-${which}-coords`);
    if (box.size() > 0 && coords.size() > 0) {
      let dim = coords.node().getBBox();
      let left = dim.x - 5, right = dim.x + dim.width + 5;
      let unit = dim.width / 16;
      let lmid = left + (7 * unit) + 5, rmid = left + (9 * unit) + 5;
      let mid = left + (8 * unit) + 5;
      let top = dim.y - 5, bottom = dim.y + dim.height + 5;
      box.attr("d", d3.line()([
        [left, top], [right, top], [right, bottom],
        [rmid, bottom], [mid, bottom + 5], [lmid, bottom],
        [left, bottom], [left, top]
      ]));
    }
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

    let mouseX = d3.event.x - this.leftMargin;
    let x = this.xScale.invert(mouseX);
    if (x >= 0 && x < 0.1) {
      x = 0.1;
      mouseX = this.xScale(x);
    } else if (x < 0 && x > -0.1) {
      x = -0.1;
      mouseX = this.xScale(x);
    }

    let targetX = this.xScale(this.mainGroup.target);
    this.targetTranslateOffset = mouseX - targetX;

    this.targetOffset = x - this.mainGroup.target;
  }

  private dragTargetEnd(): void {
    if (this.disableDragTarget) return;

    if (this.project) {
      let newDelta = this.mainGroup.target + this.targetOffset;
      this.project.updateModel(0, 'delta', newDelta).then(() => {
        this.modelChanged.emit();
      });
    }
    this.showTargetInfo = false;
  }

  private dragBarStart(which: CIBar): void {
    if (this.disableDragCI) return;

    this.barDragging = true;
  }

  private dragBar(which: CIBar, event: any): void {
    if (this.disableDragCI) return;

    let mouseX = d3.event.x - this.leftMargin;
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

    if (this.project) {
      let model = this.project.getModel(0);
      this.project.updateModel(0, 'ci', this.ciWidth()).then(() => {
        this.modelChanged.emit();
      });
    }
    this.showLeftBarInfo = false;
    this.showRightBarInfo = false;
  }
}
