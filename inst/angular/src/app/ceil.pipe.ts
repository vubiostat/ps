import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'ceil',
    standalone: false
})
export class CeilPipe implements PipeTransform {

  transform(value: number, args?: any): number {
    return Math.ceil(value);
  }

}
