import { ChangeEmitter, Changeable } from './changeable';

export class PlotOptions extends ChangeEmitter {
  @Changeable height: number;
  @Changeable width: number;
  @Changeable fontFamily: string;
  @Changeable fontSize: number;
  @Changeable axisFontSize: number;
  @Changeable lineWidth: number;
  @Changeable axisLineWidth: number;
  @Changeable paletteTheme: string;

  constructor() {
    super();
    this.noEmit = true;
    this.fontFamily = "";
    this.fontSize = 1;
    this.axisFontSize = 1;
    this.lineWidth = 1;
    this.axisLineWidth = 1;
    this.paletteTheme = "plasma";
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

  update(attribs: any, emit = true): void {
    this.noEmit = true;
    // don't update height and width
    if ('fontFamily' in attribs) {
      this.fontFamily = attribs.fontFamily;
    }
    if ('fontSize' in attribs) {
      this.fontSize = attribs.fontSize;
    }
    if ('axisFontSize' in attribs) {
      this.axisFontSize = attribs.axisFontSize;
    }
    if ('lineWidth' in attribs) {
      this.lineWidth = attribs.lineWidth;
    }
    if ('axisLineWidth' in attribs) {
      this.axisLineWidth = attribs.axisLineWidth;
    }
    this.noEmit = false;
    if (emit) {
      this.emit();
    } else {
      this.changes = {};
    }
  }
}
