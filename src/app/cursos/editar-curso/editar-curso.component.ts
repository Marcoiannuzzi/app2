import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { CursoService } from 'src/app/core/Servicios/curso.service';
import { Cursos } from 'src/app/shared/Interfaces/Cursos';
import { editarCurso } from '../state/cursos.action';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit {

  cursoForm!:FormGroup;

  constructor(private fb:FormBuilder, private router:Router, private aRoute: ActivatedRoute, private cursoService: CursoService, private store:Store<AppState>) { }

  ngOnInit(): void {
    this.aRoute.paramMap.subscribe((data)=>{
      console.log(data)
      this.cursoForm = this.fb.group({
        id: [parseInt( data.get('id') || "0"), [Validators.required]],
        nombre:[data.get('nombre'), [Validators.required]],
        profesor: [data.get('profesor'), [Validators.required]],
        fechaInicio: [new Date(data.get('fechaInicio')||"0"), [Validators.required]],
        fechaFin: [new Date(data.get('fechaFin')||"0"), [Validators.required]],
        inscripcionAbierta: [data.get('inscripcionAbierta'), [Validators.required]],
     });
     
    })
  }

  editarCurso(){
    let curso: Cursos={
      id:this.cursoForm.value.id,
      nombre:this.cursoForm.value.nombre,
      profesor:this.cursoForm.value.profesor,
      comienzo:this.cursoForm.value.fechaInicio,
      finalizacion:this.cursoForm.value.fechaFin,
      inscripcionAbierta:this.cursoForm.value.inscripcionAbierta
    }
    this.store.dispatch(editarCurso({curso}))
    this.router.navigate(['/cursos/cursos-ver']);
  }
}
