import { useState } from "react";
import "./App.css";
import Preguntas from "./componentes/Preguntas.jsx";
import { preguntas } from "./utils/preguntas";
import Inicio from "./componentes/Inicio";
import Puntaje from "./componentes/Puntaje";
import Lista from "./componentes/Lista";

function App() {
  const [posicion, setPosicion] = useState(0);
  const [name, setName] = useState("");
  const [puntaje, setPuntaje] = useState(0);
  const [total, setTotal] = useState([]);
  return (
    <>
      {posicion == 0 && (
        <Inicio name={name} setName={setName} setPosicion={setPosicion} />
      )}
      {posicion > 0 && posicion < 4 && (
        <Preguntas
          Categoria={preguntas[posicion - 1].categoria}
          numero={posicion}
          pregunta={preguntas[posicion - 1].pregunta}
          respuestas={preguntas[posicion - 1].respuestas}
          respuesta={preguntas[posicion - 1].respuesta}
          setPosicion={setPosicion}
          posicion={posicion}
          puntaje={puntaje}
          setPuntaje={setPuntaje}
        />
      )}
      {posicion == 4 && (
        <Puntaje
          name={name}
          puntaje={puntaje}
          setTotal={setTotal}
          total={total}
          setPosicion={setPosicion}
        />
      )}
      {posicion == 5 && (
        <Lista
          setPosicion={setPosicion}
          total={total}
          setName={setName}
          setPuntaje={setPuntaje}
        />
      )}
    </>
  );
}

export default App;
