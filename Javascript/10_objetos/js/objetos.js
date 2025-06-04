console.log('%cArchivo de 10_objetos funcionando!', 'color: green');

console.log('%c-------------------------------------\nObjetos\n-------------------------------------', 'color: green');
/*
--------------------------------------------------------------------
OBJETOS
--------------------------------------------------------------------

Un objeto es una estructura que permite agrupar un conjunto de datos relacionados entre sí bajo una misma entidad.

A diferencia de un arreglo (que usa índices numéricos), un objeto utiliza clave-valor (key-value). Cada par de valores debe estar separado por una coma.

Estos clave-valor son conocidos como propiedades, atributos, miembres, etc. del objeto.

También, a diferencia de un arreglo, el orden en que se agregan los atributos en un objeto carecen de importancia.

    Ejemplo de sintaxis:

        let nombre_de_objeto = {
            atributo1: "Nombre atributo",
            atributo2: "Nombre atributo 2",
        }

    Desglose de estructura:

        let nombre_de_objeto    Identidicador para referir al objeto (su nombre)
        { ... }                 Las llaves que contienen los atributos del objeto.
         clave: valor           (atributo1: "Nombre atributo") Cada atributo tiene un nombre (clave) y un valor asociado (valor)

Los valores asociados al objeto pueden ser de cualquie tipo, sean datos primitivos o compuestos.

--------------------------------------------------------------------
*/

let manzana = {
    nombre: "Manzana",                      // String
    color: "Rojo",                          // String
    precio: 12.5,                           // Number
    disponible: true,                       // Boolean
    beneficios: ["Fibra", "Vitaminas"],     // Array
    origen: {                               // Object
        pais: "México",
        region: "Tijuana"
    },
}

// console.log("Objeto manzana: ", manzana);

// JSON.parse(objString)
// Convierte un string a un objeto real.
// El parámetro que recibe debe ser un objet en forma de string.

// JSON.stringify(obj);
// Convierte el contenido de un objeto a una cadena de caracteres.
// El parámetro que recibe debe ser un objeto.

console.log(JSON.parse(JSON.stringify(manzana)));

/*
--------------------------------------------------------------------
TRAILING COMMA (Coma final)
--------------------------------------------------------------------

En Javascript es válido y considerado buena práctica dejar una coma al final del último elemento de un objeto ó arreglo. Esto se conoce como "trailing comma".

Esta práctica es opcional, pero se recomienda usarla por claridad y para evitar errores al modificar el objeto posteriormente.

--------------------------------------------------------------------
*/

console.log('%c-------------------------------------\nAcceder a atributos\n-------------------------------------', 'color: green');
/*
--------------------------------------------------------------------
ACCEDER A ATRIBUTOS
--------------------------------------------------------------------

Existend dos formas principales de acceder a los valores (atributos) de un objeto:

    1. Notación de punto (igual que en la programación orientada a objetos).
    2. Notación de corchetes (notación única de Javasstric).

Ejemplos:

    manzana.nombre      // "Manzana"
    manzana['precio']   // 12.5

--------------------------------------------------------------------
*/

console.log("manzana.nombre: ", manzana.nombre);
console.log("manzana.['nombre']: ", manzana['nombre']);
console.log("Beneficio 1: ", manzana.beneficios[0]);
console.log("País de origen: ", manzana.origen.pais);

console.log('%c-------------------------------------\nObjetos dentro de un arreglo\n-------------------------------------', 'color: green');
/*
--------------------------------------------------------------------
OBJETOS DENTRO DE UN ARREGLO
--------------------------------------------------------------------

Cuando un objeto está dentro de un arreglo, dicho objeto no tiene un nombre asignado directamente; entonces es un objeto anónimo.

En estos casos, para acceder a sus atributos es necesario referenciar nombre del arreglo, y su índice para obtener el objeto, y después se accede a sus atributos con la notación de progamación orientada a objetos.

    Ejemplo:

        let librero = [
            {
                titulo: "Caperucita Roja",
                genero: "Cuento",
            },
            {
                titulo: "El Principito",
                genero: "Fábula",
            },
        ];

--------------------------------------------------------------------
*/

let librero = [
    {
        titulo: "Caperucita Roja",
        genero: "Cuento",
    },
    {
        titulo: "El Principito",
        genero: "Fábula",
    },
];

console.log("Libro 1: ", librero[0].titulo);
console.log("Libro 2: ", librero[1].titulo);

console.log('%c-------------------------------------\nModificar atributos\n-------------------------------------', 'color: green');
/*
--------------------------------------------------------------------
MODIFICAR ATRIBUTOS
--------------------------------------------------------------------

Al igual que con las variables, es posible modificar los valores de un objetos accediendo y reasignando un nuevo valor.

Ejemplo

    manzana.color = "Verde";

--------------------------------------------------------------------
*/

console.log("Color antes de ser modificado: ", manzana.color);

manzana.color = "Verde";

console.log("Color después de ser modificado: ", manzana.color);

console.log('%c-------------------------------------\nAgregar nuevos atributos\n-------------------------------------', 'color: green');
/*
--------------------------------------------------------------------
AGREGAR NUEVOS ATRIUTOS
--------------------------------------------------------------------

Los objetos en javascript son dinámicos, por lo que es posible gregar nuevos atributos incluso después de haber sido creados.

Ejemplo:

    manzana.temporada = "Todo el año";
    console.log("Objeto actualizado: ", manzana);

--------------------------------------------------------------------
*/

manzana.temporada = "Todo el año";

// console.log("Manzana después de ser actualizado: ", manzana);
console.log(JSON.parse(JSON.stringify(manzana)));

console.log('%c-------------------------------------\nEliminar Atributos\n-------------------------------------', 'color: green');
/*
--------------------------------------------------------------------
ELIMINAR ATRIBUTOS
--------------------------------------------------------------------

Para eliminar una propiedad de un objeto se usa la palabra reservada: "delete".

Ejemplo:

    delete manzana.temporada;
--------------------------------------------------------------------
*/

delete manzana.temporada;

console.log(JSON.parse(JSON.stringify(manzana)));

console.log('%c-------------------------------------\nShorthand property names\n-------------------------------------', 'color: green');
/*
--------------------------------------------------------------------
SHORTHAND PROPERTY NAMES
--------------------------------------------------------------------

Cuando se crea un objeto y el nombre del atributo (clave) es igual al nombre de la variable que contiene el valor que será asignado, Javascript permite usar una sintaxis abreviada para simplificar el código:

    Ejemplo tradicional (sintaxis completa):

        let nombre = "Juan";
        let direccion = "Casa de Juan";

        let paquete = {
            nombre: nombre,          // Juan
            direccion: direccion,    // Casa de Juan
        }

    En este caso, el nombre del atributo y el valor provienen de la misma variable.

        let paquete = {
            nombre,
            direccion,
        }

--------------------------------------------------------------------
*/

// Ejemplo tradicional (sintaxis completa):

let nombre = "Juan";
let direccion = "Casa de Juan";

let paquete = {
    nombre,
    direccion,
}

console.log("Paquete a nombre de: ", paquete.nombre);
console.log("Paquete a dirección de: ", paquete.direccion);

console.log('%c-------------------------------------\nObjetos nulos\n-------------------------------------', 'color: green');
/*
--------------------------------------------------------------------
OBJETOS NULOS
--------------------------------------------------------------------

En programación, "null" representa un valor intencionalmente inexistente. Es decir, indica que por decisión del programador, una variable, propiedad, objeto, no tiene un valor asignado.

Se utliza comúnmente para inicializar objetos que más tarde contendrán atributos, o para indicar que algo no fue encontrado.

    Ejemplo

        let persona = null;

        persona = {
            nombre: "Juan",
            edad: 20,
        }

--------------------------------------------------------------------
*/

let persona = null;  // Objeto inexistente
// perstona = {};       // Objeto vacio

console.log("Objeto persona antes de ser asignada: ", persona);

persona = {
    nombre: "Juan",
    edad: 20,
}
console.log("Objeto persona después de ser asignada: ", persona);

console.log('%c-------------------------------------\nEnums\n-------------------------------------', 'color: green');
/*
--------------------------------------------------------------------
ENUMS
--------------------------------------------------------------------

En programación, un enum (abreviatura de enumeración) es una estructura de datos que permite definir un conjunto de contantes con nombre. Estas constantes suelen representar valores relacionados entre sí.

Sin embargo, en Javascript no existen los enums. A pesar de esta ausencia, es posible emular un enum utilizando objetos, ya que los objetos permiten definir claves con valores asociados a ellos.

--------------------------------------------------------------------
*/

let dia = 1; // Magic Numbers

let DiaSeleccionado = {
    LUNES: 1,
    MARTES: 2,
    MIERCOLES: 3,
    JUEVES: 4,
    VIERNES: 5,
    SABADO: 6,
    DOMINGO: 7,
}

switch(dia){
    case DiaSeleccionado.LUNES:
        console.log("Lunes");
        break;
    case DiaSeleccionado.MARTES:
        console.log("Martes");
        break;
    case DiaSeleccionado.MIERCOLES:
        console.log("Miércoles");
        break;
}

/*

1. Crear una app que sirva como directorio para registrar usuarios.
2. Debe tener las siguiente opciones:
    1. Nuevo registro.
    2. Buscar registro.
    3. Salir.
3. Los contactos registrados deben tener los siguiente atributos:
    - ID. Debe incrementarse en uno cada vez que se agrega un nuevo registro. Este valor es automático.
    - Nombre: Nombre del contacto.
    - Telefono: Teléfono del contacto.
    - Dirección: Dirección del contacto.
4. La opción de "buscar contacto" debe mostrar todos los datos que se registraron del contacto, incluyendo el ID.
5. El menú debe estar manejado con enums.
6. Deben usarse funciones.


Cómo buscar los contactos.

Para buscar un contacto es necesario usar la funcion "includes(string_a_buscar)".
*/

let palabra = "mundo";
let oracion = "Hola mundo";

// Devuelve true si la palabra existe dentro de oración
// Devuelve false si la palabra no existe dentro de la oración

console.log(oracion.includes(palabra));

console.log('%c-------------------------------------\nFunciones en Objetos\n-------------------------------------', 'color: green');
/*
--------------------------------------------------------------------
FUNCIONES EN OBJETOS
--------------------------------------------------------------------

Si dentro de los atributos de un objeto está contenida una función, dicha función recibe el nombre de método.

Los métodos también pueden ser de tipo void o retornar valores.

Si un método necesita acceder a los atributos que están contenidos dentro del objeto, es necesario referirse a ellos con la palabra reservada "this".

"This" es una referencia requerida para contextualizar al método que dicha propiedad que intenta acceder está contenida dentro del objeto.

--------------------------------------------------------------------
*/

let manzana2 = {
    nombre: "Manzana",
    color: "Rojo",
    precio: 12.5,
    disponible: true,
    beneficios: ["Fibra", "Vitaminas"],
    origen: {
        pais: "México",
        region: "Tijuana"
    },
    mostrar: function(){
        console.log(`Metodo "mostrar": Fruta ${ this.nombre }, cuesta $${ this.precio }`);
    }
}

manzana2.mostrar();
