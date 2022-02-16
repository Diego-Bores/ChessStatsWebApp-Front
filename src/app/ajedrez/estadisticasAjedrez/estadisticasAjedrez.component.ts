import { Component, OnInit } from '@angular/core';
import marcadores from '../../files/marcadores.json';

@Component({
  selector: 'app-estadisticasAjedrez',
  templateUrl: './estadisticasAjedrez.component.html',
  styleUrls: ['./estadisticasAjedrez.component.css']
})
export class EstadisticasAjedrezComponent implements OnInit {
  public jugadores:{id:number, nombre:string, victorias:number}[] = marcadores;
  victoriasTotales=this.jugadores[0].victorias+this.jugadores[1].victorias;
  porcentajeDiego = (this.jugadores[0].victorias*100)/this.victoriasTotales;
  porcentajeJavier = (this.jugadores[1].victorias*100)/this.victoriasTotales;
  constructor() { }

  ngOnInit() {

  }

}
