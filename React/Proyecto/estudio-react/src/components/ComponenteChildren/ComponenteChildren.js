
import './ComponenteChildren.css';

/*
-----------------------------------------------------
Children
-----------------------------------------------------

El paso de información que se ha manejado hasta ahora ha sido através de props que están modelados en forma de objeto para el componente.

Sin embargo, también es posible pasar información en forma de fragmentos de htmls (nodos de html).

Para poder renderizar el contenido que se pasa dentro del componente, es necesario utilizar un prop especial que provee React abjo el nombre de "children".

Children representa todo el contenido que se coloca entre las etiquetas de apertura y cierre del componente, tal como si fuera un div que envuelve más elmentos de html. Children puede soportar cualquier complejidad de html.

    Invocación del componente con contenido:

        <ComponenteChildren>
            <h1>&lt;ComponenteChildren&gt;</h1>
            <p>Este componente utiliza el prop especial <strong>children</strong> para renderizar contenido envuelto por el componente.</p>
            <p>Todas las etiquetas que se transfieren por este medio son manejadas como un todo a través de children</p>
        </ComponenteChildren>

    Uso de children dentro del componente:

        function ComponenteChildren(props){
            return <div>{ props.children }</div>;
        }

*/

function ComponenteChildren(props){
    return(
        <div className="backgroundComp">
            { props.children }
            {/*<p>Est texto está siendo agregado desde dentro del &lt;ComponenteChildren&gt;</p>*/}
        </div>
    );
}

export default ComponenteChildren;