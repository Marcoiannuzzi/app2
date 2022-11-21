import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { ListaInscripcionesComponent } from './lista-inscripciones.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ListaInscripcionesComponent
  ],
  imports: [
    CommonModule,
    InscripcionesRoutingModule,
    SharedModule,
 
  ]
})
export class InscripcionesModule { }
