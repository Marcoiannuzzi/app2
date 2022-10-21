import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { StudentComponent } from './student.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
  { path: 'alumnos', component: StudentComponent },
]

@NgModule({
  declarations: [
    StudentComponent
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
