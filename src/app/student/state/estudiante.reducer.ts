import { createReducer, on } from '@ngrx/store';
import { Estudiante } from 'src/app/shared/Interfaces/Estudiantes';
import { agregarEstudiante, borrarEstudiante, cargarEstudiantes, editarEstudiante, estudianteCargados } from './estudiante.actions';


export interface EstudianteState {
    cargando:boolean;
    estudiantes:Estudiante[];
}

export const initialState:EstudianteState = {
    cargando:false,
    estudiantes:[]
}  

export const estudiantesReducer = createReducer(
  initialState,
  on(cargarEstudiantes, (state) => {
    return {...state,cargando: true}
  }),
  on(estudianteCargados,(state, {estudiantes})=>{
    return{...state, cargando:false, estudiantes:estudiantes}
  }),
  on(agregarEstudiante,(state, {estudiante})=>{
    return {...state, cargando:false ,estudiante : estudiante}
  }),
  on(editarEstudiante,(state, {estudiante})=>{
    return {...state, cargando:false ,inscripcion : estudiante}
  }),
  on(borrarEstudiante,(state, {estudiante})=>{
    return {...state, cargando:false ,estudiante : estudiante}
  })
 
);