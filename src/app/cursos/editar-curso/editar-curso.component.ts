import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit {

  cursoForm:FormGroup;

  constructor(private fb:FormBuilder, private router:Router) {
    this.cursoForm=this.fb.group({
      comision:['',[Validators.required]],
      nombre:['',[Validators.required]],
      profesor:['',[Validators.required]],
      fechaInicio:['',[Validators.required]],
      fechaFin:['',[Validators.required]],
      inscripcionAbierta:['']
    })
   }

  ngOnInit(): void {
  }

  editarCurso(){
    
  }

}
