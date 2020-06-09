import { Component, Input, Output, OnChanges, AfterViewChecked, SimpleChanges, EventEmitter } from '@angular/core';
import * as d3 from 'd3';
import * as stableSort from 'stable';

import { Point } from '../point';
import { AbstractPlotComponent, Draw } from '../abstract-plot.component';
import { PlotOptionsService } from '../plot-options.service';
import { PaletteService } from '../palette.service';
import { LinePlotHandler, LinePlotParam } from '../line-plot-handler';

interface PathInfo {
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
  selector: 'app-line-plot',
  templateUrl: './line-plot.component.html',
  styleUrls: ['./line-plot.component.css']
})
export class LinePlotComponent extends AbstractPlotComponent implements OnChanges, AfterViewChecked {
  @Input() handler: LinePlotHandler;
  @Input('hover-disabled') hoverDisabled = false;
  @Input('hide-drop-lines') hideDropLines = false;
  @Input('hide-target') hideTarget = false;
  @Input('disable-drag') disableDrag = false;
  @Input('legend-x-offset') legendXOffset = 0;
  @Input('legend-y-offset') legendYOffset = 0;
  @Output() modelChanged = new EventEmitter();

  /* Calculated properties */
  yAxisWidth: number;
  xAxisHeight: number;
  leftMargin: number;
  rightMargin: number;
  topMargin: number;
  bottomMargin: number;
  viewBox: string;
  x: LinePlotParam;
  y: LinePlotParam;
  plotData: Point[][];
  mainData: Point[];
  target: Point;
  paths: PathInfo[];
  dropPaths: string[];
  xBisector: any;
  hoverX: number;
  hoverY: number;
  hoverPoint: Point;
  hoverInfo = HoverInfo.Disabled;
  lastDragEvent: any;
  targetDragging = false;
  needDraw = Draw.No;
  setupTimeoutId: number;
  setupCompleted = false;
  attemptDraw = true;

  constructor(
    public plotOptions: PlotOptionsService,
    public palette: PaletteService
  ) {
    super(plotOptions, palette);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.setupTimeoutId === undefined) {
      console.log(`${this.name} setting timeout for setup`);
      this.setupTimeoutId = setTimeout(() => {
        // give browser a tick to be ready
        this.setupCompleted = this.setup();
        console.log(`${this.name} setup result (from ngOnChanges): ${this.setupCompleted}`);
        this.setupTimeoutId = undefined;
      }, 1);
    }
  }

  ngAfterViewChecked(): void {
    if (this.attemptDraw) {
      try {
        this.draw();
      } catch(e) {
        console.log(`${this.name} draw failed!`);
        console.log(e);
        this.attemptDraw = false;
      }
    }
  }

  redraw(): void {
    this.setupCompleted = this.setup();
    console.log(`${this.name} setup result (from redraw): ${this.setupCompleted}`);
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

    if (this.hoverPoint && this.hoverPoint.x && this.hoverPoint.y) {
      this.hoverX = this.xScale(this.hoverPoint.x);
      this.hoverY = this.yScale(this.hoverPoint.y);
      this.needDraw = Draw.Hover;
    }
  }

  trackByIndex(index: number, path: PathInfo): any {
    return index;
  }

  trackById(index: number, path: PathInfo): any {
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

  resetLegend(): void {
    this.legendXOffset = 0;
    this.legendYOffset = 0;
  }

  private setupDimensions(): boolean {
    /* Setup width and height */
    if (this.fixedWidth) {
      this.width = this.fixedWidth;
    } else {
      this.width = this.getWidth();
      if (this.width == 0) {
        // window isn't ready to draw
        return false;
      }
    }

    if (this.fixedHeight) {
      this.height = this.fixedHeight;
    } else {
      this.height = this.getHeight();
      if (this.height == 0) {
        // window isn't ready to draw
        return false;
      }
    }

    /* Setup plot margins */
    this.yAxisWidth = 10 +
      this.getAxisLineWidth() +   /* y axis line width */
      this.getAxisFontSize() + 9; /* y axis tick (font + tick) */
    this.xAxisHeight = 10 +
      this.getAxisLineWidth() +         /* x axis line width */
      (this.getAxisFontSize() / 2) + 9; /* x axis tick (font + tick) */

    this.leftMargin = this.getFontSize() + this.yAxisWidth + 10;
    this.rightMargin = this.getAxisFontSize() + 9;
    this.topMargin = this.getFontSize() + 10;
    this.bottomMargin = this.getFontSize() + this.xAxisHeight + 10;

    this.viewBox = `0 0 ${this.width} ${this.height}`;
    this.innerWidth  = this.width  - this.leftMargin - this.rightMargin;
    this.innerHeight = this.height - this.topMargin - this.bottomMargin;

    return true;
  }

  private setupParams(): boolean {
    this.x = this.handler.getXParam(this.name);
    if (!this.x) {
      return false;
    }

    this.y = this.handler.getYParam(this.name);
    if (!this.y) {
      return false;
    }

    /* Format symbols to make widths identical */
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
    this.plotData = this.handler.getPlotData(this.name);
    if (!this.plotData) {
      return false;
    }

    // Prepare main data for bisection during target point dragging.
    let selectedIndex = this.handler.getSelectedIndex();
    this.mainData = stableSort(
      this.plotData[selectedIndex].filter(p => {
        return Number.isFinite(p.x) && Number.isFinite(p.y)
      }),
      (a, b) => d3.ascending(a.x, b.x)
    );
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
    this.target = { x: this.x.target, y: this.y.target } as Point;
  }

  private setupPaths(): void {
    this.paths = this.plotData.map((d, i) => {
      let id = `${this.name}-path-${i}`
      let path = this.getPath(d, 'x', 'y');
      let color = this.getPathColor(i);
      let dashArray = this.getDashArray(i);
      let lineCap = this.getLineCap(i);
      let primary = this.handler.getSelectedIndex() == i;
      let result = {
        index: i, id: id, path: path, color: color, dashArray: dashArray,
        lineCap: lineCap, opacity: primary ? 1 : 0.7, primary: primary,
        points: d
      } as PathInfo;
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

  /* This function is run on a 1-ms delay after the view is initialized (see
   * AbstractPlotComponent). The reason why I can't just use immediate functions
   * to provide things that depend on width and height (like the viewbox) is because
   * Angular doesn't like it when stuff changes outside of its normal cycle. */
  protected setup(): boolean {
    if (!this.handler) {
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

  private getHoverBoxPath(above: boolean, coords: any): string {
    let dim;
    try {
      // This will fail in Firefox if coords is hidden, and there's some race
      // condition that I can't quite figure out. Hence this try/catch.
      dim = coords.getBBox();
    } catch (err) {
      return "";
    }

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
    if (!this.setupCompleted) {
      return;
    }
    if (this.needDraw == Draw.No) {
      return;
    }

    let svg = d3.select(this.plotElement.nativeElement);

    if (this.hoverInfo != HoverInfo.Disabled && this.hoverX >= 0 && this.hoverY >= 0) {
      // draw hover info box
      let ht = d3.transition().duration(50);

      let info = svg.select(`#${this.name}-hover-info`);
      info.attr('transform', this.translate(
        this.leftMargin + this.hoverX, this.topMargin + this.hoverY));

      let above = this.hoverY >= 50;

      let box = svg.select(`#${this.name}-hover-box`);
      let coords = svg.select(`#${this.name}-hover-coords`);
      coords.transition(ht).attr('y', above ? "-2.5em" : "2.5em");

      box.transition(ht).
        attrTween('d', () => {
          return (t) => this.getHoverBoxPath(above, coords.node());
        });
    }

    if (this.needDraw == Draw.Hover) {
      // only need to draw hover box
      this.needDraw = Draw.No;
      return;
    }

    let t = d3.transition();

    // axes (drawn by d3)
    let xAxis = d3.axisBottom(this.xScale).ticks(Math.floor(this.innerWidth / 75));
    svg.select(`#${this.name}-x-axis`).
      transition(t).
      call(xAxis).
      attr("font-size", `${this.plotOptions.getAxisFontSize()}px`).
      attr("stroke-width", this.plotOptions.getAxisLineWidth());

    let yAxis = d3.axisLeft(this.yScale).ticks(Math.floor(this.innerHeight / 75));
    svg.select(`#${this.name}-y-axis`).
      transition(t).
      call(yAxis).
      attr("font-size", `${this.plotOptions.getAxisFontSize()}px`).
      attr("stroke-width", this.plotOptions.getAxisLineWidth());

    // paths
    for (let i = 0, ilen = this.paths.length; i < ilen; i++) {
      let path = svg.select(`#${this.paths[i].id}`);
      if (!path.node().d) {
        path.transition(t).attr("d", this.paths[i].path);
      } else {
        path.transition(t).attrTween("d", this.pathTween(this.paths[i].path, 4))
      }
    }

    // target
    let targetId = `#${this.name}-target`;
    svg.select(targetId).
      transition(t).
      attr('cx', this.xScale(this.target.x)).
      attr('cy', this.yScale(this.target.y));

    // drop paths
    for (let i = 0, ilen = this.dropPaths.length; i < ilen; i++) {
      svg.select(`${targetId}-drop-${i}`).
        transition(t).
        attr("d", this.dropPaths[i]);
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

    if (this.handler && this.x.name) {
      this.lastDragEvent = event;
      this.handler.updateModel(this.handler.getSelectedIndex(), this.x.name, this.target.x).
        subscribe(() => {
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
