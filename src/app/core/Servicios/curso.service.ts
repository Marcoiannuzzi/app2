import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cursos } from '../../shared/Interfaces/Cursos';


@Injectable({
  providedIn: 'root'
})
export class CursoService implements OnInit{

  url:string = "http://localhost:3000/cursos"; 

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    
  }


  obtenerCursos():Observable<Cursos[]>{
    return this.http.get<Cursos[]>(this.url)
  }

  obtenerCursoPorId(comision:number):Observable<Cursos>{
    return this.http.get<Cursos>(this.url+comision)
  }

  actualizarCurso(curso:Cursos):Observable<Cursos>{
    return this.http.post<Cursos>(this.url+curso.comision, curso)
  }

  eliminarCurso(comision:number):Observable<any>{
    return this.http.delete<Cursos>(this.url+comision)
    }
  }
