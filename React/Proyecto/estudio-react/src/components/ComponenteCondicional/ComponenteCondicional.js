
import './ComponenteCondicional.css';

/*
-----------------------------------------------------
Renderizado condicional
-----------------------------------------------------

Es común y necesario mostrar un contenido u otro dependiendo de ciertas condiciones.

A través de JSX es posible condicionar contenido de la manera habitual a través de javascript como if, operador ternario o expresiones lógicas

Las posibilidades de condicionar el comportamiento de un componente son las mismas que las habaituales:

    1. If.
    2. Switch case.
    3. Condicional ternario.
    4. Encadenamiento opcional y fusión nula (? y ??)

*/

function renderColor(props){
    let colorNombre = '--';     // default
    let colorCodigo = 'white';  // default

    if(props && props.color){
        colorNombre = props.color.nombre;
        colorCodigo = props.color.codigo;
    }

    return(
        <div className='colorMuestra'>
            <p className='colorTitulo'>Color: <span><strong>{ colorNombre }</strong></span></p>
            <div className='recuadro' style={{ backgroundColor: colorCodigo }}></div>
        </div>
    );
}

function ComponenteCondicional(props){
    return(
        <div className="componenteCondicional">
            <h1>&lt;ComponenteCondicional&gt;</h1>
            <p>Este componente utiliza condicionales para adquirir diferentes comportamientos según sus condiciones</p>
            { renderColor(props) }
        </div>
    );
}

export default ComponenteCondicional;