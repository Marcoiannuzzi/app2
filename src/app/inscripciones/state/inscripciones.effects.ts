import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { InscripcionesService } from 'src/app/core/Servicios/inscripciones.service';


@Injectable()
export class InscripcionesEffects {

  cargaInscripciones$ = createEffect(() => this.actions$.pipe(
    ofType('[Inscripciones] Cargar Inscripciones'),
    mergeMap(() => this.inscripService.obtenerInscripciones()
      .pipe(
        map(inscripciones => ({ type: '[Inscripciones] Inscripciones Cargadas', inscripciones: inscripciones })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private inscripService:InscripcionesService
  ) {}
}