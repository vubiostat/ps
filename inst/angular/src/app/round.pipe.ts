import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'round'
})
export class RoundPipe implements PipeTransform {

  transform(value: number, digits = 2): number {
    let amount = 10 ** digits;
    return Math.round(value * amount) / amount;
  }

}
