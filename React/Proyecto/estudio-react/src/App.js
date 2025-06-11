import ComponenteBasico from "./components/ComponenteBasico/ComponenteBasico";
import ComponenteCSS from "./components/ComponenteCSS/ComponenteCSS";
import ComponenteProps from "./components/ComponenteProps/ComponenteProps";
import ComponenteDestructurado from "./components/ComponenteDestructurado/ComponenteDestructurado";

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
