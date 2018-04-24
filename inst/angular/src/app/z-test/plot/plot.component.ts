import {
  Component, Input, Output, OnChanges, SimpleChanges, AfterViewChecked,
  ViewChild, ElementRef, ViewEncapsulation, EventEmitter
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import * as d3 from 'd3';
import * as stableSort from 'stable';

import { AbstractPlotComponent, Draw } from '../../abstract-plot.component';
import { Range } from '../../range';
import { Point } from '../../point';
import { Project } from '../project';
import { PlotOptionsService } from '../../plot-options.service';
import { PaletteService } from '../../palette.service';

interface Param {
  name: string;
  target?: number;
  range: Range;
  title: string;
  sym: string;
}

interface Path {
  index: number;
  id: string;
  path: string;
  color: string;
  dashArray: string;
  lineCap: string;
  opacity: number;
  primary: boolean;
}

enum HoverInfo {
  Disabled,
  NonTarget,
  Target
}

@Component({
  selector: 'z-test-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PlotComponent extends AbstractPlotComponent implements OnChanges, AfterViewChecked {
  @Input('project') project: Project;
  @Input('hover-disabled') hoverDisabled = false;
  @Input('hide-drop-lines') hideDropLines = false;
  @Input('hide-target') hideTarget = false;
  @Input('disable-drag') disableDrag = false;
  @Input('legend-x-offset') legendXOffset = 0;
  @Input('legend-y-offset') legendYOffset = 0;
  @Output() modelChanged = new EventEmitter();

  constructor(
    public plotOptions: PlotOptionsService,
    public palette: PaletteService
  ) {
    super(plotOptions, palette);
  }

  leftMargin: number = 50;
  rightMargin: number = 50;
  topMargin: number = 50;
  bottomMargin: number = 50;
  yAxisWidth: number = 10;
  xAxisHeight: number = 10;
  viewBox = "0 0 0 0";
  x: Param;
  y: Param;
  dataKey: string;
  plotData: any[];
  paths: Path[];
  dropPaths: string[];
  mainData: any[];
  target: Point;
  xBisector: any;
  hoverX: number;
  hoverY: number;
  hoverPoint: Point;
  hoverInfo = HoverInfo.Disabled;
  lastDragEvent: any;

  targetDragging = false;
  needDraw = Draw.No;

  ngOnChanges(changes: SimpleChanges): void {
    let result = this.setup();
    if (!result && this.project) {
      // this might happen if the browser elements aren't ready yet
      setTimeout(() => {
        this.setup();
      }, 1);
    }
  }

  ngAfterViewChecked(): void {
    this.draw();
  }

  redraw(): void {
    this.setup();
  }

  hover(event: any, target?: Point): void {
    this.hoverPoint = undefined;
    this.hoverInfo = HoverInfo.Disabled;
    if (target) {
      this.hoverPoint = target;
      this.hoverInfo = HoverInfo.Target;

    } else if (!this.hoverDisabled) {
      var dim = event.target.getBoundingClientRect();
      var x = event.clientX - dim.left;
      //var y = event.clientY - dim.top;

      let index = this.xBisector(this.mainData, this.xScale.invert(x));
      let point = this.mainData[index];
      if (point) {
        this.hoverPoint = point;
        this.hoverInfo = HoverInfo.NonTarget;
      }
    }

    if (this.hoverPoint) {
      this.hoverX = this.xScale(this.hoverPoint.x);
      this.hoverY = this.yScale(this.hoverPoint.y);
      this.needDraw = Draw.Hover;
    }
  }

  hoverInfoY(): string {
    if (this.hoverY < this.target.y) {
      return "-3.5em";
    }
    return "1em";
  }

  trackByIndex(index: number, path: Path): any {
    return index;
  }

  trackById(index: number, path: Path): any {
    return path.id;
  }

  isHoverInfoActive(): boolean {
    return this.hoverInfo != HoverInfo.Disabled;
  }

  isHoverInfoTarget(): boolean {
    return this.hoverInfo == HoverInfo.Target;
  }

  hideHoverInfo(event: any): void {
    // check to make sure mouse is actually outside box and not just on top of
    // the target dot
    var dim = event.target.getBoundingClientRect();
    let x = event.clientX;
    let y = event.clientY;

    if (x < dim.left || x > dim.right || y < dim.top || y > dim.bottom) {
      this.hoverInfo = HoverInfo.Disabled;
    }
  }

  getPathColor(index: number): string {
    return this.palette.getColor(index, this.plotOptions.paletteTheme);
  }

  getDashArray(index: number): string {
    let pattern = this.palette.getPattern(index, this.plotOptions.paletteTheme);
    return this.plotOptions.dashArray(pattern);
  }

  getLineCap(index: number): string {
    let pattern = this.palette.getPattern(index, this.plotOptions.paletteTheme);
    return this.plotOptions.lineCap(pattern);
  }

  resetLegend(): void {
    this.legendXOffset = 0;
    this.legendYOffset = 0;
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
    this.yAxisWidth = 10 +
      this.plotOptions.getAxisLineWidth() +   // y axis line width
      this.plotOptions.getAxisFontSize() + 9; // y axis tick (font + tick)
    this.xAxisHeight = 10 +
      this.plotOptions.getAxisLineWidth() +         // x axis line width
      (this.plotOptions.getAxisFontSize() / 2) + 9; // x axis tick (font + tick)

    this.leftMargin = this.plotOptions.getFontSize() + this.yAxisWidth + 10;
    this.rightMargin = this.plotOptions.getAxisFontSize() + 9;
    this.topMargin = this.plotOptions.getFontSize() + 10;
    this.bottomMargin = this.plotOptions.getFontSize() + this.xAxisHeight + 10;

    this.viewBox = `0 0 ${this.width} ${this.height}`;
    this.innerWidth  = this.width  - this.leftMargin - this.rightMargin;
    this.innerHeight = this.height - this.topMargin - this.bottomMargin;

    return true;
  }

  private setupParams(): boolean {
    // Setup parameters. Dimensions should be setup by this point.
    let model = this.project.getModel(this.project.selectedIndex);
    if (model.output == 'n' || model.output == 'nByCI') {
      if (this.name == 'top-left' || this.name == 'top-left-export') {
        // Sample Size vs. Power
        this.x = {
          name: 'power', range: this.project.powerRange, target: model.power,
          title: 'Power', sym: '1-β'
        };
        this.dataKey = 'nVsPower';

      } else if (this.name == 'top-right' || this.name == 'top-right-export') {
        // Sample Size vs. Detectable Alternative
        this.x = {
          name: 'delta', range: this.project.deltaRange, target: model.delta,
          title: 'Detectable Alternative', sym: 'δ'
        };
        this.dataKey = 'nVsDelta';

      } else {
        return false;
      }

      this.y = {
        name: 'n', range: this.project.nRange, target: model.n,
        title: 'Sample Size', sym: 'n'
      };
    } else if (model.output == 'power') {
      if (this.name == 'top-left' || this.name == 'top-left-export') {
        // Power vs. Sample Size
        this.x = {
          name: 'n', range: this.project.nRange, target: model.n,
          title: 'Sample Size', sym: 'n'
        };
        this.y = {
          name: 'power', range: this.project.powerRange, target: model.power,
          title: 'Power', sym: '1-β'
        };
        this.dataKey = 'powerVsN';

      } else if (this.name == 'top-right' || this.name == 'top-right-export') {
        // Power vs. Detectable Alternative
        this.x = {
          name: 'delta', range: this.project.deltaRange, target: model.delta,
          title: 'Detectable Alternative', sym: 'δ'
        };
        this.y = {
          name: 'power', range: this.project.powerRange, target: model.power,
          title: 'Power', sym: '1-β'
        };
        this.dataKey = 'powerVsDelta';

      } else {
        return false;
      }
    } else if (model.output == 'delta') {
      if (this.name == 'top-left' || this.name == 'top-left-export') {
        // Detectable Alternative vs. Sample Size
        this.x = {
          name: 'n', range: this.project.nRange, target: model.n,
          title: 'Sample Size', sym: 'n'
        };
        this.dataKey = 'deltaVsN';

      } else if (this.name == 'top-right' || this.name == 'top-right-export') {
        // Detectable Alternative vs. Power
        this.x = {
          name: 'power', range: this.project.powerRange, target: model.power,
          title: 'Power', sym: '1-β'
        };
        this.dataKey = 'deltaVsPower';

      } else {
        return false;
      }

      this.y = {
        name: 'delta', range: this.project.deltaRange, target: model.delta,
        title: 'Detectable Alternative', sym: 'δ'
      };
    } else {
      return false;
    }

    // format symbol to make widths identical
    while (this.x.sym.length < this.y.sym.length) {
      this.x.sym = ' ' + this.x.sym;
    }
    while (this.y.sym.length < this.x.sym.length) {
      this.y.sym = ' ' + this.y.sym;
    }

    this.title = `${this.y.title} vs. ${this.x.title}`;
    return true;
  }

  private setupPlotData(): boolean {
    this.plotData = this.project.models.map(m => m[this.dataKey]);

    // Prepare main data for bisection during target point dragging.
    this.mainData = stableSort(
      this.plotData[this.project.selectedIndex],
      (a, b) => d3.ascending(a.x, b.x));
    this.xBisector = d3.bisector(point => point.x).left;

    return true;
  }

  private setupScales(): void {
    this.xScale = d3.scaleLinear().
      domain(this.x.range.toArray()).
      range([0, this.innerWidth]);

    this.yScale = d3.scaleLinear().
      domain(this.y.range.toArray().reverse()).
      range([0, this.innerHeight]);
  }

  private setupTarget(): void {
    let model = this.project.getModel(this.project.selectedIndex);
    this.target = { x: this.x.target, y: this.y.target } as Point;
  }

  private setupPaths(): void {
    this.paths = this.plotData.map((d, i) => {
      let id = `${this.name}-path-${i}`
      let path = this.getPath(d, 'x', 'y');
      let color = this.getPathColor(i);
      let dashArray = this.getDashArray(i);
      let lineCap = this.getLineCap(i);
      let primary = this.project.selectedIndex == i;
      let result = {
        index: i, id: id, path: path, color: color, dashArray: dashArray,
        lineCap: lineCap, opacity: primary ? 1 : 0.7, primary: primary
      } as Path;
      return result;
    });

    // order paths in reverse so that they are drawn properly, put the selected
    // line at the end
    this.paths.sort((a, b) => {
      if (a.primary) return 1;
      if (b.primary) return -1;
      return b.index - a.index;
    });
  }

  private setupDropPaths(): void {
    this.dropPaths = [];
    let path = d3.line().
      x((d, i) => this.xScale(d.x)).
      y((d, i) => this.yScale(d.y));

    let xData = [
      { x: this.target.x, y: this.yScale.domain()[1] },
      { x: this.target.x, y: this.target.y }
    ];
    this.dropPaths.push(path(xData));

    let yData = [
      { x: this.xScale.domain()[0], y: this.target.y },
      { x: this.target.x, y: this.target.y }
    ];
    this.dropPaths.push(path(yData));
  }

  protected setup(): void {
    if (!this.project) {
      return false;
    }
    if (!this.setupDimensions()) {
      return false;
    }
    if (!this.setupParams()) {
      return false;
    }
    if (!this.setupPlotData()) {
      return false;
    }
    this.setupScales();
    this.setupTarget();
    this.setupPaths();
    this.setupDropPaths();

    if (this.lastDragEvent) {
      this.hover(this.lastDragEvent);
      this.lastDragEvent = undefined;
    }

    this.needDraw = Draw.Yes;
    return true;
  }

  private getHoverBoxPath(above: boolean, coords: any): void {
    let dim = coords.getBBox();
    let left = dim.x - 5, right = dim.x + dim.width + 5;
    let unit = dim.width / 16;
    let lmid = left + (7 * unit) + 5, rmid = left + (9 * unit) + 5;
    let mid = left + (8 * unit) + 5;

    let top, bottom, bottom2;
    if (above) {
      top = dim.y - 5;
      bottom = dim.y + dim.height + 5;
      bottom2 = bottom + 5;
    } else {
      top = dim.y + dim.height + 5;
      bottom = dim.y - 5;
      bottom2 = bottom - 5;
    }
    return d3.line()([
      [left, top], [right, top], [right, bottom],
      [rmid, bottom], [mid, bottom2], [lmid, bottom],
      [left, bottom], [left, top]
    ]);
  }

  private draw(): void {
    if (this.needDraw == Draw.No) {
      return;
    }

    let svg = d3.select(this.plotElement.nativeElement);

    if (this.hoverInfo != HoverInfo.Disabled) {
      // draw hover info box
      let t = svg.transition().duration(50);

      let info = svg.select(`#${this.name}-hover-info`);
      info.attr('transform', this.translate(
        this.leftMargin + this.hoverX, this.topMargin + this.hoverY));

      let above = this.hoverY >= 50;

      let box = t.select(`#${this.name}-hover-box`);
      let coords = t.select(`#${this.name}-hover-coords`);
      coords.attr('y', above ? "-2.5em" : "2.5em");

      if (box.size() > 0 && coords.size() > 0) {
        box.attrTween('d', () => {
          return this.getHoverBoxPath.bind(this, above, coords.node());
        });
      }
    }

    if (this.needDraw == Draw.Hover) {
      // only need to draw hover box
      this.needDraw = Draw.No;
      return;
    }

    let t = svg.transition();

    // axes (drawn by d3)
    let xAxis = d3.axisBottom(this.xScale).ticks(Math.floor(this.innerWidth / 75));
    t.select(`#${this.name}-x-axis`).
      call(xAxis).
      attr("font-size", `${this.plotOptions.getAxisFontSize()}px`).
      attr("stroke-width", this.plotOptions.getAxisLineWidth());

    let yAxis = d3.axisLeft(this.yScale).ticks(Math.floor(this.innerHeight / 75));
    t.select(`#${this.name}-y-axis`).
      call(yAxis).
      attr("font-size", `${this.plotOptions.getAxisFontSize()}px`).
      attr("stroke-width", this.plotOptions.getAxisLineWidth());

    // paths
    for (let i = 0, ilen = this.paths.length; i < ilen; i++) {
      let path = t.select(`#${this.paths[i].id}`);
      if (!path.attr("d")) {
        path.attr("d", this.paths[i].path);
      } else {
        path.attrTween("d", this.pathTween(this.paths[i].path, 4))
      }
    }

    // target
    let targetId = `#${this.name}-target`;
    t.select(targetId).
      attr('cx', this.xScale(this.target.x)).
      attr('cy', this.yScale(this.target.y));

    // drop paths
    for (let i = 0, ilen = this.dropPaths.length; i < ilen; i++) {
      t.select(`${targetId}-drop-${i}`).attr("d", this.dropPaths[i]);
    }

    // drag
    if (!this.disableDrag) {
      let target = svg.select(targetId);
      let targetDrag = d3.drag().
        on("start", this.dragTargetStart.bind(this)).
        on("drag", this.dragTarget.bind(this)).
        on("end", this.dragTargetEnd.bind(this));
      target.call(targetDrag);
    }

    // legend box
    if (this.paths.length > 1) {
      let box = svg.select(`#${this.name}-legend-box`);
      let labels = svg.select(`#${this.name}-legend-labels`);
      if (box.size() > 0 && labels.size() > 0) {
        let dim = labels.node().getBBox();
        let left = dim.x - 5, right = dim.x + dim.width + 5;
        let top = dim.y - 5, bottom = dim.y + dim.height + 5;
        box.attr("d", d3.line()([
          [left, top], [right, top], [right, bottom],
          [left, bottom], [left, top]
        ]));
      }

      let legend = svg.select(`#${this.name}-legend`);
      let legendDrag = d3.drag().
        on("drag", this.dragLegend.bind(this));
      legend.call(legendDrag);
    }

    this.needDraw = Draw.No;
  }

  private dragTargetStart(): void {
    this.targetDragging = true;
  }

  private dragTarget(event: any): void {
    let x = this.xScale.invert(d3.event.x - this.leftMargin);
    if (x < this.x.range.min) {
      x = this.x.range.min;
    } else if (x > this.x.range.max) {
      x = this.x.range.max;
    }
    let index = this.xBisector(this.mainData, x);
    let point = this.mainData[index];
    if (!point) return;

    let svg = d3.select(this.plotElement.nativeElement);
    let targetId = `#${this.name}-target`;
    this.target = point;
    this.setupDropPaths();

    svg.select(targetId).
      attr("cx", this.xScale(this.target.x)).
      attr("cy", this.yScale(this.target.y));

    for (let i = 0, ilen = this.dropPaths.length; i < ilen; i++) {
      svg.select(`${targetId}-drop-${i}`).attr("d", this.dropPaths[i]);
    }
    this.hover(event, this.target);
  }

  private dragTargetEnd(event: any): void {
    this.targetDragging = false;

    if (this.project && this.x.name) {
      this.lastDragEvent = event;
      this.project.updateModel(this.project.selectedIndex, this.x.name, this.target.x).
        then(() => {
          this.modelChanged.emit();
        });
    }
  }

  private dragLegend(): void {
    this.legendXOffset += d3.event.dx;
    this.legendYOffset += d3.event.dy;
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
