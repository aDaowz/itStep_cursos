import './ComponenteModal.css';

function ComponenteModal(props){
    const cerrar = props.cerrar;
    return(
        <div className='modalBackground' onClick={cerrar}>
            <div className='modalImagenContenido' onClick={(event) => event.stopPropagation()} >
                <p>Este es un modal sencillo.</p>
                <button className='boton' onClick={cerrar}>Cerrar</button>
            </div>
        </div>
    );
}

export default ComponenteModal;