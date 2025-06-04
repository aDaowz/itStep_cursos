console.log("Archivo variables_datatype.js funcionando!!!");

/*
--------------------------------------------------------------------------
VARIABLES
--------------------------------------------------------------------------

- En términos técnicos, una variable es un espacio de memoria alojado en cierta dirección de la memoria RAM, que sirve para alojar valores.
- En términos de sintaxis, una variable es una declaración que asocia un identificador (nombre) con un valor mediante una palabra clave ó reservada (var, let ó const).

PALABRAS RESERVADAS

Una palabra reservada es una palabra clave del lenguaje que tiene un dignificado especial y no puede usarse como identificador (nombre de variables, funciones, etc.)

ESTRUCTURA Y REGLAS DE NOMBRAMIENTO DE VARIABLES

La declaración de una variable consta de las siguientes partes:

        let ejemploVariable = 100;

    Desglosando la declaración:

        let                 Palabra reservada para declarar variables.
        ejemploVariable     Identificador con el que el desarrollador referencia un valor asociado a ella.
        =                   Operador de asignación.
        100                 El valor que se está asignando a "ejemploVariable".

Las reglas para el nombramiento de variables son las siguientes:

- No pueden iniciar con números (Ej: 1variable).
- No pueden contener espacios (Ej: mi variable).
- No pueden ser nombradas con palabras reservades (Ej. let let).
- No pueden contener caracteres especiales (Ej: mi@variable).
    - Los únicos caracteres especiales permitidos son "$" y "_".
- No pueden existir 2 o más variables con el mismo nombre.
- Se recomienda fuertemente no usar "var", "let", ni "const" como parte del nombre de las varaibles (Ej letVariable).

Anteriormente se declaraban las variables con la palabra "var". En javascript moderno, se recomienda dejar de usarlo.

--------------------------------------------------------------------------
*/

let ejemploVariable = 1;
console.log('El valor de ejemploVariable es: ' + ejemploVariable);

// La razón por la que una variable adopta ese nombre (nombre de variable), es porque el valor contenido puede mutar.
// Ejemplo:

ejemploVariable = 200;
console.log('El nuevo valor de ejemploVariable es: ' + ejemploVariable);

ejemploVariable = 10000;
console.log('El nuevo valor de ejemploVariable es: ' + ejemploVariable);

/*
--------------------------------------------------------------------------
CONSTANTES
--------------------------------------------------------------------------

Al igual que una variable, las constantes son también espacios de memoria alojados en la tarjeta RAM.
A diferencia de una variable, las constantes no pueden mutar los valores asociados a ella durante la ejecución.

En cuanto a sintaxis, las constantes se distinguen de las variables al asociar un identificador con la palabra reservada "const".

Las constntes siguen las mismas reglas y estructuras de nombramiento que las variables.

--------------------------------------------------------------------------
*/

const ejemploConstante = 17;
console.log("Valor de ejemploConstante: " + ejemploConstante);

/*
--------------------------------------------------------------------------
TIPOS DE DATO
--------------------------------------------------------------------------
Los tipos de datos en Javascript representan distintos tipos de categorías que una variable puede almacenar, que son las siguientes:

* Primitivos: Son los tipos de datos más básicos y se almacenan directamente en la variable.
    - Number: Números enteros y decimales (Ej: 1, 3.14).
    - String: Cadena de caracteres y textos (Ej. "Hola mundo").
    - Boolean: Valores lógicos (Ej. true, false).

* Compuestos: Son estructuras que pueden almacenar múltiples valores.
    - Object: Colección de pares de valores clave-valor,
    - Array: Lista ordenada de elementos.
    - Function: Código reutilizable encapsulado.

--------------------------------------------------------------------------
*/

console.log('------------------------------------------');

let numero = 50;        // Number
let texto = "Un texto"; // String
let booleano = true;    // Boolean

console.log('Valor de "numero": ' + numero);
console.log('Tipo de dato de "numero": ' + typeof numero);

console.log('Valor de "texto": ' + texto);
console.log('Tipo de dato de "texto": ' + typeof texto);

console.log('Valor de "booleano": ' + booleano);
console.log('Tipo de dato de "booleano": ' + typeof booleano);


console.log('------------------------------------------');

// Por su característica de variable, en Javascript está permitido inicializar una variable a un tipo de dato en específico y mutarla posteriormente a distintos tipos de dato

let x = 10;
console.log('Valor de x: ' + x);
console.log('Tipo de dato de x: ' + typeof x);

x = "Hola Mundo";
console.log('Valor de x: ' + x);
console.log('Tipo de dato de x: ' + typeof x);

x = true;
console.log('Valor de x: ' + x);
console.log('Tipo de dato de x: ' + typeof x);

/*
--------------------------------------------------------------------------
NOMENCLATURAS PARA DEFINICIÓN DE VARIABLES
--------------------------------------------------------------------------

Para evitar las prohibiciones de las reglas previamente mencionadas para el nombramiento de variables, por convención se suelen utilizar las siguientes nomenclaturas:

(Ejemplo Variable)

- Camel Case: ejemploVariable
- Pascal Case: EjemploVariable
- Snake case: ejemplo_variable
- Upper Snake Case: EJEMPLO_VARIABLE
- Notación húngara: strEjemploVariable

--------------------------------------------------------------------------
*/

let ejemploVariable2;
let EjemploVariable2;
let ejemplo_variable2;
let EJEMPLO_VARIABLE2;
let strEjemploVariable2;


console.log('------------------------------------------');
// NOTA: Javascript, al igual que todos los lenguajes de programación es "Case sensitive".

let Perro = "Perro con P mayúscula";
let perro = "Perro con p minúscula";

console.log(Perro);
console.log(perro);