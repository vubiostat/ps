import { Injectable } from '@angular/core';

@Injectable()
export class PaletteService {
  private colors = {
    typical: ["#0000DD", "#DD0000", "#000000", "#006600", "#008888"],
    plasma:  ["#0D0887", "#7E03A8", "#CC4678", "#F89441", "#F0F921"],
    viridis: ["#440154", "#3B528B", "#21908C", "#5DC863", "#FDE725"],
    magma:   ["#000004", "#51127C", "#B63679", "#FB8861", "#FCFDBF"],
    pattern: ["#000000", "#000000", "#000000", "#000000", "#000000"]
  };

  private patterns = {
    typical: ["any"],
    plasma:  ["any"],
    viridis: ["any"],
    magma:   ["any"],
    pattern: ["solid", "short-dash", "medium-dash", "long-dash", "dot"]
  };

  getColor(index: number, name = "typical"): string {
    if (!(name in this.colors)) {
      throw new Error(`invalid palette: ${name}`);
    }
    if (index == -1) {
      return "";
    }

    let colors = this.colors[name];
    return colors[index % colors.length];
  }

  getPattern(index: number, name = "typical"): string {
    if (!(name in this.patterns)) {
      throw new Error(`invalid palette: ${name}`);
    }
    if (index == -1) {
      return "";
    }

    let patterns = this.patterns[name];
    return patterns[index % patterns.length];
  }
}
