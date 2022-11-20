import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { inscripcion } from 'src/app/shared/Interfaces/Inscripcion';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {

  urlInscripciones = `${environment.api}inscripciones/`;

  constructor(private http:HttpClient) { }

  obtenerInscripciones():Observable<inscripcion[]>{
    return this.http.get<inscripcion[]>(this.urlInscripciones);
  }

  agregarInscripcion(inscripcion:inscripcion):Observable<inscripcion>{
    return this.http.post<inscripcion>(this.urlInscripciones, inscripcion);
  }

  editarInscripcion(inscripcion:inscripcion):Observable<inscripcion>{
    return this.http.put<inscripcion>(this.urlInscripciones+inscripcion.id, inscripcion);
  }

  eliminarInscripcion(id:number):Observable<inscripcion>{
    return this.http.delete<inscripcion>(this.urlInscripciones+id);
  }

}
