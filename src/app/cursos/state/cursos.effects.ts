import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CursoService } from 'src/app/core/Servicios/curso.service';
import * as CursosActions from './cursos.action'

@Injectable()
export class CursosEffects {

  cargaCursos$ = createEffect(() => this.actions$.pipe(
    ofType(CursosActions.cargarCursos),
    mergeMap(() => this.cursoService.obtenerCursos()
      .pipe(
        map(cursos => CursosActions.cursosCargados({cursos:cursos})),
        catchError(() => EMPTY)
      ))
    )
  );
 
  agregarCursos$ = createEffect(() => this.actions$.pipe(
    ofType(CursosActions.agregarCurso),
    mergeMap(({curso}) => this.cursoService.agregarCurso(curso)
      .pipe(
        map(() => CursosActions.cargarCursos()),
        catchError(() => EMPTY)
      ))
    )
  );

  editarCursos$ = createEffect(() => this.actions$.pipe(
    ofType(CursosActions.editarCurso),
    mergeMap(({curso}) => this.cursoService.actualizarCurso(curso)
      .pipe(
        map(() => CursosActions.cargarCursos()),
        catchError(() => EMPTY)
      ))
    )
  );
  
  eliminarCursos$ = createEffect(() => this.actions$.pipe(
    ofType(CursosActions.borrarCurso),
    mergeMap(({curso}) => this.cursoService.eliminarCurso(curso)
      .pipe(
        map(() => CursosActions.cargarCursos()),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private cursoService:CursoService
  ) {}
}