import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import * as d3 from 'd3';
import { Range } from './range';

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

  protected getPath(data: any[], xName = "x", yName = "y", xRange?: Range, yRange?: Range): string {
    let line = d3.line().
      x((d, i) => this.xScale(d[xName])).
      y((d, i) => this.yScale(d[yName])).
      defined((d, i) => {
        let x = d[xName];
        let y = d[yName];
        return typeof(x) === 'number' && typeof(y) == 'number' &&
          (!xRange || (x >= xRange.min && x <= xRange.max)) &&
          (!yRange || (y >= yRange.min && y <= yRange.max));
      });

    return line(data);
  }
}
