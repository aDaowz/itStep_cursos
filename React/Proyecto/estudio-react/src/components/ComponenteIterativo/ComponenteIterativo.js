import './ComponenteIterativo.css';

/*
-----------------------------------------------------
Iteraciones en los componentes
-----------------------------------------------------

Como se mencionó en la primera lección de React, un componente no puede devolver más de un elemento de html (lo mismo aplica para las funciones auxiliares). También se mencionó que una alternativa para devolver más de un elemento, es recurriendo a los arreglos, siendo esta la manera de renderizar más de un elemento iterativamente.

-----------------------------------------------------
Uso de .map()
-----------------------------------------------------

El método .map() es una función propia de los arreglos en Javascript. Su propósito es recorrer cada elemento del arreglo y devolver un nuevo arreglo. En React es muy usado para transformar un arreglo de datos en un arreglo de elementos de JSX, que luego puede ser renderizado en pantalla.

Dicho en palabras más resumidas, .map recibe un arreglo de un tipo y devuelve un arreglo de otro tipo que ha sido modificado según las necesidades requeridas.

    Ejemplo básico de uso de .map:

        const frutas = ["Manzana", "Pera", "Plátano"];

        const listadoFrutas = frutas.map((fruta, i) => {
            return <li key={i}>{ fruta }</li>;
        });
*/

function createTabla(props){
    const longitud = props.datos.length;
    let arregloDeRows = [];

    for(let i = 0; i < longitud; i++){
        const item = props.datos[i];
        arregloDeRows.push(
            <tr key={i}>
                <td>{item.nombre}</td>
                <td>{item.color}</td>
                <td>{item.precio}</td>
                <td>{item.descripcion}</td>
            </tr>
        );
    }

    return arregloDeRows;
}

function createTableMap(props){
    const arregloDeRows = props.datos.map((fruta, i) => {
        return(
            <tr key={i}>
                <td>{fruta.nombre}</td>
                <td>{fruta.color}</td>
                <td>{fruta.precio}</td>
                <td>{fruta.descripcion}</td>
            </tr>
        );
    });
    return arregloDeRows;
}

function ComponenteIterativo(props) {
    return (
        <div className="componenteIterativo">
            <h1>Componente &lt;ComponenteIterativo&gt;</h1>

            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Color</th>
                        <th>Precio</th>
                        <th>Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    {/*createTabla(props)*/}
                    {createTableMap(props)}
                </tbody>
            </table>
        </div>
    );
}

export default ComponenteIterativo;