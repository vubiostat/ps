import { ChangeEmitter, Changeable } from './changeable';

export class PlotOptions extends ChangeEmitter {
  @Changeable height: number;
  @Changeable width: number;
  @Changeable fontFamily: string;
  @Changeable fontSize: number;
  @Changeable lineWidth: number;

  constructor() {
    super();
    this.noEmit = true;
    this.fontFamily = "";
    this.fontSize = 1;
    this.lineWidth = 2;
    this.noEmit = false;
    this.changes = {};
  }

  attributes(): any {
    return({
      height: this.height,
      width: this.width,
      fontFamily: this.fontFamily,
      fontSize: this.fontSize,
      lineWidth: this.lineWidth
    });
  }
}
