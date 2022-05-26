import React, { Component } from "react";
import data from "../helpers/data.json";

function ElementoLista(props) {
  return (
    <li>
      <a href={props.el.web} target="_blank">{props.el.name}</a>
    </li>
  )
}

export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ["Primavera", "Otoño", "Verano", "Invierno"],
    };
  }
  render() {
    console.log(data)
    return (
      <>
        <h2>Renderizado de Elementos</h2>
        <h3>Estaciones del año</h3>
        <ol>
          {
            this.state.seasons.map((el, i) =>
              <li key={el}>{el}</li>
            )
          }
        </ol>
        <h3>Frameworks Frontend JS</h3>
        <ul>
          {
            data.frameworks.map((el, i) => <ElementoLista key={el.id} el={el} />)

          }
        </ul>
      </>
    );
  }
}
// MIN8