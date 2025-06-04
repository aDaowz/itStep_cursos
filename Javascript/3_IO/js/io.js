console.log('Archivo de 3_IO funcionando!');

// IO
// I = Inputs
// O = Outputs

/*
--------------------------------------------------------------------------
INPUTS (INGRESO DE DATOS)
--------------------------------------------------------------------------

Un input es una interfaz que está diseñada para permitir al usuario la entrada de datos.
En los primeros ejercicios, estaremos ingresando información a través de la función "prompt"

--------------------------------------------------------------------------
*/

// prompt("Escribe algo: ");

// Escribe tu nombre
let nombre = prompt("Escribe tu nombre:");
let apellido = prompt("Escribe tu apellido:");

console.log('El nombre completo ingresado fue: ' + nombre + " " + apellido);

let fechaNacimiento = prompt("Escribe tu fecha de nacimiento");
console.log('La fecha ingresada fue: ' + fechaNacimiento);


/*
--------------------------------------------------------------------------
OUTPUTS (SALIDA DE DATOS)
--------------------------------------------------------------------------

Al igual que los inputs, los outputs son interfaces que permiten desplegar hacia el usuario información para su interacción.
En los primeros ejercicios, estaremos observando a través de la consola y de la función "alert".

--------------------------------------------------------------------------
*/

// alert("Esto es un mensaje para el usuario");

alert("(Tradicional) Bienvenido " + nombre + " " + apellido + "\n\nTu fecha de nacimiento es: " + fechaNacimiento);

/*
--------------------------------------------------------------------------
CONCATENACIÓN
--------------------------------------------------------------------------

Existen 2 maneras de concatenar. Uno por sintaxis tradicional en donde cada nueva oración o invocación de un valor se realiza por medio del operador de +

También modernamente existe la concatenación por extrapolación donde la cadena de caracteres es indicado a través de los backticks (``), y cada invocación a un valor se realiza con ${ variable_a_llamar }

--------------------------------------------------------------------------
*/

alert(`(Extrapolación) Bienvenido ${ nombre } ${ apellido }\n\nTu fecha de nacimiento es ${ fechaNacimiento }`);

alert(nombre + "\n" + apellido + "\n" + fechaNacimiento);