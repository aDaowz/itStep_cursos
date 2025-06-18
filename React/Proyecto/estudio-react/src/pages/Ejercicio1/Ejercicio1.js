import Card from "../components/Card/Card";
import "./Ejercicio1.css";

function Ejercicio1() {
    return (
        <div className="pagina">
            <h1 className="tituloPagina">Instrumentos Musicales</h1>

            <Card
                titulo="Piano"
                imagen="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Steinway_Vienna_002.JPG/1024px-Steinway_Vienna_002.JPG"
                descripcionFoto="Gran Piano"
            >
                <p>El piano es un instrumento musical de cuerdas percutidas, utilizado ampliamente en la música clásica, jazz y popular. Su gran rango tonal y su capacidad para interpretar melodías y armonías lo hacen uno de los instrumentos más versátiles.</p>
                <p>Existen pianos de cola y verticales, y aunque ocupan bastante espacio, son piezas fundamentales tanto en salas de concierto como en estudios de grabación.</p>
            </Card>

            <Card
                titulo="Violín"
                imagen="https://www.eligetuviolin.com/images/violin-superior/frontal_violin.jpg"
                descripcionFoto="Violín"
            >
                <p>El violín es un instrumento de cuerda frotada que se toca con un arco. Es el más pequeño de la familia de cuerdas y también el más agudo. Su expresividad y agilidad lo hacen ideal para solos y melodías.</p>
                <p>Es esencial en orquestas, música de cámara y también tiene presencia en géneros como el folk, el tango y la música popular contemporánea.</p>
            </Card>
        </div>
    );
}

export default Ejercicio1;
