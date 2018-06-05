import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatFixed'
})
export class FormatFixedPipe implements PipeTransform {

  transform(value: number, others: number[]): string {
    if (value === undefined) {
      return '';
    }

    let widths = others.concat(value).map(v => {
      let wholeDigits = Math.ceil(Math.log10(Math.abs(v)));
      return wholeDigits + 4; // 4 = 2 digits after decimal, decimal, +/-
    });
    let width = Math.max.apply(undefined, widths);
    let result = value.toFixed(2);
    while (result.length < width) {
      result = ' ' + result;
    }
    return result;
  }

}
