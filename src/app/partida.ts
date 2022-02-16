export interface Partida {   
        idJugagorBlancas: number,
        idJugagorNegras: number,
        resultado: number, //0 ganan blancas, 1 ganan negras
        fecha?: Date,
}
export class Partida {   
    constructor(
        public idJugagorBlancas: number,
        public idJugagorNegras: number,
        public resultado: number, //0 ganan blancas, 1 ganan negras
        public fecha?: Date,
    ){}
}
