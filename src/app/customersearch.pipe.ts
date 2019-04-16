import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'CustomerFilter'
})
export class CustomerSearchPipe implements PipeTransform {

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
