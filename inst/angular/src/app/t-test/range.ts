export class Range {
  static combine(ranges: Range[]): Range {
    let range = new Range(ranges[0].min, ranges[0].max);
    for (let i = 1; i < ranges.length; i++) {
      if (ranges[i].min < range.min) {
        range.min = ranges[i].min;
      }
      if (ranges[i].max > range.max) {
        range.max = ranges[i].max;
      }
    }
    return range;
  }

  constructor(public min: number, public max: number) {}

  toArray(): number[] {
    return [this.min, this.max];
  }
}
