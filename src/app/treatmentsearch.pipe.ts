import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'TreatmentFilter'
})
export class TreatmentSearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      const rVal =  (val.procedurename.toLocaleLowerCase().includes(args));
      return rVal;
    });

  }

}
