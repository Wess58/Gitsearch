import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countChecker'
})
export class CountCheckerPipe implements PipeTransform {

  transform(value: any, args?: any[]): any {

    value = value.toString();
    // console.log(value);


    if (value.length > 6) {
      return value.substring(0, 2) + 'm';
    } else if (value.length > 3) {
      return value.substring(0, 2) + 'k';
    } else {
      return value;
    }

  }



}
