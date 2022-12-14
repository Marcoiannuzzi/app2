import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { AlumnoService } from 'src/app/core/Servicios/alumno.service';
import { selecCargandoCursos } from 'src/app/cursos/state/cursos.selector';
import { Cursos } from 'src/app/shared/Interfaces/Cursos';
import { Estudiante } from 'src/app/shared/Interfaces/Estudiantes';
import { agregarEstudiante } from '../state/estudiante.actions';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  listaCursos$:Observable<Cursos[]> = new Observable<Cursos[]>()
  formAlumno!:FormGroup;

  constructor( private fb:FormBuilder, private alumnoService:AlumnoService, private route:Router, private store:Store<AppState>) {
    this.formAlumno = this.fb.group({
      dni:new FormControl ('', [Validators.required, Validators.minLength(3)]),
      nombre:new FormControl ('', [Validators.required, Validators.minLength(3)]),
      apellido: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]),
      curso: new FormControl('', [Validators.required ,Validators.minLength(2)]),
   });
  }

  ngOnInit(): void {
    this.listaCursos$ = this.store.select(selecCargandoCursos);
  }

  registrarAlumno():void{
    let estudiante:Estudiante={
      id:this.formAlumno.get('dni')?.value,
      nombre:this.formAlumno.get('nombre')?.value,
      apellido:this.formAlumno.get('apellido')?.value,
      email:this.formAlumno.get('email')?.value,
      curso:this.formAlumno.get('curso')?.value,
    }
    this.store.dispatch(agregarEstudiante({estudiante}));
    this.route.navigate(['/alumnos']);
  }

}
