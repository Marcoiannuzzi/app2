import { Component, OnInit } from '@angular/core';
import { Cursos } from '../shared/Interfaces/Cursos';
import { CursoService } from '../core/Servicios/curso.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  
  listaCursos: Cursos[] = [];

  constructor(private cursoService:CursoService, private router: Router) {

   }

  ngOnInit(): void {
   this.cursoService.obtenerCursos().subscribe({
    next:((data)=>this.listaCursos = data)
   })
  }

  eliminar(id:number):void{
    this.cursoService.eliminarCurso(id).subscribe(()=>{
      alert("Eliminado Correctamente!")
      this.cursoService.obtenerCursos().subscribe({
        next:((data)=>this.listaCursos = data)
       })
    })
  }

  editar(curso:Cursos){
    this.router.navigate(['/cursos/editar-curso', curso]);

  }

}
