import { Cursos } from "../Interfaces/Cursos";

export const listaCursos:Cursos[] = [{
    comision:30221,
    nombre:'Angular',
    profesor:'Abner',
    comienzo: new Date(2022,11,10),
    finalizacion: new Date(2023,1,30),
    inscripcionAbierta:true
},
{
    comision:30222,
    nombre:'VueJS',
    profesor:'Diego',
    comienzo: new Date(2023,2,10),
    finalizacion: new Date(2023,4,30),
    inscripcionAbierta:true
},
{
    comision:30223,
    nombre:'React',
    profesor:'Maria',
    comienzo: new Date(2022,9,10),
    finalizacion: new Date(2022,11,30),
    inscripcionAbierta:false
},
{
    comision:30224,
    nombre:'Angular',
    profesor:'Abner',
    comienzo: new Date(2022,8,10),
    finalizacion: new Date(2022,10,30),
    inscripcionAbierta:false
},
{
    comision:30225,
    nombre:'React',
    profesor:'Maria',
    comienzo: new Date(2023,0,10),
    finalizacion: new Date(2023,2,30),
    inscripcionAbierta:true
},

]