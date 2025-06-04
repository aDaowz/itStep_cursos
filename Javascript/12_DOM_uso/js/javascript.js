/*
--------------------------------------------------------------------
DOCUMENT OBJECT MODEL (DOM)
--------------------------------------------------------------------

El DOM (Document Object Model) es una representación estructurada del contenido de HTML en una página web. Permite a Javascript acceder y manipular dinámicamente los elementos de la página.

El DOM puede observarse directamente desde el javascript a través de un objeto que representa todo el contenido del HTML y sus propiedades.

El atributo "document" se puede consultar o modificara través de código dinámico.

--------------------------------------------------------------------
*/


/*
--------------------------------------------------------------------
REFERENCIAS A ELEMENTOS DEL DOM
--------------------------------------------------------------------

Una referencia en Javascript es una manera de "apuntar" a un elemento del HTML para poder usarlo o modificarlo.

Para obtener una referencia a un elemento usamos sintaxis como la siguiente:

    Ejemplo:

        document.getElementById("id_del_elemento");

    Desglose:

        document            Objeto dentro del objeto de window que permite el acceso a los elementos contenidos dentro del HTML.
        getElementBy..      Método del objeto document para obtener un elemento.
        ("el_elemento")     El parámetro que se pasa al método.

Nota: Existen otros métodos que también permiten obtener elementos del DOM. Todos ellos siguen el patrón de "document.getElementBy..."

Algunos de los métodos más comunes son:

    getElementById()            Busca elementos por ID
    get ElementByClassName()    Busca elementos por clase
    getElementByTagName()       Busca elementos por etiqueta

Otros métodos más modernos y versátiles:

    document.querySelector()        Usa selectores de CSS (retorna la primer coincidencia)
    document.querySelectorAll()     Usa selectores de CSS (retorna todas las coincidencisa)

--------------------------------------------------------------------
*/



/*
--------------------------------------------------------------------
LISTENERS (Escuchadores de eventos)
--------------------------------------------------------------------

Un "event listener" es una función que espera a que ocurra un evento específico (como un click) y reacciona ejecutando un bloque de código.

Esta función requiere de dos parámetros para funcionar.

    1. El nombre del evento que se pretende escuchar.
    2. La función que se acciona cuando el evento ha sido escuchado.

    Sintaxis básica:

        el_elemento.addEventListener("evento", funcion());

    Desglose:

        el_elemento             Elemento que se quiere escuchar.
        addEventListener        Función para monitorar el evento
        ("evento", funcion())   Parámetros requeridos
                                    "evento": El nombre del evento que se quiere escuchar.
                                    funcion(): La función que se ejecuta cuando el evento ha sido accionado.

Este patrón permite que el comportamiento de la página se active a través de interacciones por parte del usuario.

--------------------------------------------------------------------
*/

document.addEventListener("DOMContentLoaded", () => {
    console.log("12_DOM_uso funcionando");

    // Funciones matemáticas para las operaciones
    let sumar = (x, y) => x + y;
    let restar = (x, y) => x - y;
    let multiplicar = (x, y) => x * y;
    let dividir = (x, y) => y === 0 ? "No se puede dividir entre cero" : x / y;

    // Referencia del botón Calcular desde el HTML hacia el Javascript
    const boton = document.getElementById("calcular");

    boton.addEventListener("click", event => {
        event.preventDefault(); // Evitar que mande a servidor. Sólo por el <form>

        // Referencia del campo de num1 del HTML
        const num1 = Number(document.getElementById("num1").value);

        // Referencia del campo de num2 del HTML
        const num2 = Number(document.getElementById("num2").value);

        // Referencia del valor seleccionado en el dropdown list (select)
        const operacion = document.getElementById("operacion").value;

        let resultado = 0;

        switch(operacion){
            case "sumar":
                resultado = sumar(num1, num2);
                break;
            case "restar":
                resultado = restar(num1, num2);
                break;
            case "multiplicar":
                resultado = multiplicar(num1, num2);
                break;
            case "dividir":
                resultado = dividir(num1, num2);
                break;
        }

        // Referencia del <div> para imprimir el resultado
        document.getElementById("resultado").textContent = resultado;
        
    });
    
});