console.log('%cArchivo de 9_arreglos funcionando!', 'color: green');

console.log('%c-------------------------------------\nArreglos\n-------------------------------------', 'color: green');
/*
--------------------------------------------------------------------
ARREGLOS (ARRAYS)
--------------------------------------------------------------------

Un arreglo (array) es una estructura de datos que permite almacenar múltiples valores en una sola variable. Estos valores son almacenados a manera de lista y el orden en el que fueron agregados juega un papel crucial.

Cada elemento del arreglo está separado por comas y se encuentra dentro de corchetes [ ].

Los arreglos son útiles cuando se necesita agrupar información relacionada bajo un solo identificador.

    Ejemplo de sintaxis:

        let frutas = ['manzana', 'plátano', 'fresa'];

    Desglose de estructura

        let frutas      Delaración del nombre del arreglo
        =               Operador para asignar los elementos que serán contenidos en el arreglo.
        []              Sintaxis para agrupar los elementos contenidos en el arreglo.

Los elementos del arreglo pueden ser accedidos a través del nombre del arrego y entre corchetes indicando su índice (posición), en donde el inicio del arreglo siempre será desde 0.

Ejemplo:

        console.log(frutas[0]); // 'manzana'
        console.log(frutas[1]); // 'plátano'
        console.log(frutas[2]); // 'fresa'

La declaración de los arreglos siguen las mismas reglas que el nombramiento de las bariables.

--------------------------------------------------------------------
*/

let frutas = ['manzana', 'plátano', 'fresa'];

console.log(frutas);
console.log('Elemento 1:', frutas[0]);
console.log('Elemento 2:', frutas[1]);
console.log('Elemento 3:', frutas[2]);

console.log('%c-------------------------------------\nTipos de datos en arreglos\n-------------------------------------', 'color: green');

/*
--------------------------------------------------------------------
TIPOS DE DATO EN ARREGLOS
--------------------------------------------------------------------

A diferencia de otros lenguajes de programación, en Javascript es posible almacenar diferentes valores con distintos tipos de datos entre ellos

Los valores almacenados dentro del arreglo no se limitan únicamente a tipos de datos primitivos sino también a tipos de datos compuestos

--------------------------------------------------------------------
*/

//                     0         1    2                 3
let multidatos = ["Hola Mundo", 57, true, ["otro arreglo", 2, false]];

console.log('Tyepof elemento 1: ', typeof multidatos[0], multidatos[0]); // Hola mundo
console.log('Tyepof elemento 2: ', typeof multidatos[1], multidatos[1]); // 57
console.log('Tyepof elemento 3: ', typeof multidatos[2], multidatos[2]); // true
console.log('Tyepof elemento 4: ', typeof multidatos[3], multidatos[3]); // ['otro arreglo', 2, false]
console.log('Tyepof elemento 4 - 0: ', typeof multidatos[3][0], multidatos[3][0]); // otro arreglo

console.log('%c-------------------------------------\nModificar valores\n-------------------------------------', 'color: green');
/*
--------------------------------------------------------------------
MODIFICAR VALORES
--------------------------------------------------------------------

En cualquier lenguaje de programación es posible modificar el contenido de un arreglo al acceder a un índice específico y reasignándole un nuevo valor.

Ejemplo
                  0          1         2
    frutas = ['manzana', 'plátano', 'fresa'];

    frutas[2] = "pera";

--------------------------------------------------------------------
*/

console.log("Contenido de frutas antes de ser modificado: ", frutas);

frutas[2] = "pera";

console.log("Contenido de frutas después de ser modificado: ", frutas);

console.log('%c-------------------------------------\nAgregar elementos\n-------------------------------------', 'color: green');
/*
--------------------------------------------------------------------
AGREGAR ELEMENTOS
--------------------------------------------------------------------

Para agregar elementos a un arreglo se usan las funciones nativas de push o unshift.

El push agrega un nuevo elemento al final del arreglo.
El unshift agrega un nuevo elemento al inicio del arreglo.

    Ejemplo

        nombre_de_arreglo.push(nuevo_elemento);
        nombre_de_arreglo.unshift(nuevo_elemento);

--------------------------------------------------------------------
*/
console.log("Frutas antes del push: ", frutas);
frutas.push("fresa");
console.log("Frutas después del push: ", frutas);

console.log("Frutas antes del unshift: ", frutas);
frutas.unshift("uva");
console.log("Frutas después del unshift: ", frutas);

console.log('%c-------------------------------------\nEliminar elementos\n-------------------------------------', 'color: green');
/*
--------------------------------------------------------------------
ELIMINAR ELEMENTOS
--------------------------------------------------------------------

Para eliminar elementos se usan las funciones nativas de pop y shift.

El pop elimina el último elemento del arreglo.
El shift elimina el primer elemento del arreglo.

    Ejemplo

        nombre_de_arreglo.pop();
        nombre_de_arreglo.shift();

--------------------------------------------------------------------
*/

console.log("Frutas antes del pop: ", frutas);
frutas.pop();
console.log("Frutas después del pop: ", frutas);

console.log("Frutas antes del shift: ", frutas);
frutas.shift();
console.log("Frutas después del shift: ", frutas);

// ------------------------------------
// Sólo para devlover los elementos que antes tenía.

console.log("%cDevolviendo las frutas.", "color: green");
frutas.push("fresa");
frutas.unshift("uva");
console.log(frutas);

console.log('%c-------------------------------------\nLectura de arreglo\n-------------------------------------', 'color: green');
/*
--------------------------------------------------------------------
LECTURA DE UN ARREGLO
--------------------------------------------------------------------

A la lectura de un arreglo se le denomina "recorrer un arreglo". Típicamente se suele usar el ciclo for para esto, aunque también es posible recorrerlos con cualquier estructura iterativa.

En Javascript la inserción de datos en un arreglo es altamente flexible y "on-the-fly". Por esta razón, con frecuencia pueden existir escenarios en los que no podemos conocer de antemano el límite o longitud iterable de un arreglo.

Para resolver esa situación, es común utilizar la propiedad ".length" para conocer la cantidad de elementos almacenados y así poder establecer el límite de iteración.

    Ejemplo

        let miArreglo = ["Texto", 10, true, "100"];

    En este escenario, "miArreglo" contiene 4 elementos. Esto lo sabemos porque ya conocemos su contenido. Sin embargo, si queremos obtener ese valor de forma automática (sin verificar su contenido), se usa el .lenght.

        console.log(miArreglo.lenght); // nos trae 4

    De esta forma, "miArreglo.length" nos devuelve el número entero que representa la longitud actual del arreglo.

--------------------------------------------------------------------
*/

let miArreglo = ["Texto", 10, true, "100"];
console.log(miArreglo);
console.log("Longitud de miArreglo: ", miArreglo.length);

console.log("--------------- Lectura del arreglo:");

for(let i = 0; i < miArreglo.length; i++){
    console.log(`Índice[${ i }]: ${ miArreglo[i] }`);
}

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