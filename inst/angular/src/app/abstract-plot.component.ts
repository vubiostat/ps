import { Component, Input, ViewChild, ElementRef, AfterViewInit, Directive } from '@angular/core';
import * as d3 from 'd3';
import * as stableSort from 'stable';

import { PlotOptionsService } from './plot-options.service';
import { PaletteService } from './palette.service';

export enum Draw {
  No,
  Yes,
  Hover
}

@Directive()
export abstract class AbstractPlotComponent implements AfterViewInit {
  /* User-specified properties */
  @Input() name: string;
  @Input('fixed-width') fixedWidth: number;
  @Input('fixed-height') fixedHeight: number;

  /* Calculated properties */
  title: string;
  xScale: any;
  yScale: any;
  width: number;
  height: number;
  innerWidth: number;
  innerHeight: number;

  @ViewChild('plot', { static: true }) plotElement: ElementRef;

  constructor(
    public plotOptions: PlotOptionsService,
    public palette: PaletteService
  ) { }

  ngAfterViewInit(): void {
    // Give browser elements enough time to have correct dimensions
    setTimeout(() => {
      this.setup();
    }, 1);
  }

  getDimension(key: string): number {
    let dim = this.plotElement.nativeElement.getBoundingClientRect();
    return dim[key];
  }

  getHeight(): number {
    return this.getDimension('height');
  }

  getWidth(): number {
    return this.getDimension('width');
  }

  getFontFamily(): string {
    return this.plotOptions.getFontFamily();
  }

  getFontSize(): number {
    return this.plotOptions.getFontSize();
  }

  getFontSizePx(): string {
    return `${this.getFontSize()}px`;
  }

  getAxisLineWidth(): number {
    return this.plotOptions.getAxisLineWidth();
  }

  getAxisFontSize(): number {
    return this.plotOptions.getAxisFontSize();
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

  getLineWidth(): number {
    return this.plotOptions.getLineWidth();
  }

  isLegendBoxVisible(): boolean {
    return this.plotOptions.showLegendBox;
  }

  trackByIndex(index: number, obj: any): number {
    return index;
  }

  protected translate(x: number, y: number): string {
    if (isNaN(x) || isNaN(y)) {
      return null;
    }
    return `translate(${x}, ${y})`;
  }

  protected getPath(data: any[], xName = "x", yName = "y", curve = true): string {
    let xScaleRange = stableSort(this.xScale.domain(), d3.ascending);
    let yScaleRange = stableSort(this.yScale.domain(), d3.ascending);
    let line = d3.line().
      x((d, i) => this.xScale(d[xName])).
      y((d, i) => this.yScale(d[yName])).
      defined((d, i, data) => {
        let x = d[xName];
        let y = d[yName];
        let xPrev, yPrev, xNext, yNext;
        if (i > 0) {
          // draw point even if it's out of the plot boundary when the previous
          // point is in the plot boundary
          xPrev = data[i - 1][xName];
          yPrev = data[i - 1][yName];
        }
        if ((i + 1) < data.length) {
          // draw point even if it's out of the plot boundary when the next
          // point is in the plot boundary
          xNext = data[i + 1][xName];
          yNext = data[i + 1][yName];
        }

        return typeof(x) === 'number' && typeof(y) == 'number' &&
          (
            (x >= xScaleRange[0] && x <= xScaleRange[1]) ||
            (typeof(xPrev) === 'number' && xPrev >= xScaleRange[0] && xPrev <= xScaleRange[1]) ||
            (typeof(xNext) === 'number' && xNext >= xScaleRange[0] && xNext <= xScaleRange[1])
          ) &&
          (
            (y >= yScaleRange[0] && y <= yScaleRange[1]) ||
            (typeof(yPrev) === 'number' && yPrev >= yScaleRange[0] && yPrev <= yScaleRange[1]) ||
            (typeof(yNext) === 'number' && yNext >= yScaleRange[0] && yNext <= yScaleRange[1])
          );
      });
    if (curve) {
      line = line.curve(d3.curveBasis);
    }

    return line(data);
  }

  protected setup(): boolean {
    return true;
  }
}
