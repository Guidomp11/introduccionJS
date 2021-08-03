const Persona = require('../misClasesPadre/persona');

class Thiago extends Persona{//extends = herencia
    constructor(){
        super();
        this.nombre = 'thiago'
    }
}

const thiagoClase = new Thiago();//creo la instancia

console.log(thiagoClase.cumpleAnos(1));