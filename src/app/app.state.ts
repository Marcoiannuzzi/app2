import { ActionReducerMap } from "@ngrx/store";
import { inscripcionReducer, InscripcionState } from "./inscripciones/state/inscripciones.reducer";

export interface AppState {
    listaInscripciones : InscripcionState
}

export const ROOT_REDUCER:ActionReducerMap<AppState> = {
    listaInscripciones:inscripcionReducer
}