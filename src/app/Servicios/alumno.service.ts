import { Injectable } from '@angular/core';
import { Estudiante } from '../Estudiantes/Estudiantes';
import { listaEstudiantes } from '../Mocks/EstudiantesMock';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor() { }

  obtenerAlumnos(): Estudiante[] {
    return listaEstudiantes;
  }
}
