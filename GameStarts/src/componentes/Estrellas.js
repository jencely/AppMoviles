import React from 'react';
import { useState } from "react";

export function NumeroEstrellas() {

    const [estrellasN,setEstrellasN] = useState("")
    const handleSumit = () =>{
     props.setLogin(true)
 
    }
     return (
         <div>
             <form onSubmit={handleSumit}>
                 <h1>Estrellas deseadas</h1>
                 <input
                 value={estrellasN} 
                 onChange={e => setEstrellasN(e.target.value)}
                 >
                 </input>
                 <button>Añadir</button>
             </form>
         </div>
     )
 }
 