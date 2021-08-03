//#region VARIABLES
var nombre = 'Pepe';
let apellido = 'Perez';
const dni = 456123789;
let boolean = true;
let myArray = [];
let otroArray = ['Pepe', 22, false];
const myObjects = {
    name: 'Jose',
    apellido: 'Perez',
    edad: 21
};
let indefinido = undefined;
let nulo = null;
let notANumber = NaN;//not a number
//#endregion

//#region ARRAYS
myArray.push('Jose');//agregando un elemento al final del array
myArray.push('Pepe');
myArray.push('Ramiro');
myArray.push('Lucas');
myArray.pop();//elimina el ultimo elemento del array
console.log(myArray);

for(let i = 0; i < myArray.length; i++){

}
myArray.map(function(elemento, index){//metodo de array
    console.log(elemento + '  ' + index)
});

myArray.map((parametro1, parametro2) => {
    console.log(parametro1 + '  ' + parametro2)
})

const arrayFiltrado = myArray.filter(function(elemento, index){//filtro el array
    return elemento != 'Pepe';//if ternario
});
//#endregion

//#region OBJETOS LITERALES
myObjects.paisOrigen = 'Argentina';//agrego props a un objeto

for(let elemento in myObjects){//Recorre objetos literales
    console.log(elemento + ' ' + myObjects[elemento]);
}
//#endregion

//#region FUNCIONES
function miFuncion(){
    console.log('estoy en mi funcion');
}
miFuncion();

const suma = (parametro1, parametro2) => {
    return parametro1 + parametro2;
}
const multiplicacion = (num1, num2) => num1 * num2;

console.log(suma(5,5));
console.log(multiplicacion(5,'manzana'));//NaN
//#endregion

//#region CONDICIONALES
let status = false;
if(status){
    console.log(true);
}else{
    console.log(false);
}
switch(status){
    case true:
        console.log(true);
        break;
    case false://Junto casos
    default:
        console.log(false);
        break;
}

//IF TERNARIO devuelve un valor
let resultado = (5 > 4) ? 'Es mayor' : 'Es menor';//primera parte representa verdadero : segunda parte representa false
console.log(resultado);

let resultadoDeFuncion = () => null;
const resultadoFuncion = resultadoDeFuncion() || [];//Si es nulo, asigna otro valor.

resultadoFuncion.push('Pepe');
console.log(resultadoFuncion);
//#endregion