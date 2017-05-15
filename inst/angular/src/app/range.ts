import { ChangeEmitter, Changeable } from './changeable';

export class Range extends ChangeEmitter {
  @Changeable min: number;
  @Changeable max: number;

  static fromArray(arr: number[]) {
    if (arr.length != 2) {
      throw new Error("invalid array, must be of length 2");
    }
    if (arr[0] > arr[1]) {
      throw new Error("invalid array, must be in order");
    }
    return new Range(arr[0], arr[1]);
  }

  constructor(min: number, max: number) {
    super();
    this.noEmit = true;
    this.min = min;
    this.max = max;
    this.noEmit = false;
    this.changes = {};
  }

  toArray(): any {
    return([ this.min, this.max ]);
  }
}
