import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { inscripcion } from 'src/app/shared/Interfaces/Inscripcion';

@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {

  url:string = "http://localhost:3000/inscripciones/"

  constructor(private http:HttpClient) { }

  obtenerInscripciones():Observable<inscripcion[]>{
    return this.http.get<inscripcion[]>(this.url);
  }

  agregarInscripcion(inscripcion:inscripcion):Observable<inscripcion>{
    return this.http.post<inscripcion>(this.url, inscripcion);
  }

  editarInscripcion(inscripcion:inscripcion):Observable<inscripcion>{
    return this.http.put<inscripcion>(this.url+inscripcion.id, inscripcion);
  }

  eliminarInscripcion(id:number):Observable<inscripcion>{
    return this.http.delete<inscripcion>(this.url+id);
  }

}
