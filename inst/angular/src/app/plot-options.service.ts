import { Injectable } from '@angular/core';
import { ChangeEmitter, Changeable } from './changeable';

@Injectable()
export class PlotOptionsService extends ChangeEmitter {
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
    this.setDefaults(false);
  }

  setDefaults(emit = true): void {
    this.update({
      fontFamily: "",
      fontSize: 1,
      axisFontSize: 1,
      lineWidth: 1,
      axisLineWidth: 1,
      paletteTheme: "plasma"
    }, emit);
  }

  attributes(): any {
    return({
      height: this.height,
      width: this.width,
      fontFamily: this.fontFamily,
      axisFontSize: this.axisFontSize,
      fontSize: this.fontSize,
      lineWidth: this.lineWidth,
      axisLineWidth: this.axisLineWidth,
      paletteTheme: this.paletteTheme
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
    if ('paletteTheme' in attribs) {
      this.paletteTheme = attribs.paletteTheme;
    }
    this.noEmit = false;
    if (emit) {
      this.emit();
    } else {
      this.changes = {};
    }
  }
}
