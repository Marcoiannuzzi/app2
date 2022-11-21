import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { EstudianteState } from './estudiante.reducer';

export const selectEstudiantesFeature = (state: AppState) => state.listaEstudiantes;

export const selecCargandoEstudiantes= createSelector(
  selectEstudiantesFeature,
  (state: EstudianteState) => state.estudiantes
);

export const selecCargandoEstadoEstuddiantes= createSelector(
    selectEstudiantesFeature,
    (state: EstudianteState) => state.cargando
  );