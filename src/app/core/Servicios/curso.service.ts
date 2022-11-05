import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Cursos } from '../../shared/Interfaces/Cursos';


@Injectable({
  providedIn: 'root'
})
export class CursoService{

  url:string = "http://localhost:3000/cursos/"; 

  constructor(private http:HttpClient) { }

  obtenerCursos():Observable<Cursos[]>{
    return this.http.get<Cursos[]>(this.url)
    .pipe(
      catchError(this.manejarError)
    );
  }

  agregarCurso(curso:Cursos):Observable<Cursos>{
    return this.http.post<Cursos>(this.url, curso)
    .pipe(
      catchError(this.manejarError)
    );
  }

  obtenerCursoPorId(comision:number):Observable<Cursos>{
    return this.http.get<Cursos>(this.url+comision)
    .pipe(
      catchError(this.manejarError)
    );
  }

  actualizarCurso(curso:Cursos):Observable<any>{
    return this.http.put(this.url+curso.comision, curso)
    .pipe(
      catchError(this.manejarError)
    );
  }

  eliminarCurso(comision:number):Observable<any>{
    return this.http.delete(this.url+comision)
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


