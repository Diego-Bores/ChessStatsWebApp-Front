import { Component, OnInit } from '@angular/core';
import marcadores from '../files/marcadores.json';

@Component({
  selector: 'app-ajedrez',
  templateUrl: './ajedrez.component.html',
  styleUrls: ['./ajedrez.component.css']
})

export class AjedrezComponent implements OnInit{
	public jugadores:{id:number, nombre:string, victorias:number}[] = marcadores;
	
	constructor() {}
	ngOnInit() {
	} 
}
