import { Observable } from 'rxjs';
import { CIPlotHandler, CIPlotParam, CIPlotGroup } from '../ci-plot-handler';
import { Point } from '../point';
import { Range } from '../range';
import { CI } from '../ci';
import { Project } from './project';

export class TTestCIPlotHandler extends CIPlotHandler {
  constructor(private project: Project) {
    super();
  }

  getXParam(): CIPlotParam {
    let result = {
      name: "delta",
      range: this.project.pSpaceRange,
      title: "Detectable Alternative",
      sym: "δ"
    } as CIPlotParam;
    return result;
  }

  getGroups(): CIPlotGroup[] {
    return this.project.models.map(model => {
      let range = model.precisionRange();
      let ci = { lower: range.min, upper: range.max } as CI;
      let group = {
        ci: ci,
        target: model.delta,
        sampDist: model.sampDist
      } as CIPlotGroup;
      return group;
    });
  }

  getSelectedIndex(): number {
    return this.project.selectedIndex;
  }

  updateTargetValue(value: number): Observable<any> {
    return this.project.updateModel(this.project.selectedIndex, 'delta', value);
  }

  updateCIValue(ci: CI): Observable<any> {
    return this.project.updateModel(this.project.selectedIndex, 'ci', ci.upper - ci.lower);
  }

  setIntermediateCIValue(ci: CI) {
    // no-op
  }
}
