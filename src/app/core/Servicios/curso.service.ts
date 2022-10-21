import { Injectable } from '@angular/core';
import { Cursos } from '../../shared/Interfaces/Cursos';
import { listaCursos } from '../../shared/Mocks/CursosMock';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor() { }

  obtenerCursos():Cursos[]{
    return listaCursos
  }



}
