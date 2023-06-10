import React from "react";
import "../App.css";

const Lista = ({ total, setPosicion, setName, setPuntaje }) => {
  const onClick = () => {
    setName("");
    setPuntaje(0);
    setPosicion(0);
  };
  return (
    <div className="contenedor">
      <div className="encabezado">
        <div className="pregunta" id="pregunta">
          <h2>Puntaje de todos</h2>
        </div>
        {console.log(total)}
        {total.map((value, key) => {
          return (
            <div className="pregunta" id="pregunta" key={key}>
              {value.name} : {value.puntaje}
            </div>
          );
        })}
        <button onClick={onClick}>inciar nuevo cuestionario</button>
      </div>
    </div>
  );
};

export default Lista;
