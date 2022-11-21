import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { InscripcionesService } from '../core/Servicios/inscripciones.service';
import { Inscripcion } from '../shared/Interfaces/Inscripcion';
import { cargarInscripciones, inscripcionesCargadas } from './state/inscripciones.actions';
import { selecCargando, selecCargandoInscripciones } from './state/inscripciones.selector';

@Component({
  selector: 'app-lista-inscripciones',
  templateUrl: './lista-inscripciones.component.html',
  styleUrls: ['./lista-inscripciones.component.css']
})
export class ListaInscripcionesComponent implements OnInit {

  loading$:Observable<boolean> = new Observable()
  listaInscripciones:Observable<any>= new Observable()

  constructor(
    private store:Store<any>, 
    private inscripService:InscripcionesService) { }

  ngOnInit(): void {
    this.store.dispatch(cargarInscripciones())
    this.loading$ = this.store.select(selecCargando)
    this.listaInscripciones = this.store.select(selecCargandoInscripciones)
  }
}
