
console.log("Ejercicios funcionando");

/*
Lunes       1
Martes      2
Miércoles   3
Jueves      4
Viernes     5
Sábado      6
Domingo     7
*/

// 1. Forma completa.

let diaTexto = prompt("Escribe un número para mostrar el día:");
let diaNumero = Number(diaTexto);

// Acortando dos pasos en el siguiente comando.
// let dia = Number(prompt("Escribe un número para mostrar el día:"));


if(diaNumero === 1){
    console.log("El día es Lunes.");
}
else{
    if(diaNumero === 2){
        console.log("El día es Martes.");
    }
    else{
        if(diaNumero === 3){
            console.log("El día es Miércoles.");
        }
        else{
            if(diaNumero === 4){
                console.log("El día es Jueves.");
            }
            else{
                if(diaNumero === 5){
                    console.log("El día es Viernes.");
                }
                else{
                    if(diaNumero === 6){
                        console.log("El día es Sábado.");
                    }
                    else{
                        if(diaNumero === 7){
                            console.log("El día es Domingo.");
                        }
                        else{
                            console.log("Ese número no corresponde a ningún día.")
                        } // No válido
                    } // Domingo
                } // Sábado
            } // Viernes
        } // Jueves
    } // Miércoles
}  // Martes
// Lunes


// Forma 2. Estructuras if-else else-if else
if(diaNumero === 1){
    console.log("LUNES");
}
else if(diaNumero === 2){
    console.log("MARTES");
}
else if(diaNumero === 3){
    console.log("MIÉRCOLES");
}
else if(diaNumero === 4){
    console.log("JUEVES");
}
else if(diaNumero === 5){
    console.log("VIERNES");
}
else if(diaNumero === 6){
    console.log("SÁBADO");
}
else if(diaNumero === 7){
    console.log("DOMINGO");
}
else{
    console.log("Ese número no corresponde a ningún día");
}


// Forma 3. If

if(diaNumero === 1){
    console.log("(if solamnete) LUNES");
}
if(diaNumero === 2){
    console.log("(if solamnete) MARTES");
}
if(diaNumero === 3){
    console.log("(if solamnete) MIÉRCOLES");
}
if(diaNumero === 4){
    console.log("(if solamnete) JUEVES");
}
if(diaNumero === 5){
    console.log("(if solamnete) VIERNES");
}
if(diaNumero === 6){
    console.log("(if solamnete) SÁBADO");
}
if(diaNumero === 7){
    console.log("(if solamnete) DOMINGO");
}

// Falta validar número no válido