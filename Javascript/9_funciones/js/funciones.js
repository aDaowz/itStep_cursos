console.log('%cArchivo de 9_funciones funcionando!', 'color: green');
console.log('%c-------------------------------------\nFunciones\n-------------------------------------', 'color: green');
/*
--------------------------------------------------------------------
FUNCIONES
--------------------------------------------------------------------

Una función es un bloque de código reutilizable que realiza una tarea específica. Dicho bloque de código es un fragmento encapsulado que contiene su propio contexto.

Las funciones permiten la definición de una rutina una única vez, y su uso múltiples veces, lo que ayuda a organizar mejor el código y evitar código repetido.

    Ejemplo de sintaxis de una función básica (sin parámetros).

        function nombre_de_funcion(){
            // Código que se ejecuta cuando se invoca la función.
        }

    Desglose de la estructura:

        function            Palabra reservada para definir una función
        nombre_de_funcion   Identificador para la función (su nombre).
        ()                  Parte esencial de las funciones. Sirve para enlistar y definir los parámetros.
        {}                  Bloque de código que será ejecutado cuando la función sea invocada.

--------------------------------------------------------------------
*/

function miFuncion(){ // Esto es la definición de la función
    console.log("Esto es una función");
}

miFuncion(); // Mandar llamar, invocar la función

console.log('%c-------------------------------------\nParámetros e invocación\n-------------------------------------', 'color: green');
/*
--------------------------------------------------------------------
PARÁMETROS E INVOCACIÓN
--------------------------------------------------------------------

Las funciones pueden recibir datos desde su exterior mediante parámetros (también llamados argumentos).  Estos parámetros, al ser recibidos, pueden ser utilizados por las funciones para su procesamiento.

Internamente los parámetros son tratados como si fueran variables declaradas dentro del propio contexto de la función.

    Ejemplo de definición con parámetros:

        function funcionParametros(param1, param2){
            console.log("Valor de param1: ", param1);
            console.log("Valor de param2: ", param2);
        }

    Desglose de sintaxis:

        function            Inicio de la definición de función
        funcionParametros   Nombre de la función
        ()                  Agrupamiento de parámetros.
            param1          Nombre del primer parámetro
            param2          Nombre del segundo parámetro
        {}                  Bloque de código

Si una función no requiere parámetros, los paréntesis se dejan vacíos.

Es importante notar que cuando una función es definida, dicho código no se pone en ejecución sino hasta que sea invocada.

    Ejemplo de invocación:

        funcionParametros("Hola", "mundo");

    Desglose de sintaxis:

        funcionParametros   Nombre de la función que se está invocando
        ()                  Agrupamiento de parámetros.
            "Hola"          Paso de información hacia el primer parámetro
            "mundo"         Paso de información hacia el segundo parámetro

Las funciones pueden recibir cualquier tipo de dato a través de sus parámetros, tanto datos primtitivos como compuestos.

--------------------------------------------------------------------
*/

function funcionParametros(param1, param2){
    console.log(param1 + " " + param2);
}

funcionParametros("Hola", "mundo");
funcionParametros("Hola", "Antonio");
funcionParametros(2, 100);
funcionParametros(true, false);

let variableX = 5;
let variableY = "Javascript";
funcionParametros(variableX, variableY);


console.log('%c-------------------------------------\nFunciones Void  y retorno de valores\n-------------------------------------', 'color: green');
/*
--------------------------------------------------------------------
FUNCIONES VOID Y RETORNO DE VALORES
--------------------------------------------------------------------

Una función puede devolver un valor utilizando la palabra reservada "return".

Ese valor devuelto tiene como principal objetivo poder ser cargado en memoria a través de una variable que lo contenga

    Ejemplo:

        function sumar(x, y){
            let resultado = x + y;
            return resultado;
        }

        let resultado = sumar(10, 5);

        console.log("Resultado: ", resultado);

En todos los lenguajes de programación está soportado que el return pueda procesar expresiones; esto nos permite ahorrar líneas de código. De esta manera, el código explicado previamente puedes implificarse de lasiguiente manera:

    function sumar(x, y){
        return x + y;
    }

Las funciones pueden devolver cualquier tipo de dato, tanto datos primitivos como compuestos.

Nota: Los retornos de las funciones sólo devuelven un único valor por función.

--------------------------------------------------------------------
*/

function sumar(x, y){
    return x + y;
}

// let result = sumar(5, 8);
// console.log(result);

console.log(sumar(5, 8));
console.log(sumar(100, 200));
console.log(sumar(-5, 10));


console.log('%c-------------------------------------\nSalida anticipada de una función\n-------------------------------------', 'color: green');
/*
--------------------------------------------------------------------
SALIDA ANTICIPADA DE UNA FUNCIÓN
--------------------------------------------------------------------

Además de devolver un valor, la palabra reservada "return" también sirve para finalizar de forma anticipada la ejecución de una función.

Esto significa que si el interpretador o el compilador encuentra un "return" en una función, el resto del código dentro de dicha función ya no se ejecutará.

Esta técnica (llamada "short circuit validation") puede ser útil para validar condiciones y detener la función si no se cumplen ciertos requisitos.

    Ejemplo:

        function solicitarINE(edad){
            if(edad < 18){
                console.log("No puedes solicitar tu INE.");
                return;
            }

            console.log("¡Bienvenido! Entrega tus documentos para solicitar tu INE");
        }

    Desglose de comportamiento:

        - Si la edad es menor a 18, se muestra el mensaje de que no es mayor de edad y se detiene la función.
        - Si la edad es 18 o más, continúa ejecutándose el resto de la función.

--------------------------------------------------------------------
*/

function solicitarINE(edad){
    if(edad < 18){
        console.log("No puedes solicitar tu INE.");
        return;
    }

    console.log("¡Bienvenido! Entrega tus documentos para solicitar tu INE.");
}

solicitarINE(15);
solicitarINE(21);

console.log('%c-------------------------------------\nFunciones anónimas\n-------------------------------------', 'color: green');
/*
--------------------------------------------------------------------
FUNCIONES ANÓNIMAS
--------------------------------------------------------------------
Las funciones también pueden declararse sin nombre y asignarse directamente a una variable.

Estas funciones se conocen como "funciones anónimas" y una de las razones por las que este fenómeno existe es para asignar la lógica de ejecución directamente a una variable. 

Cuando a una variable le es asgignada una función anónima, dicha variable se usa como si esta fuera la función.

    Ejemplo

        let restar = function(x, y){
            return x - y;
        }
        
        restar(10, 2);
--------------------------------------------------------------------
*/

let restar = function(x, y){
    return x - y;
}

// restar(2,1);
console.log("Invocación de función restar: ", restar(2, 1));
console.log("Invocación de función restar: ", restar(10, 2));

console.log('%c-------------------------------------\nArrow functions\n-------------------------------------', 'color: green');
/*
--------------------------------------------------------------------
ARROW FUNCTIONS
--------------------------------------------------------------------

Los Arrow Functions (funciones flecha) son una forma más corta y nueva de definir funciones anónimas. Se introdujeron a partir de ES6 en 2015.

Se definen con el operador =>

    Ejemplo:

        let saludar = () => {
            console.log("Hola");
        }

    Su invocación sigue la misma sintaxis tradicional.

        saludar();

NOTA: Los arrow functions no tienen su propio "this", por lo que no es conveniente declarar arrow functions dentro de objetos.

--------------------------------------------------------------------
*/

let saludar = () => {
    console.log("Hola");
}

saludar();

/*
Para simplificar aún más la sintaxis de una función, los arrow functions tienen distintas variantes de definición según sus parámetros y tipo de return.
*/

// Arrow function sin parámetros:
let arrow1 = () =>{
    console.log("----- Arrow function sin parámetros");
    console.log("\tlet arrow1 = () =>{ ... }");
}
arrow1();

// Arrow function con un sólo parámetro:
let arrow2 = parametro => {
    console.log("----- Arrow function con un sólo parámetro");
    console.log("\tlet arrow2 = parametro => { ... }");
    console.log("\tparametro: ", parametro);
}
arrow2("Hola");

// Arrow function con múltiples parámetros:
let arrow3 = (param1, param2) => {
    console.log("----- Arrow function con múltiples parámetros");
    console.log("\tlet arrow3 = (param1, param2) => { ... }");
    console.log("\tparam1: ", param1);
    console.log("\tparam2: ", param2);
}
arrow3("Hola", "mundo");

// Cuando un Arrow Function puede ser expresado con una sola línea de código, puede omitrise el return:
console.log("----- Cuando un Arrow Function puede ser expresado con una sola línea de código, puede omitrise el return");

let arrow4 = (param1, param2) => `${ param1 } ${ param2 }`;

console.log("\t" + arrow4("Hola", "mundo"));

console.log('%c-------------------------------------\nEncapsulamiento\n-------------------------------------', 'color: green');
/*
--------------------------------------------------------------------
ENCAPSULAMIENTO
--------------------------------------------------------------------

En el contexto de las funciones, encapsulamiento significa que  todo lo que se declara dentro de una función (variables, operaciones, etc.) queda limitado a su interior solamente.

Dicho de otro modo, las variables declaradas dentro de una función no pueden ser accedidas desde afuera de ellas. Este aislamiento ayuda a evitar conflictos de nombres y mantiene el código más organizado.

Este comportamiento se conoce como Scope local (ámbito local).

    Ejemplo:

        function saludar2(){
            let mensaje = "Hola mundo!";
            console.log(mensaje);
        }

        saludar();
        console.log(mensaje); // Esto marca un error

    Desglose:

        - "mensaje" sólo existe dentro de la función "saludar2".
        - Fuera de la función, esa variable no es reconocida por el lector.

--------------------------------------------------------------------
*/

function saludar2(){
    let mensaje = "Hola mundo.";
    console.log(mensaje);
}

saludar2();
// console.log(mensaje); // Marca error

console.log('%c-------------------------------------\nPaso de parámetros por valor y por referencia\n-------------------------------------', 'color: green');
/*
--------------------------------------------------------------------
PASO DE PARÁMETROS POR VALOR Y POR REFERENCIA
--------------------------------------------------------------------

Cuando se invoca una función y se le pasa información a través de parámetros, ese valor puede ser entregado de dos maneras:

1. Por valor:
    - Ocurre con tipos de datos primitivos como number, string, boolean.
    - El paso de información ocurre como una copia del valor original.
    - Los cambios ocurridos dentro de la función no afectan al valor de la variable original.

2. Por referencia:
    - Ocurre con tipos de datos compuestos como: arrays, objetos.
    - Se pasa una referencia al valor original (es decir, no se pasa una copia).
    - Los cambios hechos dentro de la función sí afectan al valor original.
--------------------------------------------------------------------
*/

console.log("%c-------------- Paso por valor", "color: green");

let numeroOriginal = 10;

function cambiarNumero(numero){
    numero = 100;
    console.log("numero dentro de la función: ", numero);
}

console.log("Antes de la función (numeroOriginal): ", numeroOriginal);
cambiarNumero(numeroOriginal);
console.log("Después de la función (numeroOriginal): ", numeroOriginal);


console.log("%c-------------- Paso por referencia", "color: green");

let frutas = ["manzana", "pera", "fresa"];

console.log("frutas antes de ser modificado: ", frutas);

function cambiarArreglo(arreglo){
    arreglo[0] = "lechuga";
    arreglo[1] = "zanahoria";
    arreglo[2] = "pepino";
    console.log("frutas dentro de la función: ", arreglo);
}

cambiarArreglo(frutas);
console.log("frutas después de ser modificado: ", frutas);

/* 

Reutilizar y refactorizar el ejercicio de la calculadora.
Mejorar sus procedimientos usando funciones.

*/