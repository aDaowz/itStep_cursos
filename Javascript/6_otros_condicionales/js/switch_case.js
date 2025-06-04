console.log("%cArchivo de 6_otros_condicionales funcionando!", "color: green");

console.log('%c---------------------------\nSwitch Case\n---------------------------', 'color: green');
/*
--------------------------------------------------------------------------
SWITCH CASE
--------------------------------------------------------------------------

La estructrua de switch-case es una alternativa a if-else cuando se neesita comparar un valor con múltiples posibles opciones.

    Ejemplo de sintaxis:

        switch(valor){
            case valor_1:
                // Código que se ejecuta si la comparación es igual a valor_1;
                break;
            case valor_2:
                // Código que se ejecuta si la comparación es igual a valor_2;
                break;
            default:
                // Código que se ejecuta si ninguno de los casos coincidió.
        }

    Desglose de la estructura:

        switch      Palabra reservada que inicia la estructura de control de flujo para el switch case.
        (valor)     El valor el cuál será comparado con cada uno de los casos.
        case valor: Palabra reservada que define una posible coincidencia dentro del valor comparado.
        break       Palabra reservada para romper la secuencia de un código.
        default     Palabra reservada para ejecutar un código en caso de que no hubiera coincidencias.

Nota: Cuando un switch case carece de la instrucción break, y cuando está conscientemente manejado, equivale a una estructura OR. A esta acción se le llama Fallback.

--------------------------------------------------------------------------
*/

/*
Lunes       1   case
Martes      2   case
Miércoles   3   case
Jueves      4   case
Viernes     5   case
Sábado      6   case
Domingo     7   case
*/

let diaNumerico = 3;

switch(diaNumerico){
    case 1:
        console.log("El día seleccionado es: Lunes");
        break;
    case 2:
        console.log("El día seleccionado es: Martes");
        break;
    case 3:
        console.log("El día seleccionado es: Miércoles");
        break;
    case 4:
        console.log("El día seleccionado es: Jueves");
        break;
    case 5:
        console.log("El día seleccionado es: Viernes");
        break;
    case 6:
        console.log("El día seleccionado es: Sábado");
        break;
    case 7:
        console.log("El día seleccionado es: Domingo");
        break;
    default:
        console.log("Ese número no corresponde a ningún día");
}

console.log('%c---------------------------\nSwitch Case con Fallback\n---------------------------', 'color: green');

let fruta = "mora";
console.log("Fruta escrita: ", fruta);

// Separar frutas por colores:
switch(fruta){
    case "manzana": // Fallback
    case "fresa":   // Fallback
    case "cereza":  // Fallback
        console.log("Esta fruta es roja.");
        break;
    case "platano": // Fallback
    case "pina":    // Fallback
        console.log("Esta fruta es amarilla.");
        break;
    case "uva":     // Fallback
    case "mora":    // Fallback
        console.log("Esta fruta es morada.");
        break;
    default:
        console.log("Fruta desconocida.");
}


console.log('%c---------------------------\nCondicional Ternario\n---------------------------', 'color: green');
/*
--------------------------------------------------------------------------
CONDICIONAL TERNARIO
--------------------------------------------------------------------------

El Condicional Ternario es una alternativa compacta al uso de if-else cuando se necesita evaluar una condición de forma rápida y asignar un valor o ejecutar una expresión en base a ella.

Se llama ternario porque utiliza tres operandos:
- Una condición a evaluar.
- Una expresión que se ejecuta si la condición es verdadera.
- Una expresión que se ejecuta si la condición es falsa.

    Ejemplo de sintaxis:

        condición ? expresion_si_verdaero : expresion_si_falso;

    Desglose de la estructura:

        condición               Expresión a ser evaluada. Debe resolver a true o false.
        ?                       Operador que indica el inicio de la evaluación.
        expresion_si_verdadero  Código que se ejecuta si la condición es verdadera.
        :                       Separador que inidica el inicio del bloque de código en caso de que no se cumpla.
        expresion_si_falso      Código que se ejecuta si la condición es falso.

--------------------------------------------------------------------------
*/

let numero = 0;
let esPositivo = numero >= 0 ? "Es positivo" : "Es negativo" ;
console.log(esPositivo);