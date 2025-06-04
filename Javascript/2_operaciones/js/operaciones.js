console.log('Archivo de 2_operaciones funcionando!!!');

/*
--------------------------------------------------------------------------
NOMENCLATURAS PARA DEFINICIÓN DE VARIABLES
--------------------------------------------------------------------------

Al igual que otros lenguajes de programación, en Javascript el propósito de las variables y constantes creadas, son para poder aplicarles operaciones y poder obtener resultados.

--------------------------------------------------------------------------
*/

const x = 100;
const y = 50;
let resultado; // Se crea la variable pero no se inicializa

// Suma
resultado = x + y;
console.log(x + ' + ' + y + ' = ' + resultado);

// Resta
resultado = x - y;
console.log(x + ' - ' + y + ' = ' + resultado);

// Multiplicación
resultado = x * y;
console.log(x + ' * ' + y + ' = ' + resultado);

// División
resultado = x / y;
console.log(x + ' / ' + y + ' = ' + resultado);

/*
--------------------------------------------------------------------------
COERCIÓN EN JAVASCRIPT
--------------------------------------------------------------------------

Javascript es un leguaje dinámico, lo que significa que puede convertir automáticamente los tipos de datos "on the fly". Esto se conoce como coerción.

Coerción es la conversción de un tipo de dato a otro.

--------------------------------------------------------------------------
*/

console.log('---------------------------------------------');

// COERCIÓN IMPLÍCITA
// Ocurre cuando al interpretador de Javascript le es posible convertir los valores de manera automática.

console.log("1" + 1);   // "11" (El número se convierte a string).
console.log("1" - 1);   // 0 (El string se convierte en número).
console.log(1 + true);  // 2 (true se convierte a número)
console.log(1 + false); // 1 (false se convierte a número)

// COERCIÓN EXPLÍCITA
// Ocurre cuando la conversión se realiza manualmente. Comunmente se le denomina "cast".

console.log(Number("10") + 5);  // 15 (Se convierte el string "10" a número).
console.log(String(100));       // "100" (Convierte el número a string).
console.log(Boolean(0));        // false (Cero se convierte a false).

