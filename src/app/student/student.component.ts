import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/Estudiantes/Estudiantes';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  
  ListarEstudantes: Estudiante[] = [{
    id: 1,
    nombre: 'Joaquin',
    curso: 'Angular'
  },
  {
    id: 2,
    nombre: 'Maria',
    curso: 'React'
  },
  {
    id: 3,
    nombre: 'José',
    curso: 'Vue'
  },
  {
    id: 4,
    nombre: 'Pedro',
    curso: '.Net'
  },
  {
    id: 5,
    nombre: 'Juan',
    curso: 'Java'
  },
  {
    id: 6,
    nombre: 'Gimena',
    curso: 'Python'
  },
  {
    id: 7,
    nombre: 'Luis',
    curso: 'C#'
  },
  {
    id: 8,
    nombre: 'Miguel',
    curso: 'Angular'
  }
];
  

  constructor() { }

  ngOnInit(): void {
  }

}
