import React, {useState} from "react";
import {calcularGanador} from "../helpers";
import Tablero from "./Tablero";

const Juego = () => {
    const [historial, setHistorial] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber]= useState(0);
    const [xIsNext, setXisNext]= useState(true);
    const ganador = calcularGanador (historial[stepNumber]);
    const xO = xIsNext ? "X" : "O";
    
const handleClick = (i) => {
    const puntos = historial.slice(0, stepNumber + 1);
    const Actual = puntos[stepNumber];
    const cuadrados = [...Actual];
    // return si gana o esta ocupada
    if (ganador || cuadrados[i]) return;
    // seleccionar cuadrado
    cuadrados[i] = xO;
    setHistorial([...puntos, cuadrados]);
    setStepNumber(puntos.length);
    setXisNext(!xIsNext);
  };

  const saltar = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const movimientos = () =>
  historial.map((_step, movimiento) => {
    const destino = movimiento ? `Movimiento #${movimiento}` : "Jugar de nuevo";
    return (
      <li key={movimiento}>
        <button onClick={() => saltar(movimiento)}>{destino}</button>
      </li>
    );
  });

  return (
    <>
      <h1>Juego de tres en raya</h1>
      <Tablero cuadrados={historial[stepNumber]} onClick={handleClick} />
      <div className="info-wrapper">
        <div>
          <h3>Historial</h3>
          {movimientos()}
        </div>
        <h3>{ganador ? "Ganador: " + ganador : " Jugador: " + xO}</h3>
      </div>
    </>
  );
};

export default Juego;
