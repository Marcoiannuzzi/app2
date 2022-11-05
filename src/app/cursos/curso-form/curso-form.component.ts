import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CursoService } from 'src/app/core/Servicios/curso.service';
import { Cursos } from 'src/app/shared/Interfaces/Cursos';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.css']
})
export class CursoFormComponent implements OnInit {

  cursoForm! : FormGroup;

  constructor(private fb:FormBuilder, private router:Router, private cursoService:CursoService) {
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

  crearCurso():void{
    console.log("funciona");
    let nuevoCurso:Cursos
    if(this.cursoForm.get('inscripcionAbierta')?.value == 'true'){
      nuevoCurso={
        comision:this.cursoForm.get('comision')?.value,
        nombre:this.cursoForm.get('nombre')?.value,
        profesor:this.cursoForm.get('profesor')?.value,
        comienzo:this.cursoForm.get('fechaInicio')?.value,
        finalizacion:this.cursoForm.get('fechaFin')?.value,
        inscripcionAbierta:true,
      }
    }else{
      nuevoCurso={
          comision:this.cursoForm.get('comision')?.value,
          nombre:this.cursoForm.get('nombre')?.value,
          profesor:this.cursoForm.get('profesor')?.value,
          comienzo:this.cursoForm.get('fechaInicio')?.value,
          finalizacion:this.cursoForm.get('fechaFin')?.value,
          inscripcionAbierta:false,
      }
    }
    
    this.cursoService.agregarCurso(nuevoCurso).subscribe((data)=>console.log(data));
    this.router.navigate(['/cursos/cursos-ver']);
  }

}
