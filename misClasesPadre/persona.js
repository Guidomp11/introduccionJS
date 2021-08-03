class Persona {
    constructor(){
        this.nombre = 'Nombre';
        this.apellido = 'Apellido';
        this.edad = 20;
    }

    getNombre = () => this.nombre;
    getApellido = () => this.apellido;
    cumpleAnos = (num) => this.edad + num;
}

module.exports =  Persona; //Exporto la clase para poder ser importada en otro archivo