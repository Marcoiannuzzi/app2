import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { AlumnoService } from 'src/app/core/Servicios/alumno.service';
import { selecCargandoCursos } from 'src/app/cursos/state/cursos.selector';
import { Cursos } from 'src/app/shared/Interfaces/Cursos';
import { Estudiante } from 'src/app/shared/Interfaces/Estudiantes';
import { editarEstudiante } from '../state/estudiante.actions';



@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  listaCursos$:Observable<Cursos[]> = new Observable<Cursos[]>()
  formAlumno!:FormGroup;

  constructor( private fb:FormBuilder, private aRoute:ActivatedRoute, private router:Router, private store:Store<AppState>) {

  }

  ngOnInit(): void {
    this.listaCursos$ = this.store.select(selecCargandoCursos);
    this.aRoute.paramMap.subscribe((data)=>{
      this.formAlumno = this.fb.group({
        dni: [parseInt( data.get('id') || "0"), [Validators.required, Validators.minLength(3)]],
        nombre:[data.get('nombre'), [Validators.required, Validators.minLength(3)]],
        apellido: [data.get('apellido'), [Validators.required, Validators.minLength(3)]],
        email: [data.get('email'), [Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]],
        curso: [data.get('curso'), [Validators.required ,Validators.minLength(2)]]      
     });
    })
   } 

   editarAlumno(){
    let estudiante : Estudiante ={
      id:this.formAlumno.value.dni,
      nombre:this.formAlumno.value.nombre,
      apellido:this.formAlumno.value.apellido,
      email:this.formAlumno.value.email,
      curso:this.formAlumno.value.curso
    }
    this.store.dispatch(editarEstudiante({estudiante}))
    this.router.navigate(['/alumnos'])
    
   }
}

