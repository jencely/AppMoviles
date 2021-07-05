import React from 'react';

export const Reiniciar = props => (
    <div className="game-done">
        <div
            className="message"
            style={{ color: props.gameStatus === 'lost' ? 'red' : 'green' }}
        >
            {props.gameStatus === 'lost' ? 'ohh Perdiste' : 'Genial'}
        </div>
        <button onClick={props.onClick}>Jugar de nuevo</button>
    </div>
);