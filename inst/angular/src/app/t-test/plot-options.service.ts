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
  @Changeable lineStyle: string;

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
      paletteTheme: "plasma",
      lineStyle: "solid"
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
      paletteTheme: this.paletteTheme,
      lineStyle: this.lineStyle
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
    if ('lineStyle' in attribs) {
      this.lineStyle = attribs.lineStyle;
    }
    this.noEmit = false;
    if (emit) {
      this.emit();
    } else {
      this.changes = {};
    }
  }

  dashArray(): string {
    switch (this.lineStyle) {
      case "solid":
        return "";
      case "dashed":
        return "5,5";
      case "dotted":
        return "1,5";
    }
  }

  lineCap(): string {
    if (this.lineStyle == "dotted") {
      return "round";
    }
    return "";
  }
}
