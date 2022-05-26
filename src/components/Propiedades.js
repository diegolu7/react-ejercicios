import React from "react";



export default function Propiedades(props) {
  return (
    <>
      <h2>{props.porDefecto}</h2>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.booleano ? "true" : "false"}</li>
      </ul>
    </>
  );
}

Propiedades.defaultProps = {
  porDefecto: "las Props",
}