import React from 'react';
/*
-----------------------------------------------------
Componentes
-----------------------------------------------------

En frameworks (como React) un componente es una función que retorna un fragmento de intefaz gráfica usando JSX. 

Los componentes son la unidad básica de construcción en los Frameworks. Por convención es recomendable seguir estas sugerencias.

1. Los nombres de los componentes deben comenzar con mayúsculas.
2.Se utiliza CamelCase.
3. Se debe crear un folder por cada componente.
4. Dentro del folder sólo debe estar contenido los elementos que conciernen a dicho componente.

Para que un componente pueda ser utilizado en otros archivos, es necesario que se exporte la función que realizará el render. Así mismo, el archivo que hará uso del componente deberá importarlo.

-----------------------------------------------------
Return
-----------------------------------------------------
En React la función que se exporta, sólo puede hacer render de un elemento JSX.

Si se requiere hacer render de más de un elemento, es necesario agrupar el fragmento de JSX en una etiqueta que contenga los demás elementos JSX.

Cuando se representan múltiples elementos de JSX agrupados por una etiqueta, el return también debe agrupar las líneas de código con paréntesis.

      function ComponenteBasico() {
        return(
          <div>
            <h1>Componente básico usando React</h1>
            <h2>Segundo elemento agrupado dentro de un &lt;div&gt;</h2>
          </div>
        );
      }

Si el retorno de múltiples etiquestas termina siendo un requerimiento forzoso, React tiene los medios para retornar más de un elemento sin estar agrupado a uno principal, pero este debe ser devuelvo en forma de arreglo.

      function ComponenteBasico() {
        return [
          <h1>Componente básico usando React</h1>,
          <h2>Segundo elemento agrupado dentro de un &lt;div&gt;</h2>      
        ];
      }

-----------------------------------------------------
Expresiones Embebidas
-----------------------------------------------------
En React es posible utilizar expresiones que están contenidas en fragmentos de código. Esto es similar a la concatenación por extrapolación.

En React las expresiones embebidas se representan por medio de llaves: { expresion_a_invocar }

Nota: Muy semejante a una concatenación por extrapolación, las expresiones embebidas sólo permiten realizar operaciones simples. No es posible ejecutar procesos complejos como ifs o ciclos.

      function ComponenteBasico() {
        return(
          <div>
            <h1>Componente básico usando { framework }</h1>
            <h2>Segundo elemento agrupado dentro de un &lt;div&gt;</h2>
          </div>
        );
      }

-----------------------------------------------------
Funciones auxiliares
-----------------------------------------------------

En React es posible crear funciones fuera del componente principal que retornen fragmentos de JSX. Estas funciones son útilese para la lógica y mejorar la legibilidad del componente.

Dichas funciones pueden ser invocadas dentro del return del componente principal como si fueran exresiones embebidas


-----------------------------------------------------
Comentarios dentro de JSX
-----------------------------------------------------

En React, cuando se coloca un comentario dentro de un código de javascript sigue siendo de la forma habitual
      //
      /*

Sin embargo, cuando el comentario está dentro de un elemento JSX, es necesario agrupa el fragmento de código que será comentado, a través de las llaves.

-----------------------------------------------------
Fragmentos
-----------------------------------------------------

Cuando un componente va a retornar múltiples elementos de JSX agrupados en uno principal, es posible usar los fragmentos de React.

Los fragmentos permiten agrupar varios elementos sin añadir un nodo extra al DOM.

Los fragmento agrupan elementos de la siguiente manera:

      <>
        ....
      </>

*/

let framework = 'React';

function renderTitulo(){
  return <h1>&lt;ComponenteBasico /&gt;</h1>
}

function renderBody(){
  return (
    <>
      <p>Este componente (ComponenteBasico) está siendo renderizado gracias a { framework } y su librería de JSX.</p>
      <p>Gracias a JSX, es posible crear funciones e involcarlas dentro del "HTML" del render principal para desplegar elementos gráficos</p>
    </>
  );
}

function ComponenteBasico() {
  return(
    <>
      { renderTitulo() }
      { renderBody() }
      <p>También es posible invocar funciones mezclando con elementos de JSX.</p>
      <p>{/* Este código está comentado */}</p>
    </>
  );
}



export default ComponenteBasico;
