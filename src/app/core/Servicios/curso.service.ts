import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cursos } from '../../shared/Interfaces/Cursos';


@Injectable({
  providedIn: 'root'
})
export class CursoService{ 

  urlCursos = `${environment.api}cursos/`;

  constructor(private http:HttpClient) { }

  obtenerCursos():Observable<Cursos[]>{
    return this.http.get<Cursos[]>(this.urlCursos)
    .pipe(
      catchError(this.manejarError)
    );
  }

  agregarCurso(curso:Cursos):Observable<Cursos>{
    return this.http.post<Cursos>(this.urlCursos, curso)
    .pipe(
      catchError(this.manejarError)
    );
  }

  actualizarCurso(curso:Cursos):Observable<Cursos>{
    return this.http.put<Cursos>(this.urlCursos+curso.id, curso)
    .pipe(
      catchError(this.manejarError)
    );
  }

  eliminarCurso(curso:Cursos):Observable<Cursos>{
    return this.http.delete<Cursos>(this.urlCursos+curso.id)
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


