import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AlumnoService } from 'src/app/core/Servicios/alumno.service';
import * as EstudianteActions from './estudiante.actions'

@Injectable()
export class EstudiantesEffects {

  cargaEstudiantes$ = createEffect(() => this.actions$.pipe(
    ofType(EstudianteActions.cargarEstudiantes),
    mergeMap(() => this.estudiantesService.obtenerAlumnos()
      .pipe(
        map(estudiantes => EstudianteActions.estudianteCargados({estudiantes:estudiantes})),
        catchError(() => EMPTY)
      ))
    )
  );

  agregarEstudiantes$ = createEffect(() => this.actions$.pipe(
    ofType(EstudianteActions.agregarEstudiante),
    mergeMap(({estudiante}) => this.estudiantesService.agregarAlumno(estudiante)
      .pipe(
        map(() => EstudianteActions.cargarEstudiantes()),
        catchError(() => EMPTY)
      ))
    )
  );
  
  editarEstudiantes$ = createEffect(() => this.actions$.pipe(
    ofType(EstudianteActions.editarEstudiante),
    mergeMap(({estudiante}) => this.estudiantesService.editarAlumno(estudiante)
      .pipe(
        map(() => EstudianteActions.cargarEstudiantes()),
        catchError(() => EMPTY)
      ))
    )
  );

  eliminarEstudiantes$ = createEffect(() => this.actions$.pipe(
    ofType(EstudianteActions.borrarEstudiante),
    mergeMap(({estudiante}) => this.estudiantesService.eliminarAlumno(estudiante)
      .pipe(
        map(() => EstudianteActions.cargarEstudiantes()),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private estudiantesService:AlumnoService
  ) {}
}