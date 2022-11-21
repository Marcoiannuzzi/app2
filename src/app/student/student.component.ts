import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Estudiante } from 'src/app/shared/Interfaces/Estudiantes';
import { AppState } from '../app.state';
import { AlumnoService } from '../core/Servicios/alumno.service';
import { borrarEstudiante } from './state/estudiante.actions';
import { selecCargandoEstudiantes } from './state/estudiante.selectors';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  
  token?:any;
  listaEstudiantes$:Observable<Estudiante[]> = new Observable<Estudiante[]>()
  
  constructor(private alumnoService:AlumnoService, private router:Router, private store:Store<AppState>) { 
  }

  ngOnInit(): void {
    this.listaEstudiantes$ = this.store.select(selecCargandoEstudiantes);
    this.token = sessionStorage.getItem('token');
  } 

  agregarAlumno(){
    this.router.navigate(['/formulario'])
  }

  eliminarAlumno(estudiante:Estudiante):void{
    this.store.dispatch(borrarEstudiante({estudiante}))
    this.router.navigate(['/alumnos'])
  }

  editarAlumno(alumno:Estudiante){
    this.router.navigate(['/editar', alumno])
  }
  


}
