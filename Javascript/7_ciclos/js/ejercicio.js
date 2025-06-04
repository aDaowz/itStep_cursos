console.log("Ejercicio de ciclos");

// Resolución de ejercicio con Do-while

let opcion = 0;
let x = 0;
let y = 0;
let resultado = 0;

/*
    1. Sumar
    2. Restar
    3. Multiplicar
    4. Dividr.
    5. Salir
*/

do{
    opcion = Number(prompt("Elige una opción:\n\n1. Sumar.\n2. Restar.\n3. Multiplicar.\n4. Dividir. \n5. Salir.\n"));

    switch(opcion){
        case 1:
            x = Number(prompt("Ingresa el primer número:"));
            y = Number(prompt("Ingresa el segundo número:"));
            resultado = x + y;
            break;
        case 2:
            x = Number(prompt("Ingresa el primer número:"));
            y = Number(prompt("Ingresa el segundo número:"));
            resultado = x - y;
            break;
        case 3:
            x = Number(prompt("Ingresa el primer número:"));
            y = Number(prompt("Ingresa el segundo número:"));
            resultado = x * y;
            break;
        case 4:
            x = Number(prompt("Ingresa el primer número:"));
            y = Number(prompt("Ingresa el segundo número:"));
            resultado = y === 0 ? "Sin definir" : x / y;
            break;
        case 5:
            alert("Saliendo de la aplicación");
            break;
        default:
            alert("Esa opción no existe. Por favor ingresa una opción válida");
            break;
    }
    alert("El resultado es: " + resultado );
}while(opcion != 5 );
// Mientras no sea la salida, repite el código

