console.log('%cArchivo de 4_condicionales funcionando', 'color: green');

/*
--------------------------------------------------------------------------
CONDICIONALES
--------------------------------------------------------------------------

Las condicionales if-else son estructuras de control de flujo y son esencialmente instrucciones que determinan cómo debe ejecutarse un programa según ciertas condiciones.

Para poder tomar una decisión, las estructuras if-else requieren de una resolución lógica booleana (falso o verdadero).

La sintaxis de los condicionales es la siguiente:

        if(condición){
            // Código que se ejecuta si la condción es verdadera
        }
        else{
            // código que se ejecuta si la condición es falsa
        }
        
    Desglose de la estructura

        if              Palabra reservada para iniciar la comparación.
        (condición)     Expresión a ser evaluada. Esta expresión debe resolverse de manera boolena.
        else            Palabra resverada cuando la condición no se cumple.

Para que pueda efectuarse una resolución booleana, los lenguajes de programación se valen de diferentes operadores para la evaluación.

TIPOS DE OPERADORES

Los operadores usados para la evaluación de condiciones son los siguientes:

<       Operador de "menor que". Devuelve true si el valor de la izquierda es menor que el de la derecha.
>       Operador de "mayor que". Devuelve true si el valor de la izquierda es mayor que el de la derecha.
==      Operador de igualdad débil. Compara valores sin importar el dipo de dato (coerción implícita). Devuleve true si ambos valores son iguales.
===     Operador de igualdad estricta. Compara valores y tipos de datos (sin coerción implícita). Devuelve true si ambos valores son iguales en cuanto a valor y tipo de dato.
!==     Operador de desigualdad débil. Devuelve verdadero si ambos valores son desiguales.
!===    Operador de desigualdad estricta. Devuelve verdaero si ambos valores son desiguales en cuant o a valor y tipo de dato.

--------------------------------------------------------------------------
*/

let izquierda = 8;
let derecha = 2;

//     8     >    2
if(izquierda > derecha){
    console.log("El valor de la izquierda SÍ es mayor que el de la derecha.");
}
else{
    console.log("El valor de la izquierda NO es mayor que el de la derecha.");
}

console.log('%c---------------------------\nIgualdad\n---------------------------', 'color: green');

let valor1 = "100"; // String
let valor2 = 100; // Number

console.log("valor1: ", valor1);
console.log("valor2: ", valor2);

if(valor1 == valor2){ // Exactamente igual
    console.log("(==) Ambos valores son iguales");
}
else{
    console.log("(==) Los valores no son iguales");
}

if(valor1 === valor2){ // Exactamente igual
    console.log("(===) Ambos valores son iguales");
}
else{
    console.log("(===) Los valores no son iguales");
}


console.log('%c---------------------------\nOtros operadores\n---------------------------', 'color: green');

let edad = 40;
// "Mayor de edad"
// "Menor de edad"

if(edad > 18){
    console.log("SÍ es mayor de edad.");
}
else if(edad === 18){
    console.log("SÍ es mayor de edad.");
}
else{
    console.log("NO es mayor de edad");
}

/*
--------------------------------------------------------------------------
OPERADORES MAYOR IGUAL QUE, MENOR IGUAL QUE
--------------------------------------------------------------------------

Además de los operadores mayor que (>) y menor que (<), existen sus versiones extendidas que también evalúan y comparan con igualdad.

>=      Mayor o igual que       Devuelve true si el valor de la izquierda es mayor o igual al de la derecha.
<=      Menor o igual que       Devuelve true si el valor de la izquierda es menor o igual al de la derecha.

--------------------------------------------------------------------------
*/

edad = 18;

if(edad >= 18){
    console.log("SÍ es mayor de edad.");
}
else{
    console.log("NO es mayor de edad");
}

console.log('%c---------------------------\nDesigualdad\n---------------------------', 'color: green');

let x = 2; // undefined
let y = 10;

if(x !== undefined){ // diferente de
    console.log(`${ x } + ${ y } = ${ x + y }`);
}
else{
    console.log("No se puede operar con valores vacíos.");
}

console.log('%c---------------------------\nExpresiones\n---------------------------', 'color: green');

/*
--------------------------------------------------------------------------
EXPRESIONES
--------------------------------------------------------------------------

Una expresión es una unidad de código que resulta en un valor.
Ejemplo:

1 + 1   // Resulta en 2

De esta misma manera, una operación lógica también es considerada como una expresión.
Ejemplo:

edad = 21   // Asignación de valor
edad >= 18  // Resulta en True

Las expresiones suelen ser asignadas a variables.
Ejemplo:

let esMayorEdad = edad >= 18;

--------------------------------------------------------------------------
*/

edad = 5;
let esMayorEdad = edad >= 18;

if(esMayorEdad){
    console.log("SÍ es mayor de edad");
}
else{
    console.log("NO es mayor de edad.");
}

let numero1 = 10;
let numero2 = 20;
let resultado = numero1 + numero2;
console.log(resultado);
