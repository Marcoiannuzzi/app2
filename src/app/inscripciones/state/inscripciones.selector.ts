import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { InscripcionState } from './inscripciones.reducer';


export const selectInscripcionFeature = (state: AppState) => state.listaInscripciones;

export const selecCargandoInscripciones= createSelector(
  selectInscripcionFeature,
  (state: InscripcionState) => state.inscripciones
);

export const selecCargando= createSelector(
    selectInscripcionFeature,
    (state: InscripcionState) => state.cargando
  );