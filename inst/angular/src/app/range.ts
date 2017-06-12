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

  static fromData(indices: number[], data: number[]) {
    let minIndex = 0, maxIndex = data.length - 1;
    if (indices[0] > minIndex) {
      minIndex = indices[0];
    }
    if (indices[1] < maxIndex) {
      maxIndex = indices[1];
    }
    let values = [data[minIndex], data[maxIndex]].sort((a, b) => a - b);
    values[0] = Math.floor(values[0] * 100) / 100;
    values[1] = Math.ceil(values[1] * 100) / 100;
    return new Range(values[0], values[1]);
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

  findIndices(data: number[]): number[] {
    let minIndex = -1, maxIndex = -1;
    for (let i = 0; i < data.length; i++) {
      if (data[i] >= this.min) {
        minIndex = i;
        break
      }
    }
    for (let i = data.length - 1; i >= 0; i--) {
      if (data[i] <= this.max) {
        maxIndex = i;
        break;
      }
    }
    return [minIndex, maxIndex];
  }
}
