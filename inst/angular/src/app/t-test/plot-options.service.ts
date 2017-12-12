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
  @Changeable showLegendBox: boolean;
  @Changeable legendLabel0: string;
  @Changeable legendLabel1: string;
  @Changeable legendLabel2: string;
  @Changeable legendLabel3: string;
  @Changeable legendLabel4: string;

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
      lineStyle: "solid",
      showLegendBox: false,
      legendLabel0: "Primary",
      legendLabel1: "Secondary",
      legendLabel2: "Tertiary",
      legendLabel3: "Quaternary",
      legendLabel4: "Quinary",
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
      lineStyle: this.lineStyle,
      showLegendBox: this.showLegendBox,
      legendLabel0: this.legendLabel0,
      legendLabel1: this.legendLabel1,
      legendLabel2: this.legendLabel2,
      legendLabel3: this.legendLabel3,
      legendLabel4: this.legendLabel4,
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
    if ('showLegendBox' in attribs) {
      this.showLegendBox = attribs.showLegendBox;
    }
    if ('legendLabel0' in attribs) {
      this.legendLabel0 = attribs.legendLabel0;
    }
    if ('legendLabel1' in attribs) {
      this.legendLabel1 = attribs.legendLabel1;
    }
    if ('legendLabel2' in attribs) {
      this.legendLabel2 = attribs.legendLabel2;
    }
    if ('legendLabel3' in attribs) {
      this.legendLabel3 = attribs.legendLabel3;
    }
    if ('legendLabel4' in attribs) {
      this.legendLabel4 = attribs.legendLabel4;
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

  legendLabel(index: number): string {
    let result = this[`legendLabel${index}`];
    if (!result) {
      switch (index) {
        case 0:
          result = "Primary";
          break;
        case 1:
          result = "Secondary";
          break;
        case 2:
          result = "Tertiary";
          break;
        case 3:
          result = "Quaternary";
          break;
        case 4:
          result = "Quinary";
          break;
        case 5:
          result = "Senary";
          break;
        case 6:
          result = "Septenary";
          break;
        case 7:
          result = "Octonary";
          break;
        case 8:
          result = "Nonary";
          break;
        case 9:
          result = "Denary";
          break;
        default:
          result = `Line ${index + 1}`;
          break;
      }
    }
    return result;
  }
}
