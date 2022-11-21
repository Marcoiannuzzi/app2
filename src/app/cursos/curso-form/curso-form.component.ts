import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { CursoService } from 'src/app/core/Servicios/curso.service';
import { Cursos } from 'src/app/shared/Interfaces/Cursos';
import { agregarCurso } from '../state/cursos.action';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.css']
})
export class CursoFormComponent implements OnInit {

  cursoForm! : FormGroup;

  constructor(private fb:FormBuilder, private router:Router, private cursoService:CursoService, private store:Store<AppState>) {
    this.cursoForm=this.fb.group({
      id:['',[Validators.required]],
      nombre:['',[Validators.required]],
      profesor:['',[Validators.required]],
      fechaInicio:['',[Validators.required]],
      fechaFin:['',[Validators.required]],
      inscripcionAbierta:['']
    })
   }

  ngOnInit(): void {
  }

  crearCurso():void{
    console.log("funciona");
    let curso:Cursos
    if(this.cursoForm.get('inscripcionAbierta')?.value == 'true'){
      curso={
        id:this.cursoForm.get('id')?.value,
        nombre:this.cursoForm.get('nombre')?.value,
        profesor:this.cursoForm.get('profesor')?.value,
        comienzo:this.cursoForm.get('fechaInicio')?.value,
        finalizacion:this.cursoForm.get('fechaFin')?.value,
        inscripcionAbierta:true,
      }
    }else{
      curso={
          id:this.cursoForm.get('id')?.value,
          nombre:this.cursoForm.get('nombre')?.value,
          profesor:this.cursoForm.get('profesor')?.value,
          comienzo:this.cursoForm.get('fechaInicio')?.value,
          finalizacion:this.cursoForm.get('fechaFin')?.value,
          inscripcionAbierta:false,
      }
    }
    this.store.dispatch(agregarCurso({curso}))
    this.router.navigate(['/cursos/cursos-ver']);
  }

}
