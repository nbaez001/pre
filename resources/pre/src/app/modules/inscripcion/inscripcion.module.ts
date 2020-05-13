import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';

import { InscripcionRoutingModule } from './inscripcion-routing.module';
import { RegistroComponent } from './components/registro/registro.component';
import { MaterialModule } from '../material.module';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { UbigeoService } from './services/ubigeo.service';
import { RegistroService } from './services/registro.service';


@NgModule({
  declarations: [
    RegistroComponent
  ],
  imports: [
    CommonModule,
    InscripcionRoutingModule,
    MaterialModule,
  ],
  providers: [
    DatePipe,
    DecimalPipe,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },//DATEPICKER MUESTRA LA FECHA EN FORMATO DD/MM/YYYY
    UbigeoService,
    RegistroService,
  ]
})
export class InscripcionModule { }
