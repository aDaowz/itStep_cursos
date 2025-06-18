
// Lecciones
import ComponenteBasico from "./components/ComponenteBasico/ComponenteBasico";
import ComponenteCSS from "./components/ComponenteCSS/ComponenteCSS";
import ComponenteProps from "./components/ComponenteProps/ComponenteProps";
import ComponenteDestructurado from "./components/ComponenteDestructurado/ComponenteDestructurado";
import ComponenteChildren from "./components/ComponenteChildren/ComponenteChildren";
import ComponenteCondicional from "./components/ComponenteCondicional/ComponenteCondicional";

// Ejercicio
import Ejercicio1 from "./pages/Ejercicio1/Ejercicio1";

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
      </ComponenteChildren>
    </div>
  );
}

// function App(){
//   return <Ejercicio1 />
// }

export default App;
