
/*
-----------------------------------------------------
Destructuración
-----------------------------------------------------

La destructuración de un objeto es una técnica que consiste en crear un acceso directo a cada uno de los elementos contenidos dentro de dicho objeto. La idea es crear una variable usando el mismo nombre que cada uno de los atributos del objeto. Ejemplo:

    Objeto

        const MiObjeto = {
            num: 5,
            texto: "Hola mundo",
            bool: true,
            array: [100, 200],
        }

    Destructuración de MiObjeto:

        const num = MiObjeto.num;
        const texto = MiObjeto.texto;
        const bool = MiObjeto.bool;
        const array = MiObjeto.array;

De esta manera, para acceder al valor del objeto ya es posible hacerlo a través de la variable y no desde el objeto en sí.

Javascript ofrece una sintaxis específica para esta técnica, que es precisamente "Destructuración del objeto" y permite simplificar en una línea de código la destructuración. Ej:

    const { num, texto, bool, array} = MiObjeto;

-----------------------------------------------------
Destructuración de Props
-----------------------------------------------------

En React es una práctica muy común destructurar los props para simplificar el acceso a sus atributos.

    const { los_props } = props;
*/

function ComponenteDestructurado(props){

    // Destructuración de props
    const { numero, cadena, booleano, arreglo, objeto } = props;

    return(
        <div>
            <h1>&lt;ComponenteDestructurado&gt;</h1>
            <p>Este componente utiliza props con destructuración.</p>
            <p>numero: { numero }</p>
            <p>cadena: { cadena }</p>
            <p>booleano: { `${ booleano }` }</p>
            <p>arreglo: { arreglo[0] }, { arreglo[1] }</p>
            <p>objeto: { objeto.valorNum }</p>
        </div>
    );
}

export default ComponenteDestructurado;