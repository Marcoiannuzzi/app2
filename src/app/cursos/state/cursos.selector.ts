import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { CursosState } from './cursos.reducer';

export const selectCursosFeature = (state: AppState) => state.listaCursos;

export const selecCargandoCursos= createSelector(
  selectCursosFeature,
  (state: CursosState) => state.cursos
);

export const selecCargandoEstadoCursos= createSelector(
    selectCursosFeature,
    (state: CursosState) => state.cargando
  );