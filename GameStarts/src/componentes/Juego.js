import React from 'react';
import { Numeros } from './Numeros';
import { Reiniciar } from './Reiniciar';
import { NumeroEstrellas } from './Estrellas';
import { useGameState } from './Estado';
import { Comenzar } from './Comenzar';
import { utils } from './utils';




export const Juego = props => {
    const {
        stars,
        availableNums,
        candidateNums,
        secondsLeft,
        setGameState,
    } = useGameState();

    const candidatesAreWrong = utils.sum(candidateNums) > stars;
    const gameStatus = availableNums.length === 0
        ? 'won'
        : secondsLeft === 0 ? 'lost' : 'active'

    const numberStatus = number => {
        if (!availableNums.includes(number)) {
            return 'used';
        }

        if (candidateNums.includes(number)) {
            return candidatesAreWrong ? 'wrong' : 'candidate';
        }

        return 'available';
    };

    const onNumberClick = (number, currentStatus) => {
        if (currentStatus === 'used' || secondsLeft === 0) {
            return;
        }

        const newCandidateNums =
            currentStatus === 'available'
                ? candidateNums.concat(number)
                : candidateNums.filter(cn => cn !== number);

        setGameState(newCandidateNums);
    };

    return (
        <div className="game">
            <div className="help">
                Elija 1 o más números que sumen la cantidad de estrellas
            </div>
            <NumeroEstrellas />
            <div className="body">
                <div className="left">
                    {gameStatus !== 'active' ? (
                        <Reiniciar onClick={props.startNewGame} gameStatus={gameStatus} />
                    ) : (
                        <Comenzar count={stars} />
                    )
                    }
                </div>
                <div className="right">
                    {utils.range(1, 9).map(number => (
                        <Numeros
                            key={number}
                            status={numberStatus(number)}
                            number={number}
                            onClick={onNumberClick}
                        />
                    ))}
                </div>
            </div>
            <div className="timer">Tiempo restante: {secondsLeft}</div>
        </div>
    );
};