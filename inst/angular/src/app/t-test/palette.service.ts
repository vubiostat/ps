import { Injectable } from '@angular/core';

@Injectable()
export class PaletteService {
  private colors = {
    plasma:  ["#0D0887", "#7E03A8", "#CC4678", "#F89441", "#F0F921"],
    viridis: ["#440154", "#3B528B", "#21908C", "#5DC863", "#FDE725"],
    magma:   ["#000004", "#51127C", "#B63679", "#FB8861", "#FCFDBF"],
  };

  getColor(index: number, name = "plasma"): string {
    if (!(name in this.colors)) {
      throw new Error(`invalid palette: ${name}`);
    }
    if (index == -1) {
      return "";
    }

    let colors = this.colors[name];
    return colors[index % colors.length];
  }
}
