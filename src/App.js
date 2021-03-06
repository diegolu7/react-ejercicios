import React from 'react';
// import logo from './logo.svg';
import Componente from "./components/Componente";
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <section>
          <Componente msg="hola soy un componente funcional desde una props" />
          <hr />
          <Propiedades
            cadena="Esto es una cadena de texto"
            numero={19}
            booleano={true}
          />
          <hr />
          <Estado></Estado>
          <hr />
          <RenderizadoCondicional />
          <hr />
          <RenderizadoElementos />
        </section>
      </header>
    </div>
  );
}
export default App;

