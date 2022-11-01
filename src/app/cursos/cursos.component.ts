import { Component, OnInit } from '@angular/core';
import { Cursos } from '../shared/Interfaces/Cursos';
import { CursoService } from '../core/Servicios/curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  
  listaCursos: Cursos[] = [];

  constructor(private cursoService:CursoService) {

   }

  ngOnInit(): void {
   this.cursoService.obtenerCursos().subscribe({
    next:((data)=>this.listaCursos = data)
   })
  }

  eliminarCurso(comision:number){
    this.cursoService.eliminarCurso(comision);    
  }

}
