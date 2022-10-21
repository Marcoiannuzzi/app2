import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EstiloTitulosDirective } from './directives/estilo-titulos.directive';
import { AgregarApellidoPipe } from './Pipes/agregar-apellido.pipe';
import { BooleanoATextoPipe } from './Pipes/booleano-atexto.pipe';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [ 
  { path: 'inicio', component:InicioComponent},
 ];


@NgModule({
  declarations: [
    InicioComponent,
    NavbarComponent,
    BooleanoATextoPipe,
    AgregarApellidoPipe,
    EstiloTitulosDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ],
  exports: [
    NavbarComponent,
    BooleanoATextoPipe,
    AgregarApellidoPipe,
    EstiloTitulosDirective,
    RouterModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
