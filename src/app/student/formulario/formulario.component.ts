import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlumnoService } from 'src/app/core/Servicios/alumno.service';
import { Estudiante } from 'src/app/shared/Interfaces/Estudiantes';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formAlumno!:FormGroup;

  constructor( private fb:FormBuilder, private alimnoService:AlumnoService) {
    this.formAlumno = this.fb.group({
      dni:new FormControl ('', [Validators.required, Validators.minLength(3)]),
      nombre:new FormControl ('', [Validators.required, Validators.minLength(3)]),
      apellido: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]),
      curso: new FormControl('', [Validators.required ,Validators.minLength(2)]),
   });
  }

  ngOnInit(): void {
  }

  registrarAlumno():void{
    let nuevoAlumno:Estudiante={
      id:this.formAlumno.get('dni')?.value,
      nombre:this.formAlumno.get('nombre')?.value,
      apellido:this.formAlumno.get('apellido')?.value,
      email:this.formAlumno.get('email')?.value,
      curso:this.formAlumno.get('curso')?.value,
    }
    this.alimnoService.agregarAlumno(nuevoAlumno);
    return console.log(this.formAlumno.value);
  }

}
