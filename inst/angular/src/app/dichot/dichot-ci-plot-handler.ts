import { Observable } from 'rxjs';
import { CIPlotHandler, CIPlotParam, CIPlotGroup } from '../ci-plot-handler';
import { Point } from '../point';
import { Range } from '../range';
import { CI } from '../ci';
import { Project } from './project';

export class DichotCIPlotHandler extends CIPlotHandler {
  constructor(private project: Project) {
    super();
  }

  getXParam(): CIPlotParam {
    let param = this.project.getDetAltParam();
    let result;
    switch (param) {
      case 'psi':
      case 'psiAlt':
        result = {
          name: 'psi',
          range: this.project.pSpaceRange,
          title: 'Odds ratio of exposure (ψ)',
          sym: 'ψ'
        } as CIPlotParam;
        break;

      case 'p1':
      case 'p1Alt':
        result = {
          name: 'p1',
          range: this.project.pSpaceRange,
          title: 'Probability of the outcome for an experimental patient (p₁)',
          sym: 'p₁'
        } as CIPlotParam;
        break;

      case 'r':
      case 'rAlt':
        result = {
          name: 'r',
          range: this.project.pSpaceRange,
          title: 'Relative risk of failure for experimental subjects relative to controls (R)',
          sym: 'R'
        } as CIPlotParam;
        break;

      default:
        throw new Error(`invalid param name: ${param}`)
    }

    return result;
  }

  getGroups(): CIPlotGroup[] {
    return this.project.models.map(model => {
      let ciArray = model.getCI();
      let ci = {
        lower: ciArray[0],
        upper: ciArray[1],
        n: model.n
      } as CI;

      let group = {
        ci: ci,
        target: model.getCITarget(),
        sampDist: model.sampDist,
        ciValues: model.ciValues
      } as CIPlotGroup;
      return group;
    });
  }

  getSelectedIndex(): number {
    return this.project.selectedIndex;
  }

  updateTargetValue(value: number): Observable<any> {
    let param = this.project.getDetAltParam();
    return this.project.updateModel(this.project.selectedIndex, param, value);
  }

  updateCIValue(ci: CI): Observable<any> {
    return this.project.updateModel(this.project.selectedIndex, 'n', ci.n);
  }

  setIntermediateCIValue(ci: CI) {
    let model = this.project.getModel(this.project.selectedIndex);
    model.n = ci.n;
  }
}
