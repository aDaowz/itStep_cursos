
/*
-----------------------------------------------------
CSS en línea
-----------------------------------------------------

Por la naturaleza de React, los estilos son manejados de una manera ligeramente distinta a lo habitual.

Debido a que en React el código javascript se inyecta en forma de expresiones embebidas, el css en línea termina siendo indicado en forma de objeto. Ejemplo:

        let cssInline = <p style={{ color: 'red'}} >Texto inline</p>

        - Las primeras llaves indican que un código javascript va a ser inyectado.
        - Las segundas llaves indican que un OBJETO será pasado para agrupar los estilos.

-----------------------------------------------------
Objetos como CSS
-----------------------------------------------------

Los objetos en javascript se rigen por la estructura clave-valor. En React, la asgignación de atributos debe obedecer a la sintaxis del objeto, por lo que es necesario tener las siguientes consideraciones:

*/

let cssInline = <p style={{ color: 'red'}} >Texto inline rojo</p>

function ComponenteCSS(){
    return(
        <div>
            <h1>&lt;ComponenteCSS&gt;</h1>
            { cssInline }
        </div>
    )
}

export default ComponenteCSS;