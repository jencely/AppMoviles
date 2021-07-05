import React, { useState } from 'react'


 export const Sesion = ({ handleSubmited,handleStars}) => {

    const [usuario, setUsuario] = useState('')

    let jugador ={};
    
    const [estrella, setEstrella] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault()
        jugador.usuario=usuario
        jugador.puntuacion=0
        handleSubmited(jugador)
        handleStars(estrella)
    }
    return (     
        <section class="form-register">
            <h1>Juego Contar estrellas</h1><p>

            </p>
        <div class="controls">
            <form onSubmit={handleSubmit}>
                <h4>Ingrese su usuario</h4>
                <input
                  type="text"
                  id=""
                  label="Ingrese usuario"
                  value ={usuario}
                  onChange = {e => setUsuario(e.target.value)}
                  required
                  
                />
                <h4>Ingrese el numero de estrellas</h4>
                  <input
                  type="text"
                  id=""
                  label="Ingrese usuario"
                  value ={estrella}
                  onChange = {e => setEstrella(e.target.value)}
                  required
                />
                                           
                 <p class="block"> <button className="btn-neon">
                 <span id="span1"></span>
                 <span id="span2"></span>
                 <span id="span3"></span>
                 <span id="span4"></span>
                     Ingresar
                     </button>
                </p>
                 

            </form>

           
        </div>
        </section>
    )
} 