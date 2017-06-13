import { ChangeEmitter, Changeable } from './changeable';

export class PlotOptions extends ChangeEmitter {
  @Changeable height: number;
  @Changeable width: number;
  @Changeable fontFamily: string;
  @Changeable fontSize: number;
  @Changeable axisFontSize: number;
  @Changeable lineWidth: number;
  @Changeable axisLineWidth: number;

  constructor() {
    super();
    this.noEmit = true;
    this.fontFamily = "";
    this.fontSize = 1;
    this.axisFontSize = 1;
    this.lineWidth = 1;
    this.axisLineWidth = 1;
    this.noEmit = false;
    this.changes = {};
  }

  attributes(): any {
    return({
      height: this.height,
      width: this.width,
      fontFamily: this.fontFamily,
      axisFontSize: this.axisFontSize,
      fontSize: this.fontSize,
      lineWidth: this.lineWidth,
      axisLineWidth: this.axisLineWidth
    });
  }
}
