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
  dataKey: string;
}

class Point {
  constructor(public x: number, public y: number) {}

  format(which: string): string {
    let value = this[which];
    if (typeof(value) != 'number') return '';

    let xWidth = 0, yWidth = 0;
    if (this.x != 0) {
      xWidth = Math.ceil(Math.log10(Math.abs(this.x)));
      if (this.x < 0) xWidth++;
    }
    if (this.y != 0) {
      yWidth = Math.ceil(Math.log10(Math.abs(this.y)));
      if (this.y < 0) yWidth++;
    }
    let width = Math.max(xWidth, yWidth) + 3;
    let result = value.toFixed(2);
    while (result.length < width) {
      result = ' ' + result;
    }
    return result;
  }
}

class Target {
  dropPaths: string[] = [];
  xRange: number[];
  yRange: number[];

  constructor(public point: Point, xScale: any, yScale: any) {
    this.update(xScale, yScale);
  }

  update(xScale: any, yScale: any) {
    this.dropPaths = [];

    // calculate drop paths
    let path = d3.line().
      x((d, i) => xScale(d.x)).
      y((d, i) => yScale(d.y));

    let xData = [
      { x: this.point.x, y: yScale.domain()[1] },
      { x: this.point.x, y: this.point.y }
    ];
    this.dropPaths.push(path(xData));

    let yData = [
      { x: xScale.domain()[0], y: this.point.y },
      { x: this.point.x, y: this.point.y }
    ];
    this.dropPaths.push(path(yData));

    // calculate hover ranges
    let x = xScale(this.point.x);
    this.xRange = [x - 10, x + 10];

    let y = yScale(this.point.y);
    this.yRange = [y - 10, y + 10];
  }

  isClose(x: number, y: number): boolean {
    return x > this.xRange[0] && x < this.xRange[1] &&
      y > this.yRange[0] && y < this.yRange[1];
  }
}

enum HoverInfo {
  Disabled,
  NonTarget,
  Target
}

enum Draw {
  No,
  Yes,
  Hover
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
  @Input('hide-drop-lines') hideDropLines = false;
  @Input('hide-target') hideTarget = false;
  @Input('fixed-width') fixedWidth: number;
  @Input('fixed-height') fixedHeight: number;
  @Input('disable-drag') disableDrag = false;

  @ViewChild('plot') plotElement: ElementRef;
  @ViewChild('unit') unitElement: ElementRef;

  constructor(public plotOptions: PlotOptionsService, public palette: PaletteService) { super(); }

  width: number;
  height: number;
  innerWidth: number;
  innerHeight: number;
  margin: number = 50;
  x: Param;
  y: Param;
  xScale: any;
  yScale: any;
  plotData: any[];
  paths: string[];
  mainData: any[];
  targets: Target[] = [];
  xBisector: any;
  hoverX: number;
  hoverY: number;
  hoverPoint: Point;
  hoverInfo = HoverInfo.Disabled;
  lastDragEvent: any;
  legendOffsetX = 0;
  legendOffsetY = 0;

  targetDragging = false;
  needDraw = Draw.No;

  private subscription: Subscription;

  ngOnInit(): void {
    let callback = this.setup.bind(this);
    this.plotOptions.onChange.subscribe(callback);
    callback();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.modelSet) {
      // model set changed
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
      if (this.modelSet) {
        let callback = this.setup.bind(this);
        this.subscription = this.modelSet.onCompute.subscribe(callback);
        this.subscription.add(this.modelSet.onChange.subscribe(callback));
        callback();
      }
    } else if (changes.fixedWidth || changes.fixedHeight) {
      this.setup();
    }
  }

  ngAfterViewChecked(): void {
    this.draw();
  }

  redraw(): void {
    this.setup();
  }

  hover(event: any, target?: Target): void {
    var dim = event.target.getBoundingClientRect();
    var x = event.clientX - dim.left;
    var y = event.clientY - dim.top;

    this.hoverPoint = undefined;
    this.hoverInfo = HoverInfo.Disabled;
    if (target) {
      this.hoverPoint = target.point;
      this.hoverInfo = HoverInfo.Target;

    } else if (!this.hoverDisabled) {
      let index = this.xBisector(this.mainData, this.xScale.invert(x));
      let data = this.mainData[index];
      if (data) {
        this.hoverPoint = new Point(data[this.x.name], data[this.y.name]);
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
    let mainTarget = this.targets[0];
    if (this.hoverY < mainTarget.yRange[0]) {
      return "-3.5em";
    }
    return "1em";
  }

  trackByIndex(index: number, path: string): any {
    return index;
  }

  isHoverInfoActive(): boolean {
    return this.hoverInfo != HoverInfo.Disabled;
  }

  isHoverInfoTarget(): boolean {
    return this.hoverInfo == HoverInfo.Target;
  }

  hideHoverInfo(): void {
    this.hoverInfo = HoverInfo.Disabled;
  }

  getColor(index: number): string {
    return this.palette.getColor(index, this.plotOptions.paletteTheme);
  }

  invertIndex(invertedIndex: number, array: any[]): number {
    return array.length - invertedIndex - 1;
  }

  legendLabel(index: number): string {
    switch (index) {
      case 0:
        return "Primary";
      case 1:
        return "Secondary";
      case 2:
        return "Tertiary";
      case 3:
        return "Quaternary";
      case 4:
        return "Quinary";
      case 5:
        return "Senary";
      case 6:
        return "Septenary";
      case 7:
        return "Octonary";
      case 8:
        return "Nonary";
      case 9:
        return "Denary";
      default:
        return `Line ${index + 1}`;
    }
  }

  private setupDimensions(): void {
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

    // margin
    let unitBox = this.unitElement.nativeElement.getBBox();
    if (unitBox && unitBox.width) {
      this.margin = unitBox.width * 2 + (20 * this.plotOptions.axisFontSize);
    }
  }

  private setupParams(): boolean {
    // Setup parameters. Dimensions should be setup by this point.
    let model = this.modelSet.getModel(0);
    let ranges = this.modelSet.ranges;
    if (model.output == 'n' || model.output == 'nByCI') {
      if (this.name == 'top-left' || this.name == 'top-left-export') {
        // Power vs. Sample Size
        this.x = {
          name: 'power', range: ranges.power, target: model.power,
          title: 'Power', sym: '1-β', dataKey: 'primary'
        };

      } else if (this.name == 'top-right' || this.name == 'top-right-export') {
        // Detectable Alternative vs. Sample Size
        this.x = {
          name: 'delta', range: ranges.delta, target: model.delta,
          title: 'Detectable Alternative', sym: 'δ', dataKey: 'primary'
        };

      } else {
        return false;
      }

      this.y = {
        name: 'n', range: ranges.n, target: model.n,
        title: 'Sample Size', sym: 'n', dataKey: 'primary'
      };
    } else if (model.output == 'power') {
      if (this.name == 'top-left' || this.name == 'top-left-export') {
        // Sample Size vs. Power
        this.x = {
          name: 'n', range: ranges.n, target: model.n,
          title: 'Sample Size', sym: 'n', dataKey: 'primary'
        };
        this.y = {
          name: 'power', range: ranges.power, target: model.power,
          title: 'Power', sym: '1-β', dataKey: 'primary'
        };

      } else if (this.name == 'top-right' || this.name == 'top-right-export') {
        // Detectable Alternative vs. Power
        this.x = {
          name: 'delta', range: ranges.delta, target: model.delta,
          title: 'Detectable Alternative', sym: 'δ', dataKey: 'secondary'
        };
        this.y = {
          name: 'power', range: ranges.power, target: model.power,
          title: 'Power', sym: '1-β', dataKey: 'secondary'
        };

      } else {
        return false;
      }
    } else if (model.output == 'delta') {
      if (this.name == 'top-left' || this.name == 'top-left-export') {
        // Sample Size vs. Detectable Alternative
        this.x = {
          name: 'n', range: ranges.n, target: model.n,
          title: 'Sample Size', sym: 'n', dataKey: 'primary'
        };

      } else if (this.name == 'top-right' || this.name == 'top-right-export') {
        // Power vs. Detectable Alternative
        this.x = {
          name: 'power', range: ranges.power, target: model.power,
          title: 'Power', sym: '1-β', dataKey: 'primary'
        };

      } else {
        return false;
      }

      this.y = {
        name: 'delta', range: ranges.delta, target: model.delta,
        title: 'Detectable Alternative', sym: 'δ', dataKey: 'primary'
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
    let dataKey = this.x.dataKey; // same as y.dataKey
    if (this.modelSet.extraName == this.x.name) {
      // Only draw first line, since the others are identical.
      this.plotData = [this.modelSet.models[0].data[dataKey].data];
    } else {
      // Draw lines
      this.plotData = this.modelSet.models.map(m => m.data[dataKey].data);
    }

    // When switching outputs, sometimes plot data is missing. This happens
    // when the dataKey is different for a parameter than it was before.
    this.plotData = this.plotData.filter(d => d !== null && d !== undefined);
    if (this.plotData.length == 0) {
      return false;
    }

    // Prepare main data for bisection during target point dragging.
    this.mainData = this.plotData[0].slice();
    this.mainData.sort((a, b) => a[this.x.name] - b[this.x.name]);
    this.xBisector = d3.bisector(point => point[this.x.name]).left;

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

  private setupTargets(): void {
    this.targets = this.modelSet.mapModels(model => {
      let point = new Point(model[this.x.name], model[this.y.name]);
      let target = new Target(point, this.xScale, this.yScale);
      return target;
    });
  }

  private setupPaths(): void {
    this.paths = this.plotData.map(d => {
      let xName = this.x.name, xRange = this.x.range;
      let yName = this.y.name, yRange = this.y.range;
      return this.getPath(d, xName, yName, xRange, yRange);
    })
  }

  private setup(): void {
    if (!this.modelSet) {
      return;
    }

    this.setupDimensions();
    if (!this.setupParams()) {
      // setting up parameters failed
      return;
    }
    if (!this.setupPlotData()) {
      // setting up plot data failed
      return;
    }
    this.setupScales();
    this.setupTargets();
    this.setupPaths();

    if (this.lastDragEvent) {
      this.hover(this.lastDragEvent);
      this.lastDragEvent = undefined;
    }

    this.needDraw = Draw.Yes;
  }

  private draw(): void {
    if (this.needDraw == Draw.No) {
      return;
    }

    let svg = d3.select(this.plotElement.nativeElement);

    if (this.hoverInfo != HoverInfo.Disabled) {
      // draw hover info box
      let box = svg.select(`#${this.name}-hover-info`);
      let coords = svg.select(`#${this.name}-hover-coords`);
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

    if (this.needDraw == Draw.Hover) {
      // only need to draw hover box
      this.needDraw = Draw.No;
      return;
    }

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

    // targets
    for (let i = 0, ilen = this.targets.length; i < ilen; i++) {
      let targetId = `#${this.name}-target-${i}`;
      let target = this.targets[i];
      t.select(targetId).
        attr('cx', this.xScale(target.point.x)).
        attr('cy', this.yScale(target.point.y));

      // drop paths
      for (let j = 0, jlen = target.dropPaths.length; j < jlen; j++) {
        t.select(`${targetId}-drop-${j}`).attr("d", target.dropPaths[j]);
      }

      // drag
      if (!this.disableDrag && i == 0) {
        let target = svg.select(targetId);
        let targetDrag = d3.drag().
          on("start", this.dragTargetStart.bind(this)).
          on("drag", this.dragTarget.bind(this)).
          on("end", this.dragTargetEnd.bind(this));
        target.call(targetDrag);
      }
    }

    // legend box
    if (this.targets.length > 1) {
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
    let targetId = `#${this.name}-target-0`;
    let target = this.targets[0];
    target.point.x = data[this.x.name];
    target.point.y = data[this.y.name];
    target.update(this.xScale, this.yScale);

    svg.select(targetId).
      attr("cx", this.xScale(target.point.x)).
      attr("cy", this.yScale(target.point.y));

    for (let i = 0, ilen = target.dropPaths.length; i < ilen; i++) {
      svg.select(`${targetId}-drop-${i}`).attr("d", target.dropPaths[i]);
    }
  }

  private dragTargetEnd(event: any): void {
    this.targetDragging = false;

    if (this.modelSet && this.x.name) {
      let model = this.modelSet.getModel(0);
      model.update({
        [this.x.name]: this.targets[0].point.x
      });
      this.lastDragEvent = event;
    }
  }

  private dragLegend(): void {
    this.legendOffsetX += d3.event.dx;
    this.legendOffsetY += d3.event.dy;
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
