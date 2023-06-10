import React from "react";
import "../App.css";

const Puntaje = ({ name, puntaje, setTotal, total, setPosicion }) => {
  const onClick = () => {
    const total1 = total;
    total1.push({ name: name, puntaje: puntaje });
    setTotal(total1);
    setPosicion(12);
  };
  return (
    <div className="contenedor">
      <div className="encabezado">
        <div className="pregunta" id="pregunta">
          <h2>Puntaje de {name}</h2>
        </div>
        <div className="pregunta" id="pregunta">
          <h2>{puntaje}</h2>
        </div>
        <div className="pregunta" id="pregunta">
          <button onClick={onClick}>ir a ver resultados</button>
        </div>
      </div>
    </div>
  );
};

export default Puntaje;
