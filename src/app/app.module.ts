import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';
import { InicioComponent } from './inicio/inicio.component';
import { StudentComponent } from './student/student.component';
import { CursosComponent } from './cursos/cursos.component';

const routes: Routes = [ 
  { path: '', component: InicioComponent }, 
  { path: 'inicio', component: InicioComponent },
  { path: 'formulario', component: FormularioComponent },
  {path:'cursos', component: CursosComponent} ];


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    FormularioComponent,
    InicioComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
