import { Component, Input, OnInit, OnChanges, SimpleChanges, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import * as d3 from 'd3';

import { TTestSet } from '../t-test';
import { PlotOptions } from '../plot-options';
import { Range } from '../range';

@Component({
  selector: 'app-bottom-plot',
  templateUrl: './bottom-plot.component.html',
  styleUrls: ['./bottom-plot.component.css']
})
export class BottomPlotComponent implements OnInit, OnChanges, AfterViewChecked {
  @Input() name: string;
  @Input() modelSet: TTestSet;
  @Input() plotOptions: PlotOptions;

  @ViewChild('plot') plotElement: ElementRef;
  @ViewChild('bottomAxis') bottomAxisElement: ElementRef;

  margin = 50;
  clipPathId: string;
  width: number;
  height: number;
  pSpace: { values: any, range: Range };
  precision: { values: any, target: number };
  sampDist: { values: any };
  xScale: any;
  yScale: any;
  yScaleSD: any;
  sampDistPath: string;
  paths: string[];
  needDraw: boolean;
  private subscription: Subscription;

  ngOnInit() {
    this.clipPathId = `${this.name}-plot-area`;
    this.compute();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.modelSet) {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
      if (this.modelSet) {
        let callback = () => { this.compute(); };
        let ranges = this.modelSet.ranges;
        this.subscription = this.modelSet.onCompute.subscribe(callback);
        this.subscription.add(ranges.onChange.subscribe(callback));
        this.compute();
      }
    }
  }

  ngAfterViewChecked(): void {
    this.draw();
  }

  onResize(): void {
    this.compute();
  }

  private compute(): void {
    if (!this.modelSet) {
      return;
    }

    // dimensions
    this.width  = this.getDimension('width')  - (this.margin * 2);
    this.height = this.getDimension('height') - (this.margin * 2);

    this.pSpace = {
      values: this.modelSet.data.pSpace,
      range: this.modelSet.ranges.pSpace
    }
    this.precision = {
      values: this.modelSet.data.precision,
      target: this.modelSet.model.delta
    }
    this.sampDist = {
      values: this.modelSet.data.sampDist
    }

    // compute scales
    this.xScale = d3.scaleLinear().
      domain(this.pSpace.range.toArray()).
      range([0, this.width]);

    this.yScale = d3.scaleLinear().
      domain([0, 0.8]).
      range([0, this.height]);

    this.yScaleSD = d3.scaleLinear().
      domain(d3.extent(this.sampDist.values).reverse()).
      range([0, this.yScale(0.5)]);

    // sample distribution
    let points = this.pSpace.values.map((xValue, i) => {
      return { x: xValue, y: this.sampDist.values[i] };
    });
    this.sampDistPath = this.getArea(points);

    // main lines
    let leftLimit = this.precision.values[0];
    let rightLimit = this.precision.values[1];
    points = [
      this.precision.values.map((xValue, i) => {
        return { x: xValue, y: 0.5 };
      }),
      [
        { x: leftLimit, y: 0.35 },
        { x: leftLimit, y: 0.65 }
      ],
      [
        { x: rightLimit, y: 0.35 },
        { x: rightLimit, y: 0.65 }
      ]
    ];
    this.paths = this.getPaths(points);

    this.needDraw = true;
  }

  private draw(): void {
    if (!this.needDraw) {
      return;
    }

    // axes (drawn by d3)
    let xAxis = d3.axisBottom(this.xScale).ticks(6);
    d3.select(this.bottomAxisElement.nativeElement).
      call(xAxis).
      attr("font-size", 10 * this.plotOptions.axisFontSize).
      attr("stroke-width", this.plotOptions.axisLineWidth);

    this.needDraw = false;
  }

  private getDimension(key: string): number {
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

  private translate(x: number, y: number): string {
    if (isNaN(x) || isNaN(y)) {
      return null;
    }
    return `translate(${x}, ${y})`;
  }

  private clipPath(): string {
    return `url(#${this.clipPathId})`;
  }

  private getArea(points: any[]): string {
    let area = d3.area().
      x((d, i) => this.xScale(d.x)).
      y0(this.yScaleSD(0)).
      y1((d, i) => this.yScaleSD(d.y));

    return area(points);
  }

  private getPaths(points: any[]): string[] {
    return points.map(data => {
      let line = d3.line().
        x((d, i) => this.xScale(d.x)).
        y((d, i) => this.yScale(d.y));

      return line(data);
    });
  }
}
