import { Injectable } from '@angular/core';
import { Cursos } from '../../shared/Interfaces/Cursos';
import { listaCursos } from '../../shared/Mocks/CursosMock';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor() { }

  obtenerCursos():Cursos[]{
    return listaCursos;
  }

  obtenerCursoPorId(comision:number):Cursos | undefined {
    let cursoEncontrado = listaCursos.find((curso)=>curso.comision==comision);
    return cursoEncontrado;
  }

  eliminarCurso(comision:number):void{
      let cursoIndex = listaCursos.findIndex((curso:Cursos)=>curso.comision == comision);
      listaCursos.slice(cursoIndex, 1);
  }





}
