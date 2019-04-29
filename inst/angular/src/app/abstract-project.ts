import { EventEmitter } from '@angular/core';
import { LinePlotHandler } from './line-plot-handler';
import { CIPlotHandler } from './ci-plot-handler';

export abstract class AbstractProject {
  updatingPlotData = new EventEmitter();

  abstract getLinePlotHandler(): LinePlotHandler;
  abstract getCIPlotHandler(): CIPlotHandler;
  abstract getSelectedIndex(): number;
  abstract getChangeHistory(): any[];
  abstract getModelOutput(): string;
  abstract getModelInterpretation(): string;
  abstract getModelCount(): number;
}
