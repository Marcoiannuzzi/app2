import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { InscripcionesService } from 'src/app/core/Servicios/inscripciones.service';
import * as InscripcionesActions from './inscripciones.actions';


@Injectable()
export class InscripcionesEffects {

  cargaInscripciones$ = createEffect(() => this.actions$.pipe(
    ofType(InscripcionesActions.cargarInscripciones),
    mergeMap(() => this.inscripService.obtenerInscripciones()
      .pipe(
        map(inscripciones => (InscripcionesActions.inscripcionesCargadas({inscripciones:inscripciones}))),
        catchError(() => EMPTY)
      ))
    )
  );

  agregarInscripciones$ = createEffect(() => this.actions$.pipe(
    ofType(InscripcionesActions.agregarInscripcion),
    mergeMap(({inscripcion}) => this.inscripService.agregarInscripcion(inscripcion)
      .pipe(
        map(() => (InscripcionesActions.cargarInscripciones())),
        catchError(() => EMPTY)
      ))
    )
  );

  editarInscripciones$ = createEffect(() => this.actions$.pipe(
    ofType(InscripcionesActions.editarInscripcion),
    mergeMap(({inscripcion}) => this.inscripService.editarInscripcion(inscripcion)
    .pipe(
      map(() => (InscripcionesActions.cargarInscripciones())),
      catchError(() => EMPTY)
      ))
    )
  );

   eliminarInscripciones$ = createEffect(() => this.actions$.pipe(
    ofType(InscripcionesActions.eliminarInscripcion),
    mergeMap(({inscripcion}) => this.inscripService.eliminarInscripcion(inscripcion.id)
    .pipe(
      map(() => (InscripcionesActions.cargarInscripciones())),
      catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private inscripService:InscripcionesService
  ) {}
}