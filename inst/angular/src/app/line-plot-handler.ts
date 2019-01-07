import { Observable } from 'rxjs';
import { Point } from './point';
import { Range } from './range';

export interface LinePlotParam {
  name: string;
  target?: number;
  range: Range;
  title: string;
  sym: string;
}

export abstract class LinePlotHandler {
  abstract getXParam(plotName: string): LinePlotParam;
  abstract getYParam(plotName: string): LinePlotParam;
  abstract getPlotData(plotName: string): Point[][];
  abstract getSelectedIndex(): number;
  abstract getNumModels(): number;
  abstract getModelNames(): string[];
  abstract updateModel(index: number, name: string, value: number): Observable<any>;
}
