import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as d3 from 'd3';

import { TTestSet } from '../t-test';
import { PlotOptions } from '../plot-options';
import { Range } from '../range';

interface DrawOptions {
  xDataKey: string;
  xRangeKey?: string;
  xTitleKey?: string;
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

    this.appendAxes(height, xScale, yScale);
    this.appendLabels(width, height, xTitle, yTitle);
    this.appendTitle(width, `${yTitle} vs. ${xTitle}`);

    // append main line
    let multiLine = options.multiLine || "x";
    if (multiLine == "x") {
      xData.values.every((xValues, xIndex) => {
        let points = xValues.map((xValue, i) => {
          return { x: xValue, y: yData.values[i] };
        });
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
        this.appendLine(points, xScale, yScale, yIndex == 0 ? "line" : "alt-line");

        if (!this.modelSet.model.showAlternates) {
          // stop after first line
          return false;
        }
        return true;
      });
    }

    // append drop lines
    let points = [
      { x: xRange.min, y: yData.target },
      { x: xData.target, y: yData.target }
    ];
    this.appendLine(points, xScale, yScale, "drop-line", 0.5);

    points = [
      { x: xData.target, y: yRange.min },
      { x: xData.target, y: yData.target }
    ];
    this.appendLine(points, xScale, yScale, "drop-line", 0.5);

    this.appendCircle(xData.target, yData.target, xScale, yScale);
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
      call(xAxis);
  }

  protected appendYAxis(yScale: any): void {
    let yAxis = d3.axisLeft(yScale).ticks(6);
    this.svg.append("g").
      attr("transform", `translate(${this.margin},${this.margin})`).
      call(yAxis);
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

  protected appendLine(points: any[], xScale: any, yScale: any, cssClass: string, strokeMultiplier = 1): void {
    let line = d3.line().
      x((d, i) => xScale(d.x)).
      y((d, i) => yScale(d.y));
    let group = this.svg.append("g").
      attr("transform", `translate(${this.margin},${this.margin})`);
    group.append("path").
      attr("class", cssClass).
      attr("clip-path", `url(#${this.clipPathId})`).
      style("stroke-width", this.plotOptions.lineWidth * strokeMultiplier).
      attr("d", line(points));
  }

  protected appendCircle(xValue: number, yValue: number, xScale: any, yScale: any, cssClass = "target", tooltip?: string): void {
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
  }
}

@Component({
  selector: 'app-bottom-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.css']
})
export class BottomPlotComponent extends PlotComponent {
  draw(options: DrawOptions): void {
    if (!this.modelSet) {
      return;
    }

    this.clear();

    let width  = this.getDimension('width')  - this.margin2;
    let height = this.getDimension('height') - this.margin2;

    let xDataKey = options.xDataKey || options.xDataKey;
    let xData = this.modelSet.data[xDataKey];
    let xRangeKey = options.xRangeKey || options.xDataKey;
    let xRange = this.modelSet.ranges[xRangeKey];
    let xTitle = "Parameter Space";

    this.enablePlotOptions();
    this.appendClipPaths(width, height);

    // compute scales
    let xScale = d3.scaleLinear().
      domain(xRange.toArray()).
      range([0, width]);

    let yScale = d3.scaleLinear().
      domain([0, 0.8]).
      range([0, height]);

    this.appendXAxis(height, xScale);
    this.appendXLabel(width, height, xTitle);
    this.appendTitle(width, "Precision vs. Effect Size");

    // main line
    let points = xData.values.map((xValue, i) => {
      return { x: xValue, y: 0.5 };
    });
    this.appendLine(points, xScale, yScale, "pspace-line");

    // left line
    points = [
      { x: xData.values[0], y: 0.3 },
      { x: xData.values[0], y: 0.7 }
    ];
    this.appendLine(points, xScale, yScale, "pspace-line");

    // right line
    points = [
      { x: xData.values[1], y: 0.3 },
      { x: xData.values[1], y: 0.7 }
    ];
    this.appendLine(points, xScale, yScale, "pspace-line");

    // center point
    this.appendCircle(0, 0.5, xScale, yScale, "pspace-center", "Center");

    // target point
    this.appendCircle(xData.target, 0.5, xScale, yScale, "pspace-target", `Target: ${xData.target}`);
  }
}
