import { ElementRef } from '@angular/core';
import * as d3 from 'd3';

import { PlotOptions } from './plot-options';
import { Range } from './range';

export class Plotter {
  margin = 50;
  margin2 = 100;
  clipPathId: string;
  svg: any;

  constructor(
    protected elementRef: ElementRef,
    protected which: string,
    protected plotOptions: PlotOptions
  ) {
    this.clipPathId = `${which}-plot-area`;
    this.svg = d3.select(elementRef.nativeElement);
  }

  draw(xData: any, xRange: Range, xTitle: string, yData: any, yRange: Range, yTitle: string, multiLine = "y"): void {
    // clear existing graph
    let element = this.elementRef.nativeElement;
    element.innerHTML = "";

    // set dimensions
    let width = 0;
    if ('value' in element.width) {
      width = element.width.value;
    } else if ('baseVal' in element.width) {
      width = element.width.baseVal.value;
    } else {
      throw new Error("can't get width");
    }
    width -= this.margin2;

    let height = 0;
    if ('value' in element.height) {
      height = element.height.value;
    } else if ('baseVal' in element.height) {
      height = element.height.baseVal.value;
    } else {
      throw new Error("can't get height");
    }
    height -= this.margin2;

    if (this.plotOptions.fontFamily != "") {
      this.svg.style("font-family", this.plotOptions.fontFamily);
    }
    this.svg.style("font-size", `${this.plotOptions.fontSize * 100}%`);

    // append clip paths
    let defs = this.svg.append('defs');
    defs.append("clipPath").
      attr("id", this.clipPathId).
      append("rect").
      attr("x", 0).
      attr("y", 0).
      attr("width", width).
      attr("height", height);

    // compute scales
    let x = d3.scaleLinear().
      domain(xRange.toArray()).
      range([0, width]);

    let y = d3.scaleLinear().
      domain(yRange.toArray().reverse()).
      range([0, height]);

    // append axes
    let xAxis = d3.axisBottom(x).ticks(6);
    this.svg.append("g").
      attr("transform", `translate(${this.margin},${height + this.margin})`).
      call(xAxis);

    let yAxis = d3.axisLeft(y).ticks(6);
    this.svg.append("g").
      attr("transform", `translate(${this.margin},${this.margin})`).
      call(yAxis);

    // append labels
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

    let xLabel = this.svg.append("text").
      attr("x", 0).
      attr("y", 0).
      attr("dy", "2.5em").
      attr("class", "axis-label").
      style("text-anchor", "middle").
      text(xTitle);
    let xLabelXOffset = width / 2 + this.margin;
    let xLabelYOffset = height + this.margin;
    xLabel.
      attr("transform", `translate(${xLabelXOffset},${xLabelYOffset})`);

    // append title
    let title = this.svg.append("text").
      attr("x", 0).
      attr("y", 0).
      attr("dy", "2em").
      attr("class", "title").
      style("text-anchor", "middle").
      text(`${yTitle} vs. ${xTitle}`);
    let titleBBox = title.node().getBBox();
    let titleXOffset = width / 2 + this.margin;
    title.
      attr("transform", `translate(${titleXOffset},0)`);

    // append main line
    if (multiLine == "x") {
      yData.values.forEach((yValues, yIndex) => {
        let points = xData.values.map((xValue, i) => {
          return { x: xValue, y: yValues[i] };
        });
        this.drawLine(points, x, y, yIndex == 0 ? "line" : "alt-line");
      });
    } else if (multiLine == "y") {
      xData.values.forEach((xValues, xIndex) => {
        let points = xValues.map((xValue, i) => {
          return { x: xValue, y: yData.values[i] };
        });
        this.drawLine(points, x, y, xIndex == 0 ? "line" : "alt-line");
      });
    }

    // append drop lines
    let points = [
      { x: xRange.min, y: yData.target },
      { x: xData.target, y: yData.target }
    ];
    let line = d3.line().
      x((d, i) => x(d.x)).
      y((d, i) => y(d.y));
    this.svg.append("g").
      attr("transform", `translate(${this.margin},${this.margin})`).
      append("path").
      attr("clip-path", `url(#${this.clipPathId})`).
      attr("class", "drop-line").
      style("stroke-width", this.plotOptions.lineWidth / 2).
      attr("d", line(points));

    points = [
      { x: xData.target, y: yRange.min },
      { x: xData.target, y: yData.target }
    ];
    line = d3.line().
      x((d, i) => x(d.x)).
      y((d, i) => y(d.y));
    this.svg.append("g").
      attr("transform", `translate(${this.margin},${this.margin})`).
      append("path").
      attr("class", "drop-line").
      attr("clip-path", `url(#${this.clipPathId})`).
      style("stroke-width", this.plotOptions.lineWidth / 2).
      attr("d", line(points));

    // append target point
    let circle = this.svg.append("circle").
      attr("r", 5).
      attr("cx", x(xData.target)).
      attr("cy", y(yData.target)).
      attr("clip-path", `url(#${this.clipPathId})`).
      attr("class", "target").
      attr("transform", `translate(${this.margin},${this.margin})`);
    circle.append("title").text(`Target: (${xData.target}, ${yData.target})`);
  }

  private drawLine(points: any[], xScale: any, yScale: any, cssClass: string): void {
    let line = d3.line().
      x((d, i) => xScale(d.x)).
      y((d, i) => yScale(d.y));
    let group = this.svg.append("g").
      attr("transform", `translate(${this.margin},${this.margin})`);
    group.append("path").
      attr("class", cssClass).
      attr("clip-path", `url(#${this.clipPathId})`).
      style("stroke-width", this.plotOptions.lineWidth).
      attr("d", line(points));
  }
}

export class BottomPlotter extends Plotter {
  draw(xData: any, xRange: Range): void {
    // clear existing graph
    let element = this.elementRef.nativeElement;
    element.innerHTML = "";

    // set dimensions
    let width = 0;
    if ('value' in element.width) {
      width = element.width.value;
    } else if ('baseVal' in element.width) {
      width = element.width.baseVal.value;
    } else {
      throw new Error("can't get width");
    }
    width -= this.margin2;

    let height = 0;
    if ('value' in element.height) {
      height = element.height.value;
    } else if ('baseVal' in element.height) {
      height = element.height.baseVal.value;
    } else {
      throw new Error("can't get height");
    }
    height -= this.margin2;

    if (this.plotOptions.fontFamily != "") {
      this.svg.style("font-family", this.plotOptions.fontFamily);
    }
    this.svg.style("font-size", `${this.plotOptions.fontSize * 100}%`);

    // append clip paths
    let defs = this.svg.append('defs');
    defs.append("clipPath").
      attr("id", "bottom-plot-area").
      append("rect").
      attr("x", 0).
      attr("y", 0).
      attr("width", width).
      attr("height", height);

    // compute scales
    let x = d3.scaleLinear().
      domain(xRange.toArray()).
      range([0, width]);

    let y = d3.scaleLinear().range([0, height]);

    // append axes
    let xAxis = d3.axisBottom(x);
    this.svg.append("g").
      attr("transform", `translate(${this.margin},${height + this.margin})`).
      call(xAxis);

    // append axes labels
    let xLabel = this.svg.append("text").
      attr("x", 0).
      attr("y", 0).
      attr("dy", "2.5em").
      attr("class", "axis-label").
      style("text-anchor", "middle").
      text("Parameter Space");
    let xLabelXOffset = width / 2 + this.margin;
    let xLabelYOffset = height + this.margin;
    xLabel.
      attr("transform", `translate(${xLabelXOffset},${xLabelYOffset})`);

    // append title
    let title = this.svg.append("text").
      attr("x", 0).
      attr("y", 0).
      attr("dy", "2em").
      attr("class", "title").
      style("text-anchor", "middle").
      text("Precision vs. Effect size");
    let titleBBox = title.node().getBBox();
    let titleXOffset = width / 2 + this.margin;
    title.
      attr("transform", `translate(${titleXOffset},0)`);

    // append ab line
    let points = [
      { x: xRange.min, y: 0.5 },
      { x: xRange.max, y: 0.5 }
    ];
    let line = d3.line().
      x((d, i) => x(d.x)).
      y((d, i) => y(d.y));

    this.svg.append("g").
      attr("transform", `translate(${this.margin},${this.margin})`).
      append("path").
      attr("clip-path", "url(#bottom-plot-area)").
      attr("class", "ab-line").
      style("stroke-width", this.plotOptions.lineWidth / 4).
      attr("d", line(points));

    // append main line
    points = [
      { x: xData.values[0], y: 0.5 },
      { x: xData.values[1], y: 0.5 }
    ];
    line = d3.line().
      x((d, i) => x(d.x)).
      y((d, i) => y(d.y));

    this.svg.append("g").
      attr("transform", `translate(${this.margin},${this.margin})`).
      append("path").
      attr("clip-path", "url(#bottom-plot-area)").
      attr("class", "pspace-line").
      style("stroke-width", this.plotOptions.lineWidth).
      attr("d", line(points));

    // append left bracket line
    points = [
      { x: xData.values[0], y: 0.3 },
      { x: xData.values[0], y: 0.7 }
    ];
    line = d3.line().
      x((d, i) => x(d.x)).
      y((d, i) => y(d.y));

    this.svg.append("g").
      attr("transform", `translate(${this.margin},${this.margin})`).
      append("path").
      attr("clip-path", "url(#bottom-plot-area)").
      attr("class", "pspace-line").
      style("stroke-width", this.plotOptions.lineWidth).
      attr("d", line(points));

    // append right bracket line
    points = [
      { x: xData.values[1], y: 0.3 },
      { x: xData.values[1], y: 0.7 }
    ];
    line = d3.line().
      x((d, i) => x(d.x)).
      y((d, i) => y(d.y));

    this.svg.append("g").
      attr("transform", `translate(${this.margin},${this.margin})`).
      append("path").
      attr("clip-path", "url(#bottom-plot-area)").
      attr("class", "pspace-line").
      style("stroke-width", this.plotOptions.lineWidth).
      attr("d", line(points));

    // append center point
    let circle = this.svg.append("circle").
      attr("r", 3).
      attr("cx", x(0)).
      attr("cy", y(0.5)).
      attr("clip-path", "url(#bottom-plot-area)").
      attr("class", "pspace-center").
      attr("transform", `translate(${this.margin},${this.margin})`);

    // append target point
    circle = this.svg.append("circle").
      attr("r", 5).
      attr("cx", x(xData.target)).
      attr("cy", y(0.5)).
      attr("clip-path", "url(#bottom-plot-area)").
      attr("class", "pspace-target").
      attr("transform", `translate(${this.margin},${this.margin})`);
    circle.append("title").text(`Target: ${xData.target}`);
  }
}
