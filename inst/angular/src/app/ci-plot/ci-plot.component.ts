import {
  Component, Input, Output, OnChanges, SimpleChanges, AfterViewChecked,
  ViewChild, ElementRef, ViewEncapsulation, EventEmitter
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import * as d3 from 'd3';
import * as stableSort from 'stable';

import { AbstractPlotComponent, Draw } from '../abstract-plot.component';
import { CIPlotHandler, CIPlotParam, CIPlotGroup } from '../ci-plot-handler';
import { CI } from '../ci';
import { Point } from '../point';
import { Range } from '../range';
import { PlotOptionsService } from '../plot-options.service';
import { PaletteService } from '../palette.service';

enum CIBar {
  Left,
  Right
};

@Component({
  selector: 'app-ci-plot',
  templateUrl: './ci-plot.component.html',
  styleUrls: ['./ci-plot.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CIPlotComponent extends AbstractPlotComponent implements OnChanges, AfterViewChecked {
  @Input('handler') handler: CIPlotHandler;
  @Input('disable-drag-target') disableDragTarget = false;
  @Input('disable-drag-ci') disableDragCI = false;
  @Output() modelChanged = new EventEmitter();

  leftMargin: number = 10;
  rightMargin: number = 10;
  topMargin: number = 50;
  bottomMargin: number = 50;
  viewBox: string;
  yScaleSD: any;

  xParam: CIPlotParam;
  primaryGroup: CIPlotGroup;
  groups: CIPlotGroup[];
  groupOrder: number[];
  ciValuesLower: CI[];
  ciValuesUpper: CI[];
  needDraw = Draw.No;

  // target dragging
  targetDragging = false;
  targetWasDragging = false;
  showTargetInfo = false;
  primaryGroupOffset = 0;
  originalTargetPosition: number;

  // bar dragging
  barDragging = false;
  showLeftBarInfo = false;
  showRightBarInfo = false;

  constructor(
    public plotOptions: PlotOptionsService,
    public palette: PaletteService
  ) {
    super(plotOptions, palette);
  }

  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => {
      this.setup();
    }, 1);
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

  private setupDimensions(): boolean {
    // dimensions
    if (this.fixedWidth) {
      this.width = this.fixedWidth;
    } else {
      this.width = this.getDimension('width');
      if (this.width == 0) {
        // window isn't ready to draw
        return false;
      }
    }
    if (this.fixedHeight) {
      this.height = this.fixedHeight;
    } else {
      this.height = this.getDimension('height');
      if (this.height == 0) {
        // window isn't ready to draw
        return false;
      }
    }

    // margin
    this.topMargin = this.getFontSize() + 20;
    this.bottomMargin = 10 + this.getFontSize() +
      this.getAxisLineWidth() +         // x axis line width
      (this.getAxisFontSize() / 2) + 9; // x axis tick (font + tick)
    this.leftMargin = this.getAxisFontSize() + 9;
    this.rightMargin = this.leftMargin;

    this.viewBox = `0 0 ${this.width} ${this.height}`;
    this.innerWidth  = this.width  - this.leftMargin - this.rightMargin;
    this.innerHeight = this.height - this.topMargin - this.bottomMargin;

    return true;
  }

  protected setup(): boolean {
    if (!this.handler) {
      return false;
    }

    if (!this.setupDimensions()) {
      return false;
    }
    this.setupParams();
    this.setupGroups();
    this.setupScales();
    this.resetDragging();

    this.needDraw = Draw.Yes;
    return true;
  }

  private setupParams(): void {
    this.xParam = this.handler.getXParam();
    this.title = `Precision (95% Confidence Interval) vs. Effect Size`;
  }

  private setupGroups(): void {
    this.groups = this.handler.getGroups();

    let selectedIndex = this.handler.getSelectedIndex();
    this.primaryGroup = this.groups[selectedIndex];

    // sort primary group ciValues by lower and upper values if they exist
    if (this.primaryGroup.ciValues) {
      this.ciValuesLower = stableSort(this.primaryGroup.ciValues,
        (a, b) => d3.ascending(a.lower, b.lower));
      this.ciValuesUpper = stableSort(this.primaryGroup.ciValues,
        (a, b) => d3.ascending(a.upper, b.upper));
    }

    // order group in reverse so that they are drawn properly, put the selected
    // group at the end
    this.groupOrder = [];
    this.groups.forEach((group, index) => {
      if (index !== selectedIndex) {
        this.groupOrder.push(index);
      }
    });
    this.groupOrder.push(selectedIndex);
  }

  private setupScales(): void {
    this.xScale = d3.scaleLinear().
      domain(this.xParam.range.toArray()).
      range([0, this.innerWidth]);
    this.originalTargetPosition = this.xScale(this.primaryGroup.target);

    this.yScale = d3.scaleLinear().
      domain([0, 0.7]).
      range([0, this.innerHeight]);

    let sampDistExtent = this.groups.reduce((arr, group) => {
      let extent = d3.extent(group.sampDist, d => d.y);
      return d3.extent(arr.concat(extent));
    }, []);
    this.yScaleSD = d3.scaleLinear().
      domain(sampDistExtent.reverse()).
      range([0, this.yScale(0.5)]).
      clamp(true);
  }

  private resetDragging(): void {
    this.targetWasDragging = this.targetDragging;
    this.targetDragging = false;
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

    let svg = d3.select(this.plotElement.nativeElement);
    let t = svg.transition();

    // axes (drawn by d3)
    let xAxis = d3.axisBottom(this.xScale).ticks(Math.floor(this.innerWidth / 75));
    t.select(`#${this.name}-bottom-axis`).
      call(xAxis).
      attr("font-size", `${this.plotOptions.getAxisFontSize()}px`).
      attr("stroke-width", this.plotOptions.getAxisLineWidth());

    // alternate groups
    this.groups.forEach((group, index) => {
      let elt = t;
      if (this.targetWasDragging && this.isPrimaryGroup(index)) {
        // turn off animation for primary group if user was previously dragging
        // target dot
        elt = svg;
      }

      let id = `#${this.name}-group-${index}`;
      elt.select(id).
        attr('transform', this.translate(this.leftMargin, this.topMargin));

      let leftPath = this.getPath([
        { x: group.ci.lower, y: 0.40 },
        { x: group.ci.lower, y: 0.60 }
      ], 'x', 'y', false);
      elt.select(`${id}-left`).attr('d', leftPath);

      let rightPath = this.getPath([
        { x: group.ci.upper, y: 0.40 },
        { x: group.ci.upper, y: 0.60 }
      ], 'x', 'y', false);
      elt.select(`${id}-right`).attr('d', rightPath);

      let centerPath = this.getPath([
        { x: group.ci.lower, y: 0.5 },
        { x: group.ci.upper, y: 0.5 }
      ], 'x', 'y', false);
      elt.select(`${id}-center`).attr('d', centerPath);

      // sample distribution
      let distPath = this.getArea(group.sampDist, 'x', 'y');
      elt.select(`${id}-dist`).attr('d', distPath);

      elt.select(`${id}-target`).
        attr('cx', this.xScale(group.target)).
        attr('cy', this.yScale(0.5));

      if (this.isPrimaryGroup(index)) {
        // make target point draggable
        let target = svg.select(`${id}-target`);
        let targetDrag = d3.drag().
          container(target.node().parentNode.parentNode).
          on("start", this.dragTargetStart.bind(this)).
          on("drag", this.dragTarget.bind(this)).
          on("end", this.dragTargetEnd.bind(this));
        target.call(targetDrag);

        // make left bar draggable
        let leftBar = svg.select(`${id}-left`);
        let leftBarDrag = d3.drag().
          container(leftBar.node().parentNode.parentNode).
          on("start", this.dragBarStart.bind(this, CIBar.Left)).
          on("drag", this.dragBar.bind(this, CIBar.Left)).
          on("end", this.dragBarEnd.bind(this, CIBar.Left));
        leftBar.call(leftBarDrag);

        // make right bar draggable
        let rightBar = svg.select(`${id}-right`);
        let rightBarDrag = d3.drag().
          container(rightBar.node().parentNode.parentNode).
          on("start", this.dragBarStart.bind(this, CIBar.Right)).
          on("drag", this.dragBar.bind(this, CIBar.Right)).
          on("end", this.dragBarEnd.bind(this, CIBar.Right));
        rightBar.call(rightBarDrag);
      }
    });

    this.needDraw = Draw.No;
  }

  private drawInfoBox(which: string): void {
    let svg = d3.select(this.plotElement.nativeElement);
    let boxId = `#${this.name}-${which}-box`;
    let box = svg.select(boxId);
    let coordsId = `#${this.name}-${which}-coords`;
    let coords = svg.select(coordsId);
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
    return Math.abs(this.primaryGroup.ci.upper - this.primaryGroup.ci.lower);
  }

  getGroupFillOpacity(index: number): number {
    if (this.targetDragging && index === this.handler.getSelectedIndex()) {
      return 0.1;
    }
    return 0.5;
  }

  isPrimaryGroup(index: number): boolean {
    return this.handler.getSelectedIndex() === index;
  }

  private getArea(points: any[], xName: string, yName: string): string {
    let area = d3.area().curve(d3.curveBasis).
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

    this.primaryGroupOffset = mouseX - this.originalTargetPosition;
    this.primaryGroup.target = x;

    this.needDraw = Draw.Hover;
  }

  private dragTargetEnd(): void {
    if (this.disableDragTarget) return;

    if (this.handler) {
      this.handler.updateTargetValue(this.primaryGroup.target).subscribe(() => {
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

    // If the primary group contains a discrete list of CI value pairs, find the
    // closest pair that matches the x position of the mouse. Otherwise, simply
    // use the scaled value of x and move both bars equally.
    if (this.primaryGroup.ciValues) {
      let bisector, ciValues;
      switch (which) {
        case CIBar.Left:
          ciValues = this.ciValuesLower;
          bisector = d3.bisector(data => data.lower).left;
          break;

        case CIBar.Right:
          ciValues = this.ciValuesUpper;
          bisector = d3.bisector(data => data.upper).left;
          break;
      }
      let index = bisector(ciValues, x);
      if (!index) return;
      if (index >= ciValues.length) {
        index = ciValues.length - 1;
      }

      this.primaryGroup.ci = ciValues[index];
    } else {
      let diff = 0;
      switch (which) {
        case CIBar.Left:
          diff = x - this.primaryGroup.ci.lower;
          break;

        case CIBar.Right:
          diff = this.primaryGroup.ci.upper - x;
          break;
      }
      this.primaryGroup.ci.lower += diff;
      this.primaryGroup.ci.upper -= diff;
    }
    this.handler.setIntermediateCIValue(this.primaryGroup.ci);

    // redraw lines
    let leftPath = this.getPath([
      { x: this.primaryGroup.ci.lower, y: 0.40 },
      { x: this.primaryGroup.ci.lower, y: 0.60 }
    ], 'x', 'y', false);

    let rightPath = this.getPath([
      { x: this.primaryGroup.ci.upper, y: 0.40 },
      { x: this.primaryGroup.ci.upper, y: 0.60 }
    ], 'x', 'y', false);

    let centerPath = this.getPath([
      { x: this.primaryGroup.ci.lower, y: 0.5 },
      { x: this.primaryGroup.ci.upper, y: 0.5 }
    ], 'x', 'y', false);

    let g = d3.select(this.plotElement.nativeElement).select('g.primary-group');
    g.select(`path.left`).attr('d', leftPath);
    g.select(`path.right`).attr('d', rightPath);
    g.select(`path.center`).attr('d', centerPath);

    this.needDraw = Draw.Hover;
  }

  private dragBarEnd(which: CIBar): void {
    if (this.disableDragCI) return;

    if (this.handler) {
      this.handler.updateCIValue(this.primaryGroup.ci).subscribe(() => {
        this.modelChanged.emit();
      });
    }
    this.showLeftBarInfo = false;
    this.showRightBarInfo = false;
  }
}
