export class Range {
  description: string;

  constructor(public min: number, public max: number) {}

  combine(other: Range): void {
    if (other.min < this.min) {
      this.min = other.min;
    }
    if (other.max > this.max) {
      this.max = other.max;
    }
  }

  toArray(): number[] {
    return [this.min, this.max];
  }

  clone(): Range {
    return new Range(this.min, this.max);
  }
}
