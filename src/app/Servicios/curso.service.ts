import { Injectable } from '@angular/core';
import { Cursos } from '../Interfaces/Cursos';
import { listaCursos } from '../Mocks/CursosMock';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor() { }

  obtenerCursos():Cursos[]{
    return listaCursos
  }



}
