import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuardGuard } from '../login-guard.guard';
import { ListaInscripcionesComponent } from './lista-inscripciones.component';

const routes: Routes = [
  {path:'inscripciones', canActivate:[LoginGuardGuard], children:[
    {path:'lista', component:ListaInscripcionesComponent}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionesRoutingModule { }
