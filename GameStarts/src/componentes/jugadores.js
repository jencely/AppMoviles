import React, { useState } from 'react';


export const Jugador = (props) => {

   const [jugador,setJugador] = useState("");
   const handleSumit = () =>{
    props.setEstrellasP(true)

   }
    return (
        <div>
            <form onSubmit={handleSumit}>
                <h1>Ingrese su nombre</h1>
                <input
                value={jugador} 
                onChange={e => setJugador(e.target.value)}
                >
                </input>
                <button>Agregar</button>
            </form>
        </div>
    )
}
