export class TTest {
  id: string;
  output: string;
  design = "paired";
  alpha: number;
  sigma: number;
  delta: number;
  power: number;
  n: number;

  constructor(attribs?: any) {
    if (attribs) {
      this.id = attribs.id;
      this.output = attribs.output;
      this.design = attribs.design;
      this.alpha = attribs.alpha;
      this.sigma = attribs.sigma;
      this.delta = attribs.delta;
      this.power = attribs.power;
      this.n = attribs.n;
    }
  }

  isValid(): boolean {
    return this.alpha > 0 && this.alpha < 1 &&
      this.sigma > 0 &&
      (this.output == "n" || this.output == "power" || this.output == "delta") &&
      (this.output == "n" || this.n > 0) &&
      (this.output == "power" || (this.power > this.alpha && this.power < 1)) &&
      (this.output == "delta" || this.delta > 0);
  }
}
