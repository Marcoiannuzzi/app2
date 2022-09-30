import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formAlumno!:FormGroup;

  constructor( private fb:FormBuilder) {
    this.formAlumno = this.fb.group({
      nombre:new FormControl ('', [Validators.required, Validators.minLength(3)]),
      apellido: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]),
      curso: new FormControl('', [Validators.required ,Validators.minLength(2)]),
   });
  }

  ngOnInit(): void {
  }

  registrarAlumno():void{
  
    return console.log(this.formAlumno.value);

  }

}
