import React from "react";
import "../App.css";

const Preguntas = ({
  Categoria,
  numero,
  pregunta,
  respuestas,
  respuesta,
  setPosicion,
  posicion,
  puntaje,
  setPuntaje,
}) => {
  const onClick = (numero) => {
    console.log(respuesta, "respuesta");
    if (numero === respuesta) {
      console.log("entro", numero, respuesta);
      setPuntaje(puntaje + 1);
    }
    setPosicion(posicion + 1);
  };
  return (
    <div className="contenedor">
      <div className="puntaje" id="puntaje">
        10
      </div>
      <div className="encabezado">
        <div className="categoria" id="categoria">
          {Categoria}
        </div>
        <div className="numero" id="numero">
          {numero}
        </div>
        <div className="pregunta" id="pregunta">
          <h2>{pregunta}</h2>
        </div>
      </div>
      <div className="btn" id="btn1" onClick={() => onClick(0)}>
        {respuestas.res1}
      </div>
      <div className="btn" id="btn2" onClick={() => onClick(1)}>
        {respuestas.res2}
      </div>
      <div className="btn" id="btn3" onClick={() => onClick(2)}>
        {respuestas.res3}
      </div>
      <div className="btn" id="btn4" onClick={() => onClick(3)}>
        {respuestas.res4}
      </div>
    </div>
  );
};

export default Preguntas;