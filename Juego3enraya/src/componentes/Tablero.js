import React from "react";
import Cuadrados from "./Cuadrados";

const Tablero = ({cuadrados, onClick}) =>  (
    <div className="tablero">
        {cuadrados.map((cuadrados, i)=><Cuadrados key={i} value={cuadrados} onClick={() => onClick(i)}/>)}
    </div>
);

export default Tablero;