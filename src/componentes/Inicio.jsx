import React from "react";
import "../App.css";

const Inicio = ({ name, setName, setPosicion }) => {
  const handleInputChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div className="contenedor">
      <div className="encabezado">
        <div className="pregunta" id="pregunta">
          <h2>Escribe tu nombre</h2>
        </div>
        <input type="text" value={name} onChange={handleInputChange} />
        <div className="pregunta" id="pregunta">
          <button onClick={() => setPosicion(1)}>ir a preguntas</button>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
