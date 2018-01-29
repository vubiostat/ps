import { Injectable } from '@angular/core';

@Injectable()
export class PlotOptionsService {
  height: number;
  width: number;
  fontFamily = "";
  fontSize = 1;
  axisFontSize = 1;
  lineWidth = 1;
  axisLineWidth = 1;
  paletteTheme = "typical";
  lineStyle = "solid";
  showLegendBox = false;
  legendLabel0 = "Primary";
  legendLabel1 = "Secondary";
  legendLabel2 = "Tertiary";
  legendLabel3 = "Quaternary";
  legendLabel4 = "Quinary";

  reset(): void {
    Object.assign(this, new PlotOptionsService());
  }

  dashArray(style?: string): string {
    if (!style || style == "any") {
      style = this.lineStyle;
    }
    switch (style) {
      case "solid":
        return "";
      case "short-dash":
        return "5,5";
      case "medium-dash":
        return "10,10";
      case "long-dash":
        return "15,15";
      case "dot":
        return "1,5";
    }
  }

  lineCap(style?: string): string {
    if (!style || style == "any") {
      style = this.lineStyle;
    }
    if (style == "dot") {
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
