import React from "react";

export const ListaDeUsuario = (props) => {
  return (
      <div className="lista">
        <h1>Puntaje</h1>
          {props.nuevoJugador.map(jugador => <div key={jugador.usuario}><p>{jugador.usuario}</p> <p>{jugador.puntuacion}</p></div>)}
      </div>
  )
}
