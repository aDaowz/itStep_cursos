import Imagen from "../Imagen/Imagen";
import "./Card.css";

function Card(props) {
    const { titulo, imagen, descripcionFoto, children } = props;

    
    return (
        <div className="card">
            <Imagen url={imagen} descripcion={descripcionFoto} />
            <div className="contenido">
                <h2 className="tituloCarta">{titulo}</h2>
                <div className="textoCarta">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Card;