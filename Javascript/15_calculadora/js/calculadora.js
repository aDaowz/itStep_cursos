document.addEventListener("DOMContentLoaded", () => {
    console.log("calculadora funcionando");

    const pantalla = document.getElementById("display");

    const btnNumero = document.querySelectorAll(".number");
    btnNumero.forEach(boton => {
        boton.addEventListener("click", () => {
            // Lógica para los cálculos
            console.log(boton.textContent);
            pantalla.textContent = boton.textContent;
        });
    });

    const btnBorrarTodo = document.getElementById("CA");
    btnBorrarTodo.addEventListener("click", () => {
        pantalla.textContent = "";
        reiniciarValores();
    });

    const btnBorrarUltimo = document.getElementById("C");
    btnBorrarUltimo.addEventListener("click", () => {
        pantalla.textContent = pantalla.textContent.slice(0, -1); // Borra último valor
    });
});