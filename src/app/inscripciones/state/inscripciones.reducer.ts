import { createReducer, on } from '@ngrx/store';
import { Inscripcion } from 'src/app/shared/Interfaces/Inscripcion';
import { cargarInscripciones , agregarInscripcion,  inscripcionesCargadas, editarInscripcion ,eliminarInscripcion } from './inscripciones.actions';


export interface InscripcionState {
    cargando:boolean;
    inscripciones:Inscripcion[];
}

export const initialState:InscripcionState = {
    cargando:false,
    inscripciones:[]
} 

export const inscripcionReducer = createReducer(
  initialState,
  on(cargarInscripciones, (state) => {
    return {...state,cargando: true}
  }),
  on(inscripcionesCargadas,(state, {inscripciones})=>{
    return{...state, cargando:false, inscripciones:inscripciones}
  }),
  on(agregarInscripcion,(state, {inscripcion})=>{
    return {...state, cargando:false ,inscripcion : inscripcion}
  }),
  on(editarInscripcion,(state, {inscripcion})=>{
    return {...state, cargando:false ,inscripcion : inscripcion}
  }),
  on(eliminarInscripcion,(state, {inscripcion})=>{
    return {...state, cargando:false ,inscripcion : inscripcion}
  })
 
);