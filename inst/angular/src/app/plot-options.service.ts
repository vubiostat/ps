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

  reset(): void {
    Object.assign(this, new PlotOptionsService());
  }

  getFontFamily(): string {
    if (this.fontFamily == '') {
      return '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
    } else {
      return this.fontFamily;
    }
  }

  getFontSize(): number {
    return this.fontSize * 18;
  }

  getAxisFontSize(): number {
    return this.axisFontSize * 15;
  }

  getAxisLineWidth(): number {
    return this.axisLineWidth * 1.5;
  }

  getLineWidth(): number {
    return this.lineWidth * 3;
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
}
