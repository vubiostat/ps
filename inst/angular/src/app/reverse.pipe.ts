import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'reverse',
    standalone: false
})
export class ReversePipe implements PipeTransform {

  transform(value: any[], args?: any): any[] {
    return value.slice().reverse();
  }

}
