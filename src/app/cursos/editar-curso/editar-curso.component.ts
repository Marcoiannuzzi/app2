import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from 'src/app/core/Servicios/curso.service';
import { Cursos } from 'src/app/shared/Interfaces/Cursos';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit {

  cursoForm!:FormGroup;

  constructor(private fb:FormBuilder, private router:Router, private aRoute: ActivatedRoute, private cursoService: CursoService) { }

  ngOnInit(): void {
    this.aRoute.paramMap.subscribe((data)=>{
      this.cursoForm = this.fb.group({
        comision: [parseInt( data.get('comision') || "0"), [Validators.required]],
        nombre:[data.get('nombre'), [Validators.required]],
        profesor: [data.get('profesor'), [Validators.required]],
        fechaInicio: [data.get('fechaInicio'), [Validators.required]],
        fechaFin: [data.get('fechaFin'), [Validators.required]],
        inscripcionAbierta: [data.get('inscripcionAbierta'), [Validators.required]],
     });
    })
  }

  editarCurso(){
    let cursoEditado: Cursos={
      comision:this.cursoForm.value.comision,
      nombre:this.cursoForm.value.nombre,
      profesor:this.cursoForm.value.profesor,
      comienzo:this.cursoForm.value.fechaInicio,
      finalizacion:this.cursoForm.value.fechaFin,
      inscripcionAbierta:this.cursoForm.value.inscripcionAbierta
    }
    this.cursoService.actualizarCurso(cursoEditado).subscribe();
    this.router.navigate(['/cursos/cursos-ver']);
  }
}
