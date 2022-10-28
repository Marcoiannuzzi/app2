import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudiante } from 'src/app/shared/Interfaces/Estudiantes';
import { AlumnoService } from '../core/Servicios/alumno.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  
  listaEstudantes: Estudiante[] = [];
  
  constructor(private alumnoService:AlumnoService, private router:Router) { 
  }

  ngOnInit(): void {
    this.alumnoService.obtenerAlumnos().subscribe({
      next:((data)=>this.listaEstudantes = data)
    });
  } 

  eliminarAlumno(id:number):void{
    this.alumnoService.eliminarAlumno(id);
  }



}
