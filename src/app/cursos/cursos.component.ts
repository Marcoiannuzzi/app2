import { Component, OnInit } from '@angular/core';
import { Cursos } from '../Interfaces/Cursos';
import { CursoService } from '../Servicios/curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  listaCursos! : Cursos[];
  dataSource!: Cursos[];


  displayedColumns: string[] = ['comision','nombre',  'profesor', 'comienzo', 'finalizacion', 'inscripcionAbierta', 'acciones'];

  constructor(private cursoService:CursoService) { }

  ngOnInit(): void {
    this.listaCursos = this.cursoService.obtenerCursos();
    this.dataSource=this.listaCursos;
  }

}
