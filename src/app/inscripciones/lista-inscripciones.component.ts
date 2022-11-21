import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {  Observable } from 'rxjs';
import { AppState } from '../app.state';
import { selecCargandoCursos } from '../cursos/state/cursos.selector';
import { Cursos } from '../shared/Interfaces/Cursos';
import { selecCargandoEstadoInscripciones, selecCargandoInscripciones } from './state/inscripciones.selector';

@Component({
  selector: 'app-lista-inscripciones',
  templateUrl: './lista-inscripciones.component.html',
  styleUrls: ['./lista-inscripciones.component.css']
})
export class ListaInscripcionesComponent implements OnInit {

  loading$:Observable<boolean> = new Observable();
  listaInscripciones$:Observable<any>= new Observable();
  listaCursos$ : Observable<Cursos[]> = new Observable();

  constructor(
    private store:Store<AppState>
    ) { }

  ngOnInit(): void {
    this.loading$ = this.store.select(selecCargandoEstadoInscripciones);
    this.listaInscripciones$ = this.store.select(selecCargandoInscripciones);
    this.listaCursos$ = this.store.select(selecCargandoCursos)
  }

  inscribir(curso:Cursos){
    // const inscripcion:Inscripcion = {
    //   id:0,
    //   curso:curso,
    //   estudiante: 
    // }
    // this.store.dispatch(agregarInscripcion({inscripcion}))
  }
}
