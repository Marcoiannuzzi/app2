import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Estudiante } from '../../shared/Interfaces/Estudiantes';


@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  urlestudiantes = `${environment.api}estudiantes/`

  constructor(private http:HttpClient) { }

  obtenerAlumnos():Observable<Estudiante[]>{
    return this.http.get<Estudiante[]>(this.urlestudiantes)
    .pipe(
      catchError(this.manejarError)
    );
  }

  agregarAlumno(alumno:Estudiante):Observable<Estudiante>{
    return this.http.post<Estudiante>(this.urlestudiantes, alumno)
    .pipe(
      catchError(this.manejarError)
    );
  }

  obtenerAlumnoPorId(id:number):Observable<Estudiante>{
    return this.http.get<Estudiante>(this.urlestudiantes+id)
    .pipe(
      catchError(this.manejarError)
    );
  }

  editarAlumno(alumno:Estudiante):Observable<any>{
    return this.http.put(this.urlestudiantes+alumno.id, alumno)
    .pipe(
      catchError(this.manejarError)
    );
  }
  
  eliminarAlumno(alumno:Estudiante):Observable<Estudiante>{
    return this.http.delete<Estudiante>(this.urlestudiantes+alumno.id)
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
