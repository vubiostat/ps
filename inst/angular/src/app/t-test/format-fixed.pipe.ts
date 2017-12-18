import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatFixed'
})
export class FormatFixedPipe implements PipeTransform {

  transform(value: number, others: number[]): string {
    let widths = others.concat(value).map(v => {
      let result = Math.ceil(Math.log10(Math.abs(v)));
      if (v < 0) result++;
      return result;
    });
    let width = Math.max.apply(undefined, widths) + 3;
    let result = value.toFixed(2);
    while (result.length < width) {
      result = ' ' + result;
    }
    return result;
  }

}
