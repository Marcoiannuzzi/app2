import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';
import { InicioComponent } from './inicio/inicio.component';
import { StudentComponent } from './student/student.component';
import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [ 
  { path: '', component: LoginComponent }, 
  { path: 'inicio', component:LoginComponent},
  { path: 'alumnos', component: InicioComponent },
  { path: 'formulario', component: FormularioComponent },
  {path:'cursos', component: CursosComponent} ];


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    FormularioComponent,
    InicioComponent,
    CursosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
