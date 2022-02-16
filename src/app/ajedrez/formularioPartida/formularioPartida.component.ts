import { Component } from '@angular/core';
import { Partida } from '../../partida';

@Component({
  selector: 'app-formularioPartida',
  templateUrl: './formularioPartida.component.html',
  styleUrls: ['./formularioPartida.component.css']
})
export class FormularioPartidaComponent{
public nombreJugadores = ['Javier', 'Diego'];
  model:Partida = new Partida(0, 1, 0);

  submitted = false;

  onSubmit() { this.submitted = true; }

  onSave() {
  
    
  }
}
