console.log('%c-------------------------------------\nEjercicio\n-------------------------------------', 'color: green');
console.log("Ejercicio funcionando!!");

/*
// Parte 1
Realizar una aplicación que permita lo siguiente:

1. Ingresar N cantidad de números y guardarlos en un arreglo.
    - Debe desplegar un menú con 2 opciones: uno para ingresar datos y otro para salir de la aplicación.
2. Validar que el usuario ingrese una opción válida del menú.
3. Validar que el arreglo contenga al menos 2 valores.
4. Una vez finalizado el ingreso de datos, mostrar en ventana el número total de elementos ingresados.
5. Desplegar en consola los elementos ingresados.
    - (Opcional) Debe desplegarse horizontalmente y en un solo mensaje de consola.

*/

let numeros = [];
let dato = 0;
let opcion = 0;

while(opcion != 2 ){
    opcion = Number(prompt("Selecciona una opción del menú:\n\n1. Ingresar número.\n2. Salir de la app."));

    switch(opcion){
        case 1: // Ingresar número
            dato = Number(prompt("Ingresar número:"));
            numeros.push(dato);
            break;
        case 2: // Salir de la app
            if(numeros.length < 2){ // Verificando si el arreglo contien al menos 2 elementos
                alert("El arreglo debe contener al menos 2 valores ingresados!\n\nPor favor vuelva a intentar.");
                opcion = 0; // Forzar a que la app no se salga si no se cumple la condición
            }
            else{ // Salida de la aplicación
                alert(`Registro de números finalizado.\n\nSe registraron ${ numeros.length } elementos`);
            }
            break;
        default:
            alert("Seleccionar una opción válida del menú.");
    }
}

let datosIngresados = "";
let total = 0;

for(let i = 0; i < numeros.length; i++){
    datosIngresados += `${ numeros[i] } `;
    total += numeros[i];
}

console.log(datosIngresados);
console.log(`Suma total de números: ${ total }`);

// Algoritmo de ordenamiento por el método
// de la burbuja (Bubble sorting)

for(let i = 0; i < numeros.length; i++){
    for(let j = i; j < numeros.length; j++){
        if(numeros[j] < numeros[i]){ // Lo que está del lado derecho es menor que el lado izquierdo?
            let burbuja = numeros[i];
            numeros[i] = numeros[j];
            numeros[j] = burbuja;
        }
    }
}

let datosOrdenados = "";
for(let i = 0; i < numeros.length; i++){
    datosOrdenados += `${ numeros[i] } `;
}
console.log(datosOrdenados);

