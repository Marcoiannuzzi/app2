import { Component, OnInit } from '@angular/core';
import { Cursos } from '../shared/Interfaces/Cursos';
import { CursoService } from '../core/Servicios/curso.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { selecCargandoCursos } from './state/cursos.selector';
import { borrarCurso } from './state/cursos.action';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  token?:any;
  listaCursos$:Observable<Cursos[]> = new Observable<Cursos[]>()

  constructor(private cursoService:CursoService, private router: Router, private store:Store<AppState>) {

   }

  ngOnInit(): void {
    this.listaCursos$ = this.store.select(selecCargandoCursos)
    this.token = sessionStorage.getItem('token')
  }

  eliminar(curso:Cursos):void{
    this.store.dispatch(borrarCurso({curso}))
  }

  editar(curso:Cursos){
    this.router.navigate(['/cursos/editar-curso', curso]);

  }

}
