import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Estudiante } from 'src/app/shared/Interfaces/Estudiantes';
import { AlumnoService } from '../core/Servicios/alumno.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  
  token?:any;
  listaEstudiantes$!:BehaviorSubject<Estudiante[]>
  
  constructor(private alumnoService:AlumnoService, private router:Router) { 
  }

  ngOnInit(): void {
    this.alumnoService.obtenerAlumnos().subscribe({
      next:((data)=>this.listaEstudiantes$=new BehaviorSubject<Estudiante[]>(data))
    });
    this.token = sessionStorage.getItem('token');
  } 

  agregarAlumno(){
    this.router.navigate(['/formulario'])
    this.alumnoService.obtenerAlumnos().subscribe((data) => this.listaEstudiantes$.next(data))
  }

  eliminarAlumno(id:number):void{
    this.alumnoService.eliminarAlumno(id).subscribe(()=> alert(`El alumno con el dni ${id} se ha borrado correctamente`));
    this.alumnoService.obtenerAlumnos().subscribe((data) => this.listaEstudiantes$.next(data))
    this.router.navigate(['/alumnos'])
  }

  editarAlumno(alumno:Estudiante){
    this.router.navigate(['/editar', alumno])
    this.alumnoService.obtenerAlumnos().subscribe((data) => this.listaEstudiantes$.next(data))
  }
  



}
