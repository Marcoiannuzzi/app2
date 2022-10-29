import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Estudiante } from '../../shared/Interfaces/Estudiantes';


@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private http:HttpClient) { }

  obtenerAlumnos():Observable<Estudiante[]>{
    return this.http.get<Estudiante[]>('http://localhost:3000/estudiantes')
    .pipe(
      catchError(this.manejarError)
    );;
  }

  agregarAlumno(alumno:Estudiante):Observable<Estudiante>{
    return this.http.post<Estudiante>('http://localhost:3000/estudiantes/', alumno)
    .pipe(
      catchError(this.manejarError)
    );

  }

  obtenerAlumnoPorId(id:number):Observable<Estudiante>{
    return this.http.get<Estudiante>(`http://localhost:3000/estudiantes/${id}`)
    .pipe(
      catchError(this.manejarError)
    );
  }

  editarAlumno(alumno:Estudiante):Observable<any>{
    return this.http.put(`http://localhost:3000/estudiantes/${alumno.id}`, alumno)
    .pipe(
      catchError(this.manejarError)
    );
  }
  
  eliminarAlumno(id:number):Observable<any>{
    return this.http.delete(`http://localhost:3000/estudiantes/${id}`)
    .pipe(
      catchError(this.manejarError)
    );
}

manejarError(err:HttpErrorResponse){
  if (err.error instanceof ErrorEvent){
    console.warn('Ha ocurrido un error del lado cliente', err.error.message)
  } else {
    console.warn('Ha ocurrido un error del lado servidor', err.error.message)
  }
  return throwError(()=> Error('error en conexion http'));
}

}
