import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SharedModule } from './shared/shared.module';
import { CursosModule } from './cursos/cursos.module';
import { StudentModule } from './student/student.module';
import { PaginaNoEncontradaComponent } from './shared/pagina-no-encontrada/pagina-no-encontrada.component';

const routes: Routes = [ 
  { path: '' , redirectTo:'inicio', pathMatch:'full'},
  { path: 'login', component: LoginComponent }, 
  { path: 'inicio', loadChildren:()=>import('./shared/shared.module').then(m=> m.SharedModule)},
  { path: 'alumnos', loadChildren:()=>import('./student/student.module').then(m=> m.StudentModule)},
  { path: 'cursos', loadChildren:()=>import('./cursos/cursos.module').then(m=> m.CursosModule)},
  { path : '**', component:PaginaNoEncontradaComponent }
  ]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    CursosModule,
    StudentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
