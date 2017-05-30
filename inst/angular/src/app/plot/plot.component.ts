import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as d3 from 'd3';

import { TTestSet } from '../t-test';
import { PlotOptions } from '../plot-options';
import { Range } from '../range';

interface DrawOptions {
  xDataKey: string;
  xRangeKey?: string;
  xTitleKey?: string;
  xChangeKey?: string;
  yDataKey?: string;
  yRangeKey?: string;
  yTitleKey?: string;
  multiLine?: string;
}

let plotTitles = {
  "n": "Sample Size",
  "power": "Power",
  "powerByDelta": "Power",
  "delta": "Detectable Alternative"
};

@Component({
  selector: 'app-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.css']
})
export class PlotComponent implements OnInit {
  @Input() name: string;
  @Input() modelSet: TTestSet;
  @Input() plotOptions: PlotOptions;

  @ViewChild('plot') plotElement: ElementRef;

  margin = 50;
  margin2: number;
  clipPathId: string;
  svg: any;
  targetDragging = false;

  constructor() {
    this.margin2 = this.margin * 2;
  }

  ngOnInit() {
    this.clipPathId = `${this.name}-plot-area`;
    this.svg = d3.select(this.plotElement.nativeElement);
    this.svg.attr("class", this.name)
  }

  clear(): void {
    // clear existing graph
    this.plotElement.nativeElement.innerHTML = "";
  }

  draw(options: DrawOptions): void {
    if (!this.modelSet) {
      return;
    }

    this.clear();

    let width  = this.getDimension('width')  - this.margin2;
    let height = this.getDimension('height') - this.margin2;

    // x
    let xDataKey = options.xDataKey || options.xDataKey;
    let xData = this.modelSet.data[xDataKey];
    let xRangeKey = options.xRangeKey || options.xDataKey;
    let xRange = this.modelSet.ranges[xRangeKey];
    let xTitleKey = options.xTitleKey || options.xDataKey;
    let xTitle = plotTitles[xTitleKey];
    let xChangeKey = options.xChangeKey || options.xDataKey;

    // y
    let yDataKey = options.yDataKey || options.yDataKey;
    let yData = this.modelSet.data[yDataKey];
    let yRangeKey = options.yRangeKey || options.yDataKey;
    let yRange = this.modelSet.ranges[yRangeKey];
    let yTitleKey = options.yTitleKey || options.yDataKey;
    let yTitle = plotTitles[yTitleKey];

    this.enablePlotOptions();
    this.appendClipPaths(width, height);

    // compute scales
    let xScale = d3.scaleLinear().
      domain(xRange.toArray()).
      range([0, width]);

    let yScale = d3.scaleLinear().
      domain(yRange.toArray().reverse()).
      range([0, height]);

    this.appendLabels(width, height, xTitle, yTitle);
    this.appendTitle(width, `${yTitle} vs. ${xTitle}`);

    // append main line
    let multiLine = options.multiLine || "x";
    let mainPoints;
    if (multiLine == "x") {
      xData.values.every((xValues, xIndex) => {
        let points = xValues.map((xValue, i) => {
          return { x: xValue, y: yData.values[i] };
        });
        if (!mainPoints) {
          mainPoints = points;
        }
        this.appendLine(points, xScale, yScale, xIndex == 0 ? "line" : "alt-line");

        if (!this.modelSet.model.showAlternates) {
          // stop after first line
          return false;
        }
        return true;
      });
    } else if (multiLine == "y") {
      yData.values.every((yValues, yIndex) => {
        let points = xData.values.map((xValue, i) => {
          return { x: xValue, y: yValues[i] };
        });
        if (!mainPoints) {
          mainPoints = points;
        }
        this.appendLine(points, xScale, yScale, yIndex == 0 ? "line" : "alt-line");

        if (!this.modelSet.model.showAlternates) {
          // stop after first line
          return false;
        }
        return true;
      });
    }

    // sort main points for later use
    mainPoints.sort((a, b) => {
      if (a.x < b.x) return -1;
      if (b.x < a.x) return 1;
      return 0;
    });
    let targetPoint = { x: xData.target, y: yData.target };

    // append drop lines
    let dropLines = this.appendDropLines(targetPoint, xScale, yScale);

    // append focus for hovering
    let focus = this.svg.append("g").
      style("display", "none").
      attr("class", "focus");
    focus.append("circle").
      style("fill", "none").
      style("stroke", "blue").
      attr("r", 4);
    focus.append("rect").
      attr("x", -50).
      attr("y", "1em").
      attr("width", 100).
      attr("height", "2.5em");
    let focusText = focus.append("text").
      attr("x", -40).
      attr("y", "1em");
    let focusTextX = focusText.append("tspan").
      attr("x", -40).
      attr("dy", "1em");
    let focusTextY = focusText.append("tspan").
      attr("x", -40).
      attr("dy", "1em");

    // append the rectangle to capture mouse
    let mouseRect = this.svg.append("rect").
      attr("transform", `translate(${this.margin},${this.margin})`).
      attr("width", width).
      attr("height", height).
      style("fill", "none").
      style("pointer-events", "all").
      on("mouseout", () => { focus.style("display", "none"); });

    // add event listener for mousemove
    let xTargetPos = xScale(xData.target);
    let xTargetRange = [xTargetPos - 5, xTargetPos + 5];
    let yTargetPos = yScale(yData.target);
    let yTargetRange = [yTargetPos - 5, yTargetPos + 5];
    let xBisector = d3.bisector(point => point.x).left;
    mouseRect.on("mousemove", () => {
      let coords = d3.mouse(mouseRect.node());
      if (coords[0] > xTargetRange[0] && coords[0] < xTargetRange[1] &&
          coords[1] > yTargetRange[0] && coords[1] < yTargetRange[1]) {
        focus.style("display", "none");
        return;
      }

      focus.style("display", null);
      let x = xScale.invert(coords[0]);
      let y = yScale.invert(coords[1]);
      let index = xBisector(mainPoints, x);
      let point = mainPoints[index];
      if (!point) return;

      let xOffset = this.margin + xScale(point.x);
      let yOffset = this.margin + yScale(point.y);
      focus.attr("transform", `translate(${xOffset},${yOffset})`);
      focusTextX.text(`x: ${point.x}`);
      focusTextY.text(`y: ${point.y}`);
    });

    // append target point and target info
    let targetInfo = this.svg.append("g").
      style("display", "none").
      attr("class", "target-info").
      attr("transform", `translate(${this.margin + xScale(targetPoint.x)},${this.margin + yScale(targetPoint.y)})`);

    targetInfo.append("rect").
      attr("x", 0).
      attr("y", "-3.5em").
      attr("width", 100).
      attr("height", "2.5em");

    let targetText = targetInfo.append("text").
      attr("x", 10).
      attr("y", "-3.5em");
    let targetTextX = targetText.append("tspan").
      attr("x", 10).
      attr("dy", "1em").
      text(`x: ${targetPoint.x}`);
    let targetTextY = targetText.append("tspan").
      attr("x", 10).
      attr("dy", "1em").
      text(`y: ${targetPoint.y}`);

    let targetCircle = this.svg.append("circle").
      attr("r", 5).
      attr("cx", xScale(targetPoint.x)).
      attr("cy", yScale(targetPoint.y)).
      attr("clip-path", `url(#${this.clipPathId})`).
      attr("transform", `translate(${this.margin},${this.margin})`).
      attr("class", "target").
      on("mouseover", () => {
        if (!this.targetDragging) {
          targetInfo.style("display", null);
        }
      }).
      on("mouseout", () => {
        if (!this.targetDragging) {
          targetInfo.style("display", "none");
        }
      });

    // make target point draggable
    let drag = d3.drag().
      on("start", () => { this.targetDragging = true; }).
      on("drag", () => {
        let x = xScale.invert(d3.event.x - this.margin);
        let y = yScale.invert(d3.event.y - this.margin);
        let index = xBisector(mainPoints, x);
        let point = mainPoints[index];
        if (!point) return;

        x = xScale(point.x);
        y = yScale(point.y);
        targetCircle.
          attr("cx", x).
          attr("cy", y);
        dropLines.remove();
        dropLines = this.appendDropLines(point, xScale, yScale);

        targetInfo.
          attr("transform", `translate(${this.margin + x},${this.margin + y})`);
        targetTextX.text(`x: ${point.x}`);
        targetTextY.text(`y: ${point.y}`);

        targetPoint.x = point.x;
        targetPoint.y = point.y;
      }).
      on("end", () => {
        this.targetDragging = false;

        let output = this.modelSet.model.output;
        this.modelSet.model.update({
          [output]: targetPoint.y,
          [xChangeKey]: targetPoint.x
        });
      });

    targetCircle.call(drag);

    this.appendAxes(height, xScale, yScale);
  }

  protected getDimension(key: string): number {
    let dim = this.plotElement.nativeElement[key];
    let result = 0;
    if ('value' in dim) {
      result = dim.value;
    } else if ('baseVal' in dim) {
      result = dim.baseVal.value;
    } else {
      throw new Error(`can't get ${key}`);
    }
    return result;
  }

  protected enablePlotOptions(): void {
    if (this.plotOptions.fontFamily != "") {
      this.svg.style("font-family", this.plotOptions.fontFamily);
    }
    this.svg.style("font-size", `${this.plotOptions.fontSize * 100}%`);
  }

  protected appendClipPaths(width: number, height: number): void {
    let defs = this.svg.append('defs');
    defs.append("clipPath").
      attr("id", this.clipPathId).
      append("rect").
      attr("x", 0).
      attr("y", 0).
      attr("width", width).
      attr("height", height);
  }

  protected appendXAxis(height: number, xScale: any): void {
    let xAxis = d3.axisBottom(xScale).ticks(6);
    this.svg.append("g").
      attr("transform", `translate(${this.margin},${height + this.margin})`).
      call(xAxis).
      attr("font-size", `${10 * this.plotOptions.axisFontSize}`).
      attr("stroke-width", this.plotOptions.axisLineWidth);
  }

  protected appendYAxis(yScale: any): void {
    let yAxis = d3.axisLeft(yScale).ticks(6);
    this.svg.append("g").
      attr("transform", `translate(${this.margin},${this.margin})`).
      call(yAxis).
      attr("font-size", `${10 * this.plotOptions.axisFontSize}`).
      attr("stroke-width", this.plotOptions.axisLineWidth);
  }

  protected appendAxes(height: number, xScale: any, yScale: any): void {
    this.appendXAxis(height, xScale);
    this.appendYAxis(yScale);
  }

  protected appendXLabel(width: number, height: number, xTitle: string): void {
    let xLabel = this.svg.append("text").
      attr("x", 0).
      attr("y", 0).
      attr("dy", "2.5em").
      attr("class", "axis-label").
      style("text-anchor", "middle").
      text(xTitle);
    let xLabelXOffset = width / 2 + this.margin;
    let xLabelYOffset = height + this.margin;
    xLabel.attr("transform", `translate(${xLabelXOffset},${xLabelYOffset})`);
  }

  protected appendYLabel(height: number, yTitle: string): void {
    let yLabel = this.svg.append("text").
      attr("x", 0).
      attr("y", 0).
      attr("dy", "1em").
      attr("class", "axis-label").
      style("text-anchor", "middle").
      text(yTitle);
    let yLabelYOffset = height / 2 + this.margin;
    yLabel.
      attr("transform", `translate(0,${yLabelYOffset}) rotate(-90)`);
  }

  protected appendLabels(width: number, height: number, xTitle: string, yTitle: string): void {
    this.appendXLabel(width, height, xTitle);
    this.appendYLabel(height, yTitle);
  }

  protected appendTitle(width: number, title: string): void {
    let elt = this.svg.append("text").
      attr("x", 0).
      attr("y", 0).
      attr("dy", "2em").
      attr("class", "title").
      style("text-anchor", "middle").
      text(title);
    let xOffset = width / 2 + this.margin;
    elt.attr("transform", `translate(${xOffset},0)`);
  }

  protected appendLine(points: any[], xScale: any, yScale: any, cssClass: string, strokeMultiplier = 1, parent?: any): any {
    if (!parent) {
      parent = this.svg;
    }

    let line = d3.line().
      x((d, i) => xScale(d.x)).
      y((d, i) => yScale(d.y));
    let group = parent.append("g").
      attr("transform", `translate(${this.margin},${this.margin})`);
    group.append("path").
      attr("class", cssClass).
      attr("clip-path", `url(#${this.clipPathId})`).
      style("stroke-width", this.plotOptions.lineWidth * strokeMultiplier).
      attr("d", line(points));

    return group;
  }

  protected appendDropLines(targetPoint: any, xScale: any, yScale: any, strokeMultiplier = 0.5): any {
    let points1 = [
      { x: xScale.domain()[0], y: targetPoint.y },
      targetPoint
    ];
    let points2 = [
      { x: targetPoint.x, y: yScale.domain()[1] },
      targetPoint
    ];
    let group = this.svg.append("g");
    this.appendLine(points1, xScale, yScale, "drop-line", strokeMultiplier, group);
    this.appendLine(points2, xScale, yScale, "drop-line", strokeMultiplier, group);
    return group;
  }

  protected appendCircle(xValue: number, yValue: number, xScale: any, yScale: any, cssClass = "target", tooltip?: string): any {
    let circle = this.svg.append("circle").
      attr("r", 5).
      attr("cx", xScale(xValue)).
      attr("cy", yScale(yValue)).
      attr("clip-path", `url(#${this.clipPathId})`).
      attr("class", cssClass).
      attr("transform", `translate(${this.margin},${this.margin})`);

    if (!tooltip) {
      tooltip = `Target: (${xValue}, ${yValue})`;
    }
    circle.append("title").text(tooltip);

    return circle;
  }
}

@Component({
  selector: 'app-bottom-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.css']
})
export class BottomPlotComponent extends PlotComponent {
  draw(): void {
    if (!this.modelSet) {
      return;
    }

    this.clear();

    let width  = this.getDimension('width')  - this.margin2;
    let height = this.getDimension('height') - this.margin2;

    let pSpaceData = this.modelSet.data.pSpace;
    let pSpaceRange = this.modelSet.ranges.pSpace;
    let precisionData = this.modelSet.data.precision;
    let sampDistData = this.modelSet.data.sampDist;

    this.enablePlotOptions();
    this.appendClipPaths(width, height);

    // compute scales
    let xScale = d3.scaleLinear().
      domain(pSpaceRange.toArray()).
      range([0, width]);

    let yScale = d3.scaleLinear().
      domain([0, 0.8]).
      range([0, height]);

    this.appendXAxis(height, xScale);
    this.appendXLabel(width, height, "Parameter Space");
    this.appendTitle(width, "Precision vs. Effect Size");

    // sample distribution
    let points = pSpaceData.values.map((xValue, i) => {
      return { x: xValue, y: sampDistData.values[i] };
    });

    let yScaleSD = d3.scaleLinear().
      domain([sampDistData.limits[1], sampDistData.limits[0]]).
      range([0, yScale(0.5)]);

    let area = d3.area().
      x((d, i) => xScale(d.x)).
      y0(yScaleSD(0)).
      y1((d, i) => yScaleSD(d.y));

    let group = this.svg.append("g").
      attr("transform", `translate(${this.margin},${this.margin})`);
    group.append("path").
      attr("class", "dist-area").
      attr("clip-path", `url(#${this.clipPathId})`).
      attr("d", area(points));

    // main line
    points = precisionData.values.map((xValue, i) => {
      return { x: xValue, y: 0.5 };
    });
    this.appendLine(points, xScale, yScale, "pspace-line");

    // left line
    let leftLimit = precisionData.values[0];
    points = [
      { x: leftLimit, y: 0.35 },
      { x: leftLimit, y: 0.65 }
    ];
    this.appendLine(points, xScale, yScale, "pspace-line");

    // right line
    let rightLimit = precisionData.values[1];
    points = [
      { x: rightLimit, y: 0.35 },
      { x: rightLimit, y: 0.65 }
    ];
    this.appendLine(points, xScale, yScale, "pspace-line");

    // center point
    this.appendCircle(0, 0.5, xScale, yScale, "pspace-center", "Center");

    // target point
    this.appendCircle(precisionData.target, 0.5, xScale, yScale,
      "pspace-target", `Target: ${precisionData.target}`);
  }
}
