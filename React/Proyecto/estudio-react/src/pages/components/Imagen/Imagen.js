import "./Imagen.css";

function Imagen(props) {

    const { url, descripcion } = props;
    
    return (
        <div className="imagenConPie">
            <img src={url} alt="imagen" className="imagen" />
            <p className="pie">{descripcion}</p>
        </div>
    );
}

export default Imagen;
