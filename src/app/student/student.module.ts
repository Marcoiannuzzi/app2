import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { StudentComponent } from './student.component';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { EditarComponent } from './editar/editar.component';
import { LoginGuardGuard } from '../login-guard.guard';

const routes: Routes = [ 
  { path: 'alumnos', component: StudentComponent, canActivate:[LoginGuardGuard] },
  { path: 'formulario', component: FormularioComponent, canActivate:[LoginGuardGuard]  },
  { path: 'editar', component:EditarComponent, canActivate:[LoginGuardGuard] }
]

@NgModule({
  declarations: [
    StudentComponent,
    FormularioComponent,
    EditarComponent
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
