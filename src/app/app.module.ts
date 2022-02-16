import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AjedrezComponent } from './ajedrez/ajedrez.component';
import { FormularioPartidaComponent } from './ajedrez/formularioPartida/formularioPartida.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EstadisticasAjedrezComponent } from './ajedrez/estadisticasAjedrez/estadisticasAjedrez.component';





@NgModule({
  declarations: [
    AppComponent,
    AjedrezComponent,
    FormularioPartidaComponent,
    EstadisticasAjedrezComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
