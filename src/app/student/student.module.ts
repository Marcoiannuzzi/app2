import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { StudentComponent } from './student.component';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [ 
  { path: 'alumnos', component: StudentComponent },
  { path: 'formulario', component: FormularioComponent }
]

@NgModule({
  declarations: [
    StudentComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class StudentModule { }
