
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

Los objetos en javascript se rigen por la estructura clave-valor. En React, la asgignación de atributos debe obedecer a la sintaxis del objeto, por lo que es necesario tener las siguientes consideraciones en cuneta:

    1. Los valores de las claves del objeto deben estar envueltos por comillas (sean simples o dobles).

        const cssInline = <p style={{ color: 'red'}} >Texto inline rojo</p>

    2. Si los valores son números puros, estos se dejan como números (sin comillas) i gual que como se delara en un objeto:

        const cssInline = <p style={{ padding: 10 }} >Texto inline rojo</p>

    3. En CSS los atributos que sus nombres tienen más de una palabra, estos se separan por guiones (font-size). Esto no es posible en React. Es necesario usar cameCase:

        const cssInline = <p style={{ fontSize: '20px' }} >Texto inline rojo</p>

    4. Si un elemento de JSX va a contener más de un atributo de CSS, estos se separan por comas, no por punto y coma como habitualmente se hace en CSS.

        let cssInline = <p style={{ color: 'red', fontSize: '20px', padding: 10 }} >Texto inline rojo</p>

También es posible construir un objeto fuera del JSX y pasarlo directamente al atributo de style:

-----------------------------------------------------
Clases en React
-----------------------------------------------------

En HTML tradicional, los estilos se aplican mediante la propiedad "class" (también se puede con id y por nombre de etiqueta). Esta propiedad de class se escribe en la etiqueta del elemento de HTML.

Sin embargo, en React no es posible usar el atributo "class" directamente ya que "class" es una palabra reservada en javascript.

Por esta razón, en JSX se debe utilizar la palabra reservada "className". Este atributo es único y especial para React.

*/

import './ComponenteCSS.css';

const CssObjeto = {
    color: 'red',
    fontSize: '20px',
    padding: 10
}

let cssInline = <p style={ CssObjeto } >Texto inline rojo</p>
let cssClase = <p className="parrafoAzul">Texto con className para llamar clases de CSS.</p>

function ComponenteCSS(){
    return(
        <div>
            <h1>&lt;ComponenteCSS&gt;</h1>
            { cssInline }
            { cssClase }
        </div>
    )
}

export default ComponenteCSS;