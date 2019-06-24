import { Observable } from 'rxjs';
import { LinePlotHandler, LinePlotParam } from '../line-plot-handler';
import { Point } from '../point';
import { Project } from './project';

enum ParamType { X, Y }

export class TTestLinePlotHandler extends LinePlotHandler {
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
    if (model.output == 'n' || model.output == 'nByCI') {
      if (which === ParamType.X) {
        if (plotName == 'top-left' || plotName == 'top-left-export') {
          // Sample Size vs. Power
          result = {
            name: 'power', range: this.project.powerRange, target: model.power,
            title: 'Power', sym: '1-β'
          } as LinePlotParam;
          //this.dataKey = 'nVsPower';

        } else if (plotName == 'top-right' || plotName == 'top-right-export') {
          // Sample Size vs. Detectable Alternative
          result = {
            name: 'delta', range: this.project.deltaRange, target: model.delta,
            title: 'Detectable Alternative', sym: 'δ'
          } as LinePlotParam
          //this.dataKey = 'nVsDelta';
        }
      } else if (which === ParamType.Y) {
        result = {
          name: 'n', range: this.project.nRange, target: model.n,
          title: 'Sample Size', sym: 'n'
        } as LinePlotParam;
      }
    } else if (model.output == 'power') {
      if (which === ParamType.X) {
        if (plotName == 'top-left' || plotName == 'top-left-export') {
          // Power vs. Sample Size
          result = {
            name: 'n', range: this.project.nRange, target: model.n,
            title: 'Sample Size', sym: 'n'
          } as LinePlotParam;
          //this.dataKey = 'powerVsN';

        } else if (plotName == 'top-right' || plotName == 'top-right-export') {
          // Power vs. Detectable Alternative
          result = {
            name: 'delta', range: this.project.deltaRange, target: model.delta,
            title: 'Detectable Alternative', sym: 'δ'
          } as LinePlotParam;
          //this.dataKey = 'powerVsDelta';
        }
      } else if (which === ParamType.Y) {
        result = {
          name: 'power', range: this.project.powerRange, target: model.power,
          title: 'Power', sym: '1-β'
        } as LinePlotParam;
      }
    } else if (model.output == 'delta') {
      if (which === ParamType.X) {
        if (plotName == 'top-left' || plotName == 'top-left-export') {
          // Detectable Alternative vs. Sample Size
          result = {
            name: 'n', range: this.project.nRange, target: model.n,
            title: 'Sample Size', sym: 'n'
          } as LinePlotParam;
          //this.dataKey = 'deltaVsN';

        } else if (plotName == 'top-right' || plotName == 'top-right-export') {
          // Detectable Alternative vs. Power
          result = {
            name: 'power', range: this.project.powerRange, target: model.power,
            title: 'Power', sym: '1-β'
          } as LinePlotParam;
          //this.dataKey = 'deltaVsPower';
        }
      } else if (which === ParamType.Y) {
        result = {
          name: 'delta', range: this.project.deltaRange, target: model.delta,
          title: 'Detectable Alternative', sym: 'δ'
        } as LinePlotParam;
      }
    }
    return result;
  }

  private getDataKey(plotName: string): string {
    let result: string;

    let model = this.project.getModel(this.project.selectedIndex);
    if (model.output == 'n' || model.output == 'nByCI') {
      if (plotName == 'top-left' || plotName == 'top-left-export') {
        result = 'nVsPower';
      } else if (plotName == 'top-right' || plotName == 'top-right-export') {
        result = 'nVsDelta';
      }

    } else if (model.output == 'power') {
      if (plotName == 'top-left' || plotName == 'top-left-export') {
        result = 'powerVsN';
      } else if (plotName == 'top-right' || plotName == 'top-right-export') {
        result = 'powerVsDelta';
      }

    } else if (model.output == 'delta') {
      if (plotName == 'top-left' || plotName == 'top-left-export') {
        result = 'deltaVsN';
      } else if (plotName == 'top-right' || plotName == 'top-right-export') {
        result = 'deltaVsPower';
      }
    }

    return result;
  }
}
