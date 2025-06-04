console.log("%cArchivo de 5_tablas_de_verdad funcionando!", "color: green");

console.log('%c---------------------------\nTablas de Verdad\n---------------------------', 'color: green');
/*
--------------------------------------------------------------------------
TABLA DE VERDAD
--------------------------------------------------------------------------

Las Tablas de Verdad son representaciones matemáticas que se basan en la lógica booleana para inferir un resultado (true ó false) según su interacción con diferentes operaciones lógicas.

A estas representaciones también se les suele denominar COMPUERTAS LÓGICAS.

Para el desarrollo de algortmos se usan principalmente las siguientes compuertas lógicas:

- Conjunción
    - Compuerta lógica: AND
    - Sintaxis: && (ampersand )

- Disyunción
    - Compuerta lógica: OR
    - Sintaxis: || (pipe)


----------------------
CONJUNCIÓN (AND)
----------------------
A       B       A && B
----------------------
true    true    true
true    false   false
false   true    false
false   false   false
----------------------
Para la conjunción se concluye que para resolver a un valor verdadero, todas sus premisas deben ser verdaderas.


----------------------
DISYUNCIÓN (OR)
----------------------
A       B       A || B
----------------------
true    true    true
true    false   true
false   true    true
false   false   false
----------------------
Para la disyunción se concluye que para resolver a un valor verdadero, al menos una de sus premisas debe ser verdadera.

--------------------------------------------------------------------------
*/

// Ejemplo de Conjunción
// Juanito quiere realizar un dibujo.
// Determinar si Juanito puede hacer su dibujo según los materiales con los que dispone (lápiz y hoja).

console.log("%c------------ Conjunción ------------", "color: green");

let tengo_un_lapiz = true;
let tengo_una_hoja = true;
let tengo_inspiracion = false;

console.log("Lápiz: ", tengo_un_lapiz);
console.log("Hoja: ", tengo_una_hoja);
console.log("Inspiracion: ", tengo_inspiracion);

if(tengo_un_lapiz && tengo_una_hoja && tengo_inspiracion){
    console.log("Juanito sí puede hacer su dibujo.");
}
else{
    console.log("Juanito necesita comprar materiales");
}

console.log("%c------------ Disyunción ------------", "color: green");
// Ejemplo de Disunción
// Lupita quiere decidir si saldrá de casa con un paraguas/sombrilla.
// Determinar si Lupita usará paraguas/sombrilla según las condiciones climáticas.

let esta_lloviendo = false;
let hace_mucho_sol = false;

console.log("Está lloviendo: ", esta_lloviendo);
console.log("Hace sol: ", hace_mucho_sol);

if(esta_lloviendo || hace_mucho_sol){
    console.log("Lupita sí va usar paraguas/sombrilla");
}
else{
    console.log("Lupita no necesita paraguas/sombrilla");
}

console.log('%c---------------------------\nValores coercibles\n---------------------------', 'color: green');
/*
--------------------------------------------------------------------------
VALORES COERCIBLES (TRUTHY Y FALSY)
--------------------------------------------------------------------------

En Javascript, algunos valores pueden evaluarse implícitamente como true ó false cuando se usan en expresiones lógicas o condicionales (if, ciclos).

Estos valores se dividen en dos categorías:

Valores Truthy. Se consideran true cuando se evalúan en un contexto booleano.
Valores Falsy. Se consideran false cuando se evalúan en un contexto booleano.

--------------------------------------------------------------------------
*/

// Valores Truthy (que tienden a verdadero)
console.log("true", Boolean(true));
console.log("1", Boolean(1));
console.log("-5", Boolean(-5));
console.log("Hola", Boolean("Hola"));

console.log("%c--------------------", "color: green");

// Valores Falsy (que tienden a falso)
console.log("false", Boolean(false));
console.log("0", Boolean(0));
console.log("-0", Boolean(-0));
console.log('""', Boolean(""));
console.log("null", Boolean(null));
console.log("undefined", Boolean(undefined));
console.log("NaN", Boolean(NaN)); // Not a number
