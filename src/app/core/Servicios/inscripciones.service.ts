import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inscripcion } from 'src/app/shared/Interfaces/Inscripcion';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {

  urlInscripciones = `${environment.api}inscripciones/`;

  constructor(private http:HttpClient) { }

  obtenerInscripciones():Observable<Inscripcion[]>{
    return this.http.get<Inscripcion[]>(this.urlInscripciones);
  }

  agregarInscripcion(inscripcion:Inscripcion):Observable<Inscripcion>{
    return this.http.post<Inscripcion>(this.urlInscripciones, inscripcion);
  }

  editarInscripcion(inscripcion:Inscripcion):Observable<Inscripcion>{
    return this.http.put<Inscripcion>(this.urlInscripciones+inscripcion.id, inscripcion);
  }

  eliminarInscripcion(id:number):Observable<Inscripcion>{
    return this.http.delete<Inscripcion>(this.urlInscripciones+id);
  }

}
