import { createReducer, on } from '@ngrx/store';
import { Cursos } from 'src/app/shared/Interfaces/Cursos';
import { agregarCurso, borrarCurso, cargarCursos, cursosCargados, editarCurso } from './cursos.action';


export interface CursosState {
    cargando:boolean;
    cursos:Cursos[];
}

export const initialState:CursosState = {
    cargando:false,
    cursos:[]
} 

export const cursosReducer = createReducer(
  initialState,
  on(cargarCursos, (state) => {
    return {...state,cargando: true}
  }),
  on(cursosCargados,(state, {cursos})=>{
    return{...state, cargando:false, cursos:cursos}
  }),
  on(agregarCurso,(state, {curso})=>{
    return {...state, cargando:false ,curso : curso}
  }),
  on(editarCurso,(state, {curso})=>{
    return {...state, cargando:false ,curso : curso}
  }),
  on(borrarCurso,(state, {curso})=>{
    return {...state, cargando:false ,curso : curso}
  })
 
);