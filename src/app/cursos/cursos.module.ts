import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CursosComponent } from './cursos.component';
import { MaterialModule } from '../material.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
  { path: 'cursos', component: CursosComponent },
]

@NgModule({
  declarations: [
    CursosComponent,
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
export class CursosModule { }
