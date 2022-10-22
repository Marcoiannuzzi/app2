import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlumnoService } from 'src/app/core/Servicios/alumno.service';
import { Estudiante } from 'src/app/shared/Interfaces/Estudiantes';



@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  formAlumno!:FormGroup;


  constructor( private fb:FormBuilder, private aRoute:ActivatedRoute) {
    this.formAlumno = this.fb.group({
      dni:new FormControl ('', [Validators.required, Validators.minLength(3)]),
      nombre:new FormControl ('', [Validators.required, Validators.minLength(3)]),
      apellido: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]),
      curso: new FormControl('', [Validators.required ,Validators.minLength(2)]),
   });
  }

  ngOnInit(): void {
    const id =this.aRoute.snapshot.paramMap.get('id');
    console.log(id);
  
  }

  editarAlumno(){
    
  }
}
