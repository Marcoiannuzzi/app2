import { createAction, props } from '@ngrx/store';
import { Cursos } from 'src/app/shared/Interfaces/Cursos';

export const cargarCursos = createAction(
    '[Cursos Actions] Cargar cursos',
);

export const cursosCargados = createAction(
    '[Cursos Actions] Cursos Cargados',
    props<{ cursos:Cursos[] }>()
  );

  export const agregarCurso = createAction(
    '[Cursos Actions] Agregar Cursos',
    props<{ curso:Cursos }>()
  );

  export const editarCurso = createAction(
    '[Cursos Actions] Editar Cursos',
    props<{ curso:Cursos }>()
  );

  export const borrarCurso = createAction(
    '[Cursos Actions] Borrar Cursos',
    props<{ curso:Cursos }>()
  );