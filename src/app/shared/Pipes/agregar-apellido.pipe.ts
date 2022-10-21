import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agregarApellido'
})
export class AgregarApellidoPipe implements PipeTransform {

 
  

  transform(value: string, ...args: string[]): string {
    return value ? args[0]:args[1]
  }

  

}
