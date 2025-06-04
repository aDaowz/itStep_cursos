console.log("utils.js cargado");

let factor1 = 0;
let factor2 = 0;
let resultado = 0;
let operacion = null;
let estaResuelto = false;

const Operacion = {
    SUMA: "+",
    RESTA: "-",
    MULTIPLICACION: "*",
    DIVISION: "÷",
}

let sumar = (x, y) => x + y;
let restar = (x, y) => x - y;
let multiplicar = (x, y) => x * y;
let dividir = (x, y) => x / y;

let reiniciarValores = () => {
    factor1 = 0;
    factor2 = 0;
    resultado = 0;
    operacion = null;
    estaResuelto = false;
}