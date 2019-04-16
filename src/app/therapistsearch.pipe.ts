import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'TherapistFilter'
})
export class TherapistSearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      const rVal =  (val.name.toLocaleLowerCase().includes(args));
      return rVal;
    });

  }

}
