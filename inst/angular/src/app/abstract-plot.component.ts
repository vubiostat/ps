import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import * as d3 from 'd3';

export abstract class AbstractPlotComponent {
  @Input() name: string;
  @ViewChild('plot') plotElement: ElementRef;
  title: string;
  xScale: any;
  yScale: any;

  constructor() {}

  getDimension(key: string): number {
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

  protected translate(x: number, y: number): string {
    if (isNaN(x) || isNaN(y)) {
      return null;
    }
    return `translate(${x}, ${y})`;
  }

  protected getPath(data: any[], xName = "x", yName = "y"): string {
    let line = d3.line().
      x((d, i) => this.xScale(d[xName])).
      y((d, i) => this.yScale(d[yName]));

    return line(data);
  }
}
