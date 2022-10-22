import { Injectable } from '@angular/core';
import { Estudiante } from '../../shared/Interfaces/Estudiantes';
import { listaEstudiantes } from '../../shared/Mocks/EstudiantesMock';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor() { }

  agregarAlumno(alumno:Estudiante):void{
    listaEstudiantes.push(alumno);
  }

  obtenerAlumnos(): Estudiante[] {
    return listaEstudiantes;
  }

  obtenerAlumnoPorId(id:number):Estudiante | undefined{
    const estudiante = listaEstudiantes.find((estudiante:Estudiante)=> estudiante.id === id);
    return estudiante; 
  }
  

  eliminarAlumno(id:number):void{
    const estudiante = listaEstudiantes.find((estudiante:Estudiante)=>estudiante.id === id);
    if (estudiante){
       const index = listaEstudiantes.indexOf(estudiante)
       listaEstudiantes.splice(index,1);
    }
  }
}
