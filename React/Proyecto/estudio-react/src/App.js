
// Lecciones
import ComponenteBasico from "./components/ComponenteBasico/ComponenteBasico";
import ComponenteCSS from "./components/ComponenteCSS/ComponenteCSS";
import ComponenteProps from "./components/ComponenteProps/ComponenteProps";
import ComponenteDestructurado from "./components/ComponenteDestructurado/ComponenteDestructurado";
import ComponenteChildren from "./components/ComponenteChildren/ComponenteChildren";
import ComponenteCondicional from "./components/ComponenteCondicional/ComponenteCondicional";
import ComponenteIterativo from "./components/ComponenteIterativo/ComponenteIterativo";
import ComponenteEstado from "./components/ComponenteEstado/ComponenteEstado";

// Ejercicio
import Ejercicio1 from "./pages/Ejercicio1/Ejercicio1";

const frutas = [
  {
    nombre: "Manzana",
    color: "Rojo, verde",
    precio: 30,
    descripcion: "Fruta dulce y crujiente, ideal para comer fresca o en postres.",
  },
  {
    nombre: "Plátano",
    color: "Amarillo",
    precio: 30,
    descripcion: "Fruta energética y suave, comúnmente consumida como snack.",
  },
  {
    nombre: "Fresa",
    color: "Rojo",
    precio: 30,
    descripcion: "Fruta pequeña y jugosa, muy usada en postres y batidos.",
  },
  {
    nombre: "Sandía",
    color: "Verde por fuera, rojo por dentro",
    precio: 25,
    descripcion: "Fruta muy refrescante y dulce, con alto contenido de agua.",
  },
  {
    nombre: "Naranja",
    color: "Naranja",
    precio: 20,
    descripcion: "Fruta cítrica rica en vitamina C, ideal para jugos.",
  },
  {
    nombre: "Uva",
    color: "Morado o verde",
    precio: 40,
    descripcion: "Fruta pequeña y dulce, ideal para botanas o vino.",
  },
  
];

function App() {
  return (
    <div>
      <ComponenteChildren>
        <ComponenteBasico />
        <ComponenteCSS />
        <ComponenteProps 
          propString="Hola mundo!!!"
          propNum={ 10 }
          propBool={ true }
          propArray={['Primer valor de arreglo', 'Segundo valor de arreglo']}
          propObj={{atributo: 'Valor de atributo'}}
        />
        <ComponenteDestructurado
          numero={1}
          cadena={"Texto de la cadena"}
          booleano={true}
          arreglo={['1er valor', '2do valor']}
          objeto={{ valorNum: 1000 }}
        />
        <ComponenteChildren>
          <h1>&lt;ComponenteChildren&gt;</h1>
          <p>Este componente utiliza el prop especial <strong>children</strong> para renderizar contenido envuelto por el componente.</p>
          <p>Todas las etiquetas que se transfieren por este medio son manejadas como un todo a través de children</p>
        </ComponenteChildren>
        <ComponenteCondicional color={{nombre: 'azul', codigo: '#1ba7d8'}} />
        <ComponenteCondicional color={{nombre: 'rojo', codigo: '#ea263a'}} />
        <ComponenteIterativo datos={ frutas } />
        <ComponenteEstado />
      </ComponenteChildren>
    </div>
  );
}

// function App(){
//   return <Ejercicio1 />
// }

export default App;
