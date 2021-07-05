import React from 'react';
import { useState } from 'react';
import { Juego } from './components/Juego';
import { Sesion } from './components/Sesion';
import './App.css';
import { Usuarios } from './components/Usuarios';
import { ListaDeUsuario } from './components/ListaDeUsuario';


const Inicio = () => {
  const [gameId, setGameId] = useState(1);

  const [nuevoJugador, setNuevoJugador] = useState(Usuarios)
  
  const [nuevaEstrella, setNuevaEstrella] = useState(0)

  const añadirJugador = (jugador) => {
    setNuevoJugador([...nuevoJugador, jugador])
  }
  const añadirEstrellas = (cantidad) =>{
    setNuevaEstrella(cantidad)
  }
  return( 

  <> 

      <Sesion handleSubmited = {añadirJugador}
              handleStars = {añadirEstrellas}
      ></Sesion>

        <Juego key={gameId} 
        startNewGame={() => setGameId(gameId + 1)} 
        nuevoJugador= {nuevoJugador} 
        estrella ={nuevaEstrella}
        onSubmit={añadirJugador}/>
      
  
   
  
  <div>
  <ListaDeUsuario nuevoJugador = {nuevoJugador}></ListaDeUsuario>
  </div>
  </>
  
  );
}

export const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue',
};

export default Inicio;