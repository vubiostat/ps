import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { LinePlotHandler } from './line-plot-handler';
import { CIPlotHandler } from './ci-plot-handler';
import { Range } from './range';

export enum FixedPSpace {
  Fixed, NotFixed, NA
}

export abstract class AbstractProject {
  updatingPlotData = new EventEmitter();
  pointsPerPlot: number;
  customRanges = false;
  fixedPSpace = FixedPSpace.NA;

  abstract getLinePlotHandler(): LinePlotHandler;
  abstract getCIPlotHandler(): CIPlotHandler;
  abstract getSelectedIndex(): number;
  abstract getChangeHistory(): any[];
  abstract getModelOutput(): string;
  abstract getModelInterpretation(): string;
  abstract getModelCount(): number;
  abstract updatePlotData(): Observable<any>;

  // per-project plot options
  getPointsPerPlot(): number {
    return this.pointsPerPlot;
  }
  setPointsPerPlot(points: number): void {
    this.pointsPerPlot = points;
  }
  getCustomRanges(): boolean {
    return this.customRanges;
  }
  setCustomRanges(value: boolean): void {
    this.customRanges = value;
    if (!value) {
      this.resetRanges();
    }
  }
  getFixedPSpace(): FixedPSpace {
    return this.fixedPSpace;
  }
  setFixedPSpace(value: FixedPSpace): void {
    this.fixedPSpace = value;
    this.calculateRanges();
  }
  abstract resetRanges(): void;
  abstract calculateRanges(): void;
  abstract getTopYRange(): Range;
  abstract setTopYRange(range: Range): void;
  abstract getTopLeftXRange(): Range;
  abstract setTopLeftXRange(range: Range): void;
  abstract getTopRightXRange(): Range;
  abstract setTopRightXRange(range: Range): void;
  abstract getBottomXRange(): Range;
  abstract setBottomXRange(range: Range): void;
}
