import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/Estudiantes/Estudiantes';
import { AlumnoService } from '../Servicios/alumno.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  
  ListarEstudantes: Estudiante[] = [
];
  

  constructor(private alumnoService:AlumnoService) { }

  ngOnInit(): void {

    this.ListarEstudantes = this.alumnoService.obtenerAlumnos();

  } 

  eliminarAlumno(id:number):void{
    this.alumnoService.eliminarAlumno(id);
  }

}
