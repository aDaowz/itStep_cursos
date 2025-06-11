
/*
-----------------------------------------------------
Props en React
-----------------------------------------------------

Los "props" (abreviación de "properties") permiten recibir datos desde el exterior hacia dentro del componente, por lo que técnicamente hablando, un prop es un parámetro de la función del componente.

En la práctica, los props permiten el flujo de datos desde un componente padre hacia su componente hijo.

Del lado de la invocación, los props adquieren una sintaxis de atributo de HTML, como se muestra en el siguiente ejemplo:

        <NombreComponente saludo="Hola mundo!" />

Los props son recibidos en forma de objeto a través de su parámetro. El nombre del atributo del objeto debe coincidir con el nombre del atributo del "html" (el prop) con el que se invocó el componente; es decir, si el componente es invocado con el prop "saludo", entonces en el archivo javascript se debe accesar al atributo "saludo" del objeto "props" del componente. Ejemplo: 

    Invocación del componente:

        <ComponenteProps saludo="Hola mundo!!!" />

    Objeto de "props":

        props = {
            saludo: "Hola mundo!!!"
        }

Entonces, del lado del componente los props se accesan de la siguiente manera:

    function ComponenteProps(props){
        render <p>{props.saludo}</p>
    }

Nota 1: "props" no es una palabra reservada dado que el parámetro puede definirse con cualquier otro nombre; sin embargo es una convención nombrar a ese parámetro como props.

Nota 2: Los props son inmutables, lo cual significa que no pueden ser modificados o reasignados.

-----------------------------------------------------
Múltiples Props
-----------------------------------------------------

Los componentes pueden recibir más de un prop y estos pueden ser de cualquier tipo de dato.

De igual manera, del lado de la invocacón, múltiples props se escrbien en forma de múltiples atributos de html.

    Invocación:

        <ComponenteProps
            propString="Hola mundo!!!"
            propNum={ 10 }
            propBool={ true }
            propArray={['Primer valor de arreglo', 'Segundo valor de arreglo']}
            propObj={{atributo: 'Valor de atributo'}}
        />

    Objeto:

    props = {
        propString: "Hola mundo!!!",
        propNum: 10,
        propBool: true,
        propArray: ['Primer valor de arreglo', 'Segundo valor de arreglo'],
        propObj: {atributo: 'Valor de atributo'},
    }
*/

// propString: "Hola mundo!!!",
// propNum: 10,
// propBool: true,
// propArray: ['Primer valor de arreglo', 'Segundo valor de arreglo'],
// propObj: {atributo: 'Valor de atributo'},

function renderPropString(props){
    return <p>Dato de propString: {props.propString}</p>
}

function renderPropNum(props){
    return <p>Dato de propNum: { props.propNum}</p>
}

function renderPropBool(props){
    return <p>Dato de propBool: { `${ props.propBool}`}</p>
}

function renderPropArray(props){
    return (
        <div>
            <p>Dato de propArray 0: { props.propArray[0]}</p>
            <p>Dato de propArray 1: { props.propArray[1]}</p>
        </div>
    )
}

function renderPropObj(props){
    return <p>Dato de propObj: { props.propObj.atributo}</p>
}


function ComponenteProps(props){
    return (
        <div>
            <h1>&lt;ComponenteProps&gt;</h1>
            <p>Este componente utiliza props:</p>
            { renderPropString(props) }
            { renderPropNum(props) }
            { renderPropBool(props) }
            { renderPropArray(props) }
            { renderPropObj(props) }
        </div>
    )
}

export default ComponenteProps;