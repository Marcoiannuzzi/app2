import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanoATexto'
})
export class BooleanoATextoPipe implements PipeTransform {

  transform(value: boolean, ...args: string[]): string {
    return value ? args[0] : args[1];
  }


}
