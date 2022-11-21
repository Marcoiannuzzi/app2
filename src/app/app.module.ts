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
import { InicioComponent } from './shared/inicio/inicio.component';
import { InscripcionesModule } from './inscripciones/inscripciones.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ROOT_REDUCER } from './app.state';
import { EffectsModule } from '@ngrx/effects';


const routes: Routes = [ 
  { path: '' , redirectTo:'inicio', pathMatch:'full'},
  { path: 'login', component: LoginComponent }, 
  { path: 'inicio', component:InicioComponent},
  { path: 'alumnos', loadChildren:()=>import('./student/student.module').then(m=> m.StudentModule)},
  { path: 'cursos', loadChildren:()=>import('./cursos/cursos.module').then(m=> m.CursosModule)},
  { path: 'inscripciones', loadChildren: ()=>import ('./inscripciones/inscripciones.module').then(m => m.InscripcionesModule)},
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
    StudentModule,
    InscripcionesModule,
    StoreModule.forRoot(ROOT_REDUCER),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
