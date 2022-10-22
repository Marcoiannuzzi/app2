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
    const curso = listaCursos.find((curso:Cursos)=>curso.comision === comision);
    if (curso){
       const index = listaCursos.indexOf(curso)
       listaCursos.splice(index,1);
    }
  }





}
