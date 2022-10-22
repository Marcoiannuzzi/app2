import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CursosComponent } from './cursos.component';
import { MaterialModule } from '../material.module';
import { RouterModule, Routes } from '@angular/router';
import { CursoFormComponent } from './curso-form/curso-form.component';
import { EditarCursoComponent } from './editar-curso/editar-curso.component';

const routes: Routes = [ 
  { path: 'cursos', component: CursosComponent },
  { path: 'cursos-form', component:CursoFormComponent},
  { path:'editar-curso', component:EditarCursoComponent}
]

@NgModule({
  declarations: [
    CursosComponent,
    CursoFormComponent,
    EditarCursoComponent,
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
