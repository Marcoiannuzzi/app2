import { ActionReducerMap } from "@ngrx/store";
import { cursosReducer, CursosState } from "./cursos/state/cursos.reducer";
import { inscripcionReducer, InscripcionState } from "./inscripciones/state/inscripciones.reducer";
import { estudiantesReducer, EstudianteState } from "./student/state/estudiante.reducer";

export interface AppState {
    listaInscripciones : InscripcionState
    listaCursos:CursosState
    listaEstudiantes:EstudianteState
}

export const ROOT_REDUCER:ActionReducerMap<AppState> = {
    listaInscripciones:inscripcionReducer,
    listaCursos:cursosReducer,
    listaEstudiantes:estudiantesReducer
}