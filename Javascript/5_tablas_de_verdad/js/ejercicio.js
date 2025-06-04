console.log("Ejercicio.");

/*
Obtener una representación en caracter basado en un valor numérico según un rango de calificaciones. el rango es el siguiente:

90 - 100:   A
80 - 89:    B
70 - 79:    C
60 - 69:    D
0 - 59:     F
*/

// Opción 1 de caputra
// let numeroIngresado = prompt("Ingrea una calficación:");
// let calificacion = Number(numeroIngresado);

// Opción 2 de captura
let calificacion = Number(prompt("Ingrea una calficación:"));

let calificacionLetra = "";


if(calificacion >=90 && calificacion <= 100){
    calificacionLetra = "A";
}
else if(calificacion >= 80 && calificacion <= 89){
    calificacionLetra = "B";
}
else if(calificacion >= 70 && calificacion <= 79){
    calificacionLetra = "C";
}
else if(calificacion >= 60 && calificacion <= 69){
    calificacionLetra = "D";
}
else if(calificacion >= 0 && calificacion <= 59){
    calificacionLetra = "F";
}
else{
    calificacionLetra = "Fuera de rango";
}

alert(`La nota del alumno es: ${ calificacionLetra }`);
// alert("La nota del alumno es: ", calificacionLetra);
