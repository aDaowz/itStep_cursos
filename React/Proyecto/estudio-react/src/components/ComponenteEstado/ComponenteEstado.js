import { useState } from 'react';
import ComponenteModal from '../ComponenteModal/ComponenteModal';
import './ComponenteEstado.css';

/*
-----------------------------------------------------
El Estado en React
-----------------------------------------------------

Para poder manejar el estado de un componente y controlar qué sucede durante la ejecución de la aplicación o durante la interacción del usuario, en React se utiliza el concepto de Estado (del inglés "State")

El estado suele usarse para poder "recordar" si alguna ventana está abierta, cerrada, etc, sólo por poner un ejemplo.
El estado se guarda usando un tipo de función especial denominado "hook" (gancho). En este ejemplo el hook utilizado será "useState", siendo este el hook más básico de todos.

-----------------------------------------------------
Hooks
-----------------------------------------------------

Los Hooks (ganchos) son funciones especiales introducidas en React para permitir que los componentes funcionales (también llamados "function components") puedan tener características como el manejo del estado, efectos secundarios, etc.

Antes de los Hooks, sólo los componentes de clase podían tener estado. Pero ahora con "useState" se puede guardar información dentro del componente y actualizarla cuando sea necesario.

-----------------------------------------------------
useState
-----------------------------------------------------

La función "useState" es el hook más simple y usado. Sirve para declarar y asociar una variable de estado y una función para actualizar ese estado. Esta asosiación se realiza a través de un arreglo.

    La sintaxis básica de un hook es:

        const [estado, setEstado] = useState(valorInicial);

    El hook "useState" devuelve un arreglo con dos elementos:

        1. (Posición 0) El valor actual del estado.
        2. (Posición 1) La función que permite cambiar ese valor.

La sintaxis mostrada previamente corresponde a una destructuración de arreglos.

*/

function ComponenteEstado(){
    //          0                1
    //    var de estado  fnc actualizar estado
    const [mostrarModal, setMostrarModal] = useState(false);

    // Funciones auxiliares para manipular el estado
    const abrirModal = () => setMostrarModal(true); 
    const cerrarModal = () => setMostrarModal(false);

    // Lógica para desplegar o quitar el modal
    let modal = null; // Esta variable va a contener el html del modal (Componente)
    if(mostrarModal){
        modal = <ComponenteModal cerrar={cerrarModal} />;
    }


    return (
        <div className='componenteEstado'>
            <h1>&lt;ComponenteEstado&gt;</h1>
            <p className='mensaje'>Click para cambiar el estado y abrir un modal.</p>
            <button className='botonAbrir' onClick={abrirModal}>Abrir Modal</button>
            { modal }
        </div>
    );
}

export default ComponenteEstado;