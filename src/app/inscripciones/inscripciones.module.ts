import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { ListaInscripcionesComponent } from './lista-inscripciones.component';
import { SharedModule } from '../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { InscripcionesEffects } from './state/inscripciones.effects';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    ListaInscripcionesComponent
  ],
  imports: [
    CommonModule,
    InscripcionesRoutingModule,
    SharedModule,
    MaterialModule,
    EffectsModule.forFeature([InscripcionesEffects]),
  ]
})
export class InscripcionesModule { }
