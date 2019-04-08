import { Observable } from 'rxjs';
import { Point } from './point';
import { Range } from './range';
import { CI } from './ci';

export interface CIPlotParam {
  name: string;
  range: Range;
  title: string;
  sym: string;
}

export interface CIPlotGroup {
  ci: CI;
  ciValues?: CI[];
  target: number;
  sampDist: Point[];
}

export abstract class CIPlotHandler {
  abstract getXParam(): CIPlotParam;
  abstract getGroups(): CIPlotGroup[];
  abstract getSelectedIndex(): number;
  abstract updateTargetValue(value: number): Observable<any>;
  abstract updateCIValue(ci: CI): Observable<any>;
  abstract setIntermediateCIValue(ci: CI);
}
