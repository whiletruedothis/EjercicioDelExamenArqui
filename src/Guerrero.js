import  Arco  from './Armas/Arco.js';
import  Espada  from './Armas/Espada.js';

class Guerro {

    constructor(nombre,tipo){
        this.nombre = nombre;
        this.tipo = tipo;
        this.arma = crearArma();
        this.atque = 0;
    }

    crearArma(){
        switch(this.tipo){
            case 'infanteria':
                return new Espada();
            case 'arquero':
                return new Arco();
        }
    }

}