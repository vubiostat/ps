import { Observable } from 'rxjs';
import { LinePlotHandler, LinePlotParam } from '../line-plot-handler';
import { Output } from '../output';
import { Point } from '../point';
import { Project } from './project';

enum ParamType { X, Y }

export class DichotLinePlotHandler extends LinePlotHandler {
  constructor(private project: Project) {
    super();
  }

  getXParam(plotName: string): LinePlotParam {
    return this.getParam(plotName, ParamType.X);
  }

  getYParam(plotName: string): LinePlotParam {
    return this.getParam(plotName, ParamType.Y);
  }

  getPlotData(plotName: string): Point[][] {
    let result: Point[][];

    let dataKey = this.getDataKey(plotName);
    if (dataKey) {
      result = this.project.models.map(m => m[dataKey]);

      // Move main data to front
      if (this.project.selectedIndex > 0) {
        let tmp = result.splice(this.project.selectedIndex, 1);
        result.splice(0, 0, tmp[0]);
      }
    }

    return result;
  }

  getSelectedIndex(): number {
    return this.project.selectedIndex;
  }

  getNumModels(): number {
    return this.project.models.length;
  }

  getModelNames(): string[] {
    return this.project.models.map(m => m.name);
  }

  updateModel(index: number, name: string, value: number): Observable<any> {
    return this.project.updateModel(index, name, value);
  }

  private getParam(plotName: string, which: ParamType): LinePlotParam {
    let result: LinePlotParam;

    let model = this.project.getModel(this.project.selectedIndex);
    if (model.output === Output.SampleSize) {
      if (which === ParamType.X) {
        if (plotName == 'top-left' || plotName == 'top-left-export') {
          // Sample Size vs. Power
          result = {
            name: 'power', range: this.project.powerRange, target: model.power,
            title: 'Power', sym: '1-β'
          } as LinePlotParam;
          //this.dataKey = 'sampleSizeVsPower';

        } else if (plotName == 'top-right' || plotName == 'top-right-export') {
          // Sample Size vs. Detectable Alternative
          let param = model.getDetAltParam();
          let sym = this.getDetAltSym(param);
          result = {
            name: param, range: this.project.detAltRange, target: model[param],
            title: 'Detectable Alternative', sym: sym
          } as LinePlotParam;
          //this.dataKey = 'sampleSizeVsDetAlt';
        }
      } else if (which === ParamType.Y) {
        result = {
          name: 'n', range: this.project.sampleSizeRange, target: model.n,
          title: 'Sample Size', sym: 'n'
        } as LinePlotParam;
      }
    } else if (model.output === Output.Power) {
      if (which === ParamType.X) {
        if (plotName == 'top-left' || plotName == 'top-left-export') {
          // Power vs. Sample Size
          result = {
            name: 'n', range: this.project.sampleSizeRange, target: model.n,
            title: 'Sample Size', sym: 'n'
          } as LinePlotParam;
          //this.dataKey = 'powerVsSampleSize';

        } else if (plotName == 'top-right' || plotName == 'top-right-export') {
          // Power vs. Detectable Alternative
          let param = model.getDetAltParam();
          let sym = this.getDetAltSym(param);
          result = {
            name: param, range: this.project.detAltRange, target: model[param],
            title: 'Detectable Alternative', sym: sym
          };
          //this.dataKey = 'powerVsDetAlt';
        }
      } else if (which === ParamType.Y) {
        result = {
          name: 'power', range: this.project.powerRange, target: model.power,
          title: 'Power', sym: '1-β'
        } as LinePlotParam;
      }
    } else if (model.output === Output.DetectableAlternative) {
      if (which === ParamType.X) {
        if (plotName == 'top-left' || plotName == 'top-left-export') {
          // Detectable Alternative vs. Sample Size
          result = {
            name: 'n', range: this.project.sampleSizeRange, target: model.n,
            title: 'Sample Size', sym: 'n'
          } as LinePlotParam;
          //this.dataKey = 'detAltVsSampleSize';

        } else if (plotName == 'top-right' || plotName == 'top-right-export') {
          // Detectable Alternative vs. Power
          result = {
            name: 'power', range: this.project.powerRange, target: model.power,
            title: 'Power', sym: '1-β'
          } as LinePlotParam;
          //this.dataKey = 'detAltVsPower';
        }
      } else if (which === ParamType.Y) {
        let param = model.getDetAltParam();
        let sym = this.getDetAltSym(param);
        result = {
          name: param, range: this.project.detAltRange, target: model[param],
          title: 'Detectable Alternative', sym: sym
        } as LinePlotParam;
      }
    }
    return result;
  }

  private getDataKey(plotName: string): string {
    let result: string;

    let model = this.project.getModel(this.project.selectedIndex);
    if (model.output === Output.SampleSize) {
      if (plotName == 'top-left' || plotName == 'top-left-export') {
        result = 'sampleSizeVsPower';
      } else if (plotName == 'top-right' || plotName == 'top-right-export') {
        result = 'sampleSizeVsDetAlt';
      }

    } else if (model.output === Output.Power) {
      if (plotName == 'top-left' || plotName == 'top-left-export') {
        result = 'powerVsSampleSize';
      } else if (plotName == 'top-right' || plotName == 'top-right-export') {
        result = 'powerVsDetAlt';
      }

    } else if (model.output === Output.DetectableAlternative) {
      if (plotName == 'top-left' || plotName == 'top-left-export') {
        result = 'detAltVsSampleSize';
      } else if (plotName == 'top-right' || plotName == 'top-right-export') {
        result = 'detAltVsPower';
      }
    }

    return result;
  }

  private getDetAltSym(param: string): string {
    switch (param) {
      case 'psi':
      case 'psiAlt':
        return 'ψ';
      case 'p1':
      case 'p1Alt':
        return 'p₁';
      case 'r':
      case 'rAlt':
        return 'R';
    }
    return '';
  }
}
