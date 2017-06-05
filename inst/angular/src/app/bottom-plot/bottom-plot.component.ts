import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as d3 from 'd3';

import { TTestSet } from '../t-test';
import { PlotOptions } from '../plot-options';
import { Range } from '../range';

@Component({
  selector: 'app-bottom-plot',
  templateUrl: './bottom-plot.component.html',
  styleUrls: ['./bottom-plot.component.css']
})
export class BottomPlotComponent implements OnInit {
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
    if (this.plotOptions.fontFamily == "") {
      this.svg.style("font-family", null);
    } else {
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
