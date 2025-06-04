console.log("%cArchivo de 7_ciclos funcionando!", "color: green");

console.log('%c---------------------------\nCiclo While\n---------------------------', 'color: green');
/*
--------------------------------------------------------------------------
CICLO WHILE
--------------------------------------------------------------------------

El ciclo while (ciclo "mientras") permite ejecutar un bloque de código repetidamente mientras una condición sea verdaera.

En el caso del ciclo wihle, la condición se valúa antes de cada iteración. Si es false desde el inicio, el ciclo nunca se ejecutará.

    Ejemplo de instaxis de ciclo while (sólo es ejemplo e sintaxis).

        while(condición){
            // Código que se ejecuta mientras la condición sea verdaera
        }

    Desglose de la estructura:

        while           Palabra reverdada que define el inicio del ciclo while.
        (condición)     Expresión que se evalúa antes de cada iteración. Debe resolverse booleanamente.
        { }             Bloque de código que se repetirá mientras la condición sea verdadera.

NOTA: Es importante cuida de realizar ciclos que sean finitos, de lo contrario, un descuido puede provocar loops infinitos y provocar fallas en la aplicación, tales como que se trabe, etc.

Para tener control de la iteración y evitar caer en ciclos infinitos, es necesario apoyarse de una varaible de control llamada "contador".

--------------------------------------------------------------------------
*/

console.log('%c---------------------------\nCiclo While\n---------------------------', 'color: green');

/*
--------------------------------------------------------------------------
CONTADORES
--------------------------------------------------------------------------

Un contador es una variable utilizada dentro de un ciclo para llevar el control de cuántas veces se ha ejecutado el bloque de código.

Se usa principalmente en las estructuras de ciclos para asegurarse de que la iteración finalice en el momento adecuado.

La caractrística principal de los contadores es que son variables que incrementan su valor unidad por unidad y se usa el operador de incremento para esto.

    Ejemplo:

        Declaración de i:
            let i = 0;

        Incremento de i:
            i = i + 1;  // Incremento con sintaxis original
            i++;        // Incremento con "operador de incremnto"

También existe el operador de disminución que resta su valor por unidad (i--).

--------------------------------------------------------------------------
*/

let i = 0;
console.log("i = ", i); // 0

i++;
console.log("Se incrementa con operador de ++.");
console.log("i = ", i);

i--;
console.log("Se disminuye con operador de --.");
console.log("i = ", i);


console.log('%c---------------------------\nCiclo WHILE\n---------------------------', 'color: green');

console.log("Imprimir los números del 1 al 10");

// Estamos reutilizando el i declarado arriba.
i = 1;                  // 1. Variable de control (contador)

while(i <= 10){         // 2. La estructura while
    console.log(i);
    i++;                // 3. Incremento del contador
}

console.log('%c---------------------------\nCiclo DO-WHILE\n---------------------------', 'color: green');
/*
--------------------------------------------------------------------------
CICLO DO-WHILE
--------------------------------------------------------------------------

Al igual que el ciclo while, el do-while permite ejecutar un bloque de código repetidamente mientras su condción sea verdadera.

A diferencia de while, el ciclo do-while siempre se ejecuta al menos una vez, ya que la condición se evalúa después de ejecutar el bloque de código.

    Ejemplo de sintaxis (sólo es ejemplo e sintaxis)

        do{
            // Código que se ejecuta al menos una vez
        } while(condición);

    Desglose de la estructura:

        do              Palabra reesrvada que indica el inicio del ciclo do-while.
        { }             Bloque (scope) de código que debe ejecutrsae por cada iteración.
        while           Palabra reservada que precede a la condición a evaluar.
        (condición)     Expresión a evaluar. Si es true, se repite el proceso.

El ciclo do-while sigue los mismos lineamientos que el ciclo while en cuanto al control del contador.

--------------------------------------------------------------------------
*/

console.log("Imprimir los números del 1 al 10");

// Estamos reutilizando i que previamente fue declarado.
i = 1;

do{
    console.log(i);
    i++;
} while(i <= 10);

console.log('%c---------------------------\nAcumuladores\n---------------------------', 'color: green');

/*
--------------------------------------------------------------------------
ACUMULADORES
--------------------------------------------------------------------------

Un acumulador es una variable que se usa para almacenar y actualizar su valor múltiples veces.

A diferencia de un contador, que se increment por unidad (i++), el acumulador suma valores dinámicos en cada iteración.

    Ejemplo de acumulador:

        Declaración acumulador:

            let acumulador = 0;

        Acumulación:

            acumulador = acumulador + 5;
            acumulador += 5;

    El operador de asignación compuesta, aplica para todas las operaciones matemáticas. Ejemplo:

        +=      Equivale a: x = x + 1       Suma y asigna.
        -=      Equivale a: x = x - 1       Resta y asigna.
        *=      Equivale a: x = x * 1       Multiplica y asigna.
        /=      Equivale a: x = x / 1       Divide y asigna.

--------------------------------------------------------------------------
*/

let acumulador = 0;
console.log("acumulador = ", acumulador);

acumulador += 10;
acumulador = acumulador + 10;
console.log("Acumulador después del operador +=");
console.log("acumulador = ", acumulador);


console.log('%c---------------------------\nEjemplo de ciclo While con acumulador\n---------------------------', 'color: green');

let acum = 0;
while(acum <= 50){
    console.log(acum);
    acum += 5;
}

console.log('%c---------------------------\nCiclo For\n---------------------------', 'color: green');
/*
--------------------------------------------------------------------------
CICLO FOR
--------------------------------------------------------------------------

El ciclo For es una estructura de repitición que se utiliza cuando conocemos de antemano cuántas veces se debe repetir el código.

A diferencia del ciclo while y do-while, el for tiene una sintaxis más compacta que ya incluye el contador, la condición y el incremento en una sola línea.

    Ejemplo de sintaxis:

        for(contador; condición; incremento){
            // Código a ejecutar por cada iteración
        }

    Desglose de la estructura:

        for()               Palabra reservada para definir el inicio del ciclo
            contador;       Declaración e inicialización de la variable de control
            condición;      Expresión booleana que se evalúa antes de cada iteración
            incremento;     Se ejecuta al final de cada iteración para actualizar su valor
        { }                 Bloque de código que se ejecuta mientras la condición sea verdadera.

--------------------------------------------------------------------------
*/

console.log("Imprimir los números del 1 al 10 con for.")

for(let i = 1; i <= 10; i++){
    console.log(i);
}

console.log('%c---------------------------\nBreak\n---------------------------', 'color: green');
/*
--------------------------------------------------------------------------
ROMPIENDO CICLOS
--------------------------------------------------------------------------

En todos los lenguajes de programación, y en todos los ciclos es posible romper y cancelar el flujo de dicho ciclo a traés de la palabra reservada "break".

Break forzará a terminar y salir del ciclo en cuanto la palabra aprezca en el bloque de código.

--------------------------------------------------------------------------
*/

console.log("Imprimir sólo los 5 primeros números de 100.");

i = 1;

while(i <= 100){
    console.log(i);
    if(i === 5){
        break;
    }
    i++;
}

console.log('%c--------------\nBreak en for\n--------------', 'color: green');

for(let i = 1; i <= 100; i++){
    console.log(i);
    if(i === 5){
        break;
    }
}

console.log('%c---------------------------\nContinue\n---------------------------', 'color: green');
/*
--------------------------------------------------------------------------
CONTINUE
--------------------------------------------------------------------------

La instrucción continue se usa para saltar una iteración específica de un ciclo sin terminarlo.
En lugar de salir completamente del ciclo (como el break), continue simplemente omite el código restante en la iteración actual y pasa a la siguiente iteración.

--------------------------------------------------------------------------
*/

console.log("Imprimir sólo números pares hasta el 100.");

// El símbolo de % de llama "Módulo" -> "Modulus"

let num = 1;

while(num <= 100){
    num++;
    if(num % 2 !== 0){ // ¿Es impar?
        continue;
    }
    console.log(num);
}

/*
************************** EJERCICIO:
Mostrar un menú al usuario para que ingrese una opción para realizar las siguientes operaicones (agregar salir):

- Suma
- Resta
- Multiplicación
- División
- Salir

Una vez que el usuario seleccione una operación, la app debe solicitarle 2 números para poder operarlos.

Mostrar el resultado con un alert.

La aplicación debe detenerse en cuanto el usuario deicda salirse.

*/