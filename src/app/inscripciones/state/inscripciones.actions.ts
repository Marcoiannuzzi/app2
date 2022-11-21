import { createAction, props } from '@ngrx/store';
import { Inscripcion } from 'src/app/shared/Interfaces/Inscripcion';

export const cargarInscripciones = createAction(
    '[Inscripciones] Cargar Inscripciones'
    );

export const inscripcionesCargadas = createAction(
    '[Inscripciones] Inscripciones Cargadas',
    props<{inscripciones : Inscripcion[]}>()
);

export const agregarInscripcion = createAction(
    '[Inscripciones] Agregar Inscripcion',
    props<{inscripcion : Inscripcion}>()
);

export const editarInscripcion = createAction(
    '[Inscripciones] Editar Inscripcion',
    props<{inscripcion : Inscripcion}>()
);

export const eliminarInscripcion = createAction(
    '[Inscripciones] Borrar Inscripcion',
    props<{inscripcion : Inscripcion}>()
);
