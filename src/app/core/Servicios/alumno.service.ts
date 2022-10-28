import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudiante } from '../../shared/Interfaces/Estudiantes';


@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private http:HttpClient) { }

  obtenerAlumnos():Observable<Estudiante[]>{
    return this.http.get<Estudiante[]>('http://localhost:3000/estudiantes');
  }
  agregarAlumno(alumno:Estudiante):Observable<Estudiante>{
    return this.http.post<Estudiante>('http://localhost:3000/estudiantes/', alumno);

  }

  obtenerAlumnoPorId(id:number):Observable<Estudiante>{
    return this.http.get<Estudiante>(`http://localhost:3000/estudiantes/${id}`)
  }

  editarAlumno(alumno:Estudiante){
    return this.http.put(`http://localhost:3000/estudiantes/${alumno.id}`, alumno)
  }
  
  eliminarAlumno(id:number){
    return this.http.get<Estudiante[]>(`http://localhost:3000/estudiantes/${id}`)
}

}
