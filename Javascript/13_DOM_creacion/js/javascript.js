document.addEventListener("DOMContentLoaded", () => {
    console.log("Javascript funcionando");

    /********************************
     * Creación de elementos
     ********************************/

    const container = document.createElement("div");
        const up = document.createElement("div");
            const rightUp = document.createElement("div");
            const leftUp = document.createElement("div");

        const down = document.createElement("div");
            const rightDown = document.createElement("div");
            const leftDown = document.createElement("div");
            const circle = document.createElement("div");



    /********************************
     * Asignación de atributos
     ********************************/

    container.id = "container";
        up.id = "up";
            leftUp.id = "A";
            leftUp.classList.add("left", "vertical");
            leftUp.textContent = "A js";

            rightUp.id = "B";
            rightUp.classList.add("right");
            rightUp.textContent = "B js";

        down.id = "down";
            leftDown.id = "D_out";
            leftDown.classList.add("left", "vertical");

                circle.id = "D";
                circle.classList.add("circle");
                circle.textContent = "D js";

            rightDown.id = "C";
            rightDown.classList.add("right");
            rightDown.textContent = "C js";



    /********************************
     * Inserción en HTML
     ********************************/

    container.appendChild(up);
        up.appendChild(leftUp);
        up.appendChild(rightUp);

    container.appendChild(down);
        down.appendChild(leftDown);
            leftDown.appendChild(circle);
        down.appendChild(rightDown);

    document.body.appendChild(container); // Se inserta el container en el <body> del html

});