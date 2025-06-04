document.addEventListener("DOMContentLoaded", () => {
    console.log("14_DOM_forms");

    const crearOpcion = (selector, contenido) => {

        // CREACIÓN DE ETIQUETA <option>
        const opcion = document.createElement("option");
        // <option></option>

        // Asignación de atributos
        opcion.value = contenido;
        // <option value="contenido"></option>
        opcion.textContent = contenido;
        // <option value="contenido">contenido</option>

        // Pegarlo en el html (en el selector)
        selector.appendChild(opcion);
        // <select id="selector">
        //      <option value="contenido">contenido</option>
        // </select>
    }

    const selectorDia = document.getElementById("dia");
    // Populación de días
    for(let i = 1; i <= 31; i++){
        crearOpcion(selectorDia, i);
    }

    const selectorMes = document.getElementById("mes");
    // Populación de meses
    const meses = [
        "Enero",    // 0
        "Febrero",  // 1
        "Marzo",    // 2
        "Abril",    // 3
        "Mayo",     // ...
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ]

    for(let i = 0; i < meses.length; i++){
        crearOpcion(selectorMes, meses[i]);
    }

    const actualYear = 2025;
    const yearRange = 200;
    const minYear = actualYear - yearRange;

    const selectorYear = document.getElementById("year");

    for(let i = actualYear; i >= minYear; i--){
        crearOpcion(selectorYear, i);
    }

    const botonEnviar = document.getElementById("enviar");

    botonEnviar.addEventListener("click", (event) => {
        event.preventDefault();

        const objetoFormulario = {
            nombreCompleto: document.getElementById("nombre").value,
            diaNacimiento: document.getElementById("dia").value,
            mesNacimiento: document.getElementById("mes").value,
            yearNacimiento: document.getElementById("year").value,
            correoElectronico: document.getElementById("email").value,
            ciudadNacimiento: document.getElementById("ciudad").value,
            motivoSubscripcion: document.getElementById("motivo").value,
        }

        console.log(objetoFormulario);
    });

});