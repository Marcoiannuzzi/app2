import { Cursos } from "./Cursos";
import { Estudiante } from "./Estudiantes";

export interface inscripcion {
    id:number,
    curso:Cursos,
    Estudiante:Estudiante
}