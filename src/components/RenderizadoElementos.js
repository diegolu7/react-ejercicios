import React, { Component } from "react";
import data from "../helpers/data.json";

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
              <li key={i}>{el}</li>
            )
          }
        </ol>
      </>
    );
  }
}
// MIN8