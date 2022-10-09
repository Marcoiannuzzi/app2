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
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [ 
  { path: '', component: LoginComponent }, 
  { path: 'inicio', component:InicioComponent},
  { path: 'alumnos', component: StudentComponent },
  { path: 'formulario', component: FormularioComponent },
  { path:'cursos', component: CursosComponent} ];


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    FormularioComponent,
    InicioComponent,
    CursosComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
