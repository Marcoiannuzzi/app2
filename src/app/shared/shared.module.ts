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
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [ 
  { path: '' , redirectTo:'inicio', pathMatch:'full'},
  { path: 'inicio', component:InicioComponent},
  // { path : '**', component: }
 ];


@NgModule({
  declarations: [
    InicioComponent,
    NavbarComponent,
    BooleanoATextoPipe,
    AgregarApellidoPipe,
    EstiloTitulosDirective,
    FooterComponent
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
    FooterComponent
  ]
})
export class SharedModule { }
