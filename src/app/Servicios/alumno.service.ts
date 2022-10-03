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

  obtenerAlumnoPorId(id:number):Estudiante | undefined{
    const estudiante = listaEstudiantes.find((estudiante:Estudiante)=> estudiante.id === id);
    return estudiante; 
  }

  eliminarAlumno(id:number):void{
    const estudiante = listaEstudiantes.find((estudiante:Estudiante)=>estudiante.id === id);
    
  }
}
