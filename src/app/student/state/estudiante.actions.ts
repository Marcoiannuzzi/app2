import { createAction, props } from '@ngrx/store';
import { Estudiante } from 'src/app/shared/Interfaces/Estudiantes';

export const cargarEstudiantes = createAction(
    '[Estudiante Actions] Cargar Estudiante',
);

export const estudianteCargados = createAction(
    '[Estudiante Actions] Estudiante Cargados',
    props<{ estudiantes : Estudiante[] }>()
  );

  export const agregarEstudiante = createAction(
    '[Estudiante Actions] Agregar Estudiante',
    props<{ estudiante:Estudiante }>()
  );

  export const editarEstudiante = createAction(
    '[Estudiante Actions] Editar Estudiante',
    props<{ estudiante:Estudiante }>()
  );

  export const borrarEstudiante = createAction(
    '[Estudiante Actions] Borrar Estudiante',
    props<{ estudiante:Estudiante }>()
  );