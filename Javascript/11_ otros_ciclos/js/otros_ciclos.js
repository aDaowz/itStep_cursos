console.log('%cArchivo de 11_otros_ciclos funcionando!', 'color: green');

console.log('%c-------------------------------------\nOtros ciclos\n-------------------------------------', 'color: green');
/*
--------------------------------------------------------------------
NUEVAS FORMAS DE CICLOS
--------------------------------------------------------------------

Con el paso del tiempo, Javascript ha evolucionado para ofrecer formas más legibles y expresivas de recorrer estructuras de datos.

Estas formas alternativas son las siguientes:

- "for ... of": Para recorrer los valores de estructuras iterables como arreglos o strings.
- "for ... in": Para recorrer propiedades o atributos de un objeto.
- "foreach": Para aplicar una función a cada elemento de un arreglo.

Estas estructuras modernas ofrecen una forma más clara y concisa de recorrer datos haciendo que el código sea más legible.

--------------------------------------------------------------------
*/


console.log('%c-------------------------------------\nFor ... of\n-------------------------------------', 'color: green');
/*
--------------------------------------------------------------------
FOR ... OF
--------------------------------------------------------------------

El ciclo "for ... of" permite recorrer estructuras iterables como arreglos y cadena de textos.

Este ciclo accede directamente a los valores del iterable (no a sus índices o claves).

    Ejemplo de sintaxis:

        for(let valor of iterable){
            // código que usa el valor actual
        }

    Desglose:

        for                     Palabra reservada para iniciar el ciclo.
        (valor of iterable)
            - valor:            Variable temporal que representa el elemento actual.
            - iterable:         La estrcutra en donde se va a hacer el recorrido.
        { }                     Bloque de código a ejecutar por cada iteración.

--------------------------------------------------------------------
*/

let frutas = ["manzana", "pera", "fresa"];

for(let fruta of frutas){
    console.log("Fruta: ", fruta);
}

console.log('%c-------------------------------------\nFor ... in\n-------------------------------------', 'color: green');
/*
--------------------------------------------------------------------
FOR ... IN
--------------------------------------------------------------------

El ciclo "for ... in" permite recorrer los atributos enumerables de un objeto (o los índices de un arreglo).

Este ciclo accede a las claves y no a los valores directamente.

    Ejemplo de sintaxis:

        for(let clave in objeto){
            // El código que se debe ejecutar al usar el atributo
        }

    Desglose de la estructura:

        for                 Palabra reservada que indicia el inicio del ciclo
        (clave in objeto)
            clave           Represnta el atributo actual del objeto.
            objeto          La estructura en donde se va a hacer el recorrido.
        { }                 Bloque de código que se ejecuta por cada atributo.

--------------------------------------------------------------------
*/
let objeto = {
    nombre: "Mi objeto",
    tipo: "Objeto",
    elementos: 3,
}

for(let atributo in objeto){
    console.log(`Atributo: ${ atributo }, valor ${ objeto[atributo] }`);
}

console.log('%c-------------------------------------\nforEach\n-------------------------------------', 'color: green');
/*
--------------------------------------------------------------------
FOREACH
--------------------------------------------------------------------

Es un método específico de los arreglos que permite ejecutar una funcíon por cada uno de sus elementos.

A diferencia de los ciclos tradicionales, forEach se basa en funciones.

    Ejemplo de sintaxis:

        arreglo.forEach(function(elemento){
            // código que se ejecuta por cada elemento.
        });

    Desglose de estructura:

        arreglo         Arreglo sobre el cual se aplica el forEach.
        forEach()       Método que recorre el elemento.
        function()      Función anónima que define qué hacer con cada elemento. Debe ser pasado como parámetro al forEach

Nota: Aunque es muy utilizado, forEach no puede ser interrumpido con break o continue como en los ciclos tradicionales.

--------------------------------------------------------------------
*/

let numeros = [10, 33, 2];

numeros.forEach(function(numero){
    numero += 100;
    console.log("Numéro: ", numero);
});