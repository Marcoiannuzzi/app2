import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/shared/Interfaces/Estudiantes';
import { AlumnoService } from '../core/Servicios/alumno.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  
  listaEstudantes: Estudiante[] = [
];
  
  constructor(private alumnoService:AlumnoService) { }

  ngOnInit(): void {
    this.listaEstudantes = this.alumnoService.obtenerAlumnos();
  } 

  eliminarAlumno(id:number):void{
    this.alumnoService.eliminarAlumno(id);
  }

}
