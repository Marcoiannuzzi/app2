import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import { cargarCursos } from './cursos/state/cursos.action';
import { cargarInscripciones } from './inscripciones/state/inscripciones.actions';
import { cargarEstudiantes } from './student/state/estudiante.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
constructor(private store:Store<AppState>){

}
  ngOnInit(): void {
    this.store.dispatch(cargarCursos())
    this.store.dispatch(cargarEstudiantes())
    this.store.dispatch(cargarInscripciones())
  }

}

