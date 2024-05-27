import { useState } from 'react';
import confetti from 'canvas-confetti';

import { TURNS } from './constants.js';
import { checkEndGame,checkWinner } from './logic/board.js';
import { Square } from './components/square.jsx';
import { WinnerModal } from './components/winnerModal.jsx';

import './App.css';


function App() {
    //un estado es un valor que cada vez que cambie rendizará el componente
    const [board, setBoard] = useState(Array(9).fill(null));
    console.log(board);

    const [turn, setTurn] = useState(TURNS.X);
    const [winner, setWinner] = useState(null); // null no hay ganador, false empate

    const updateBoard = (index) => {
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;

    if (board[index] || winner) return;

    //si no tiene nada ingresa
    //se crea un nuevo arrya porque las props y los estados son inmutables
    const newBoard = [...board]; //... copia superficial de un arrya con operador de propagación
    newBoard[index] = turn;

    setTurn(newTurn);
    setBoard(newBoard);
    //revisar si hay un ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
        confetti()
        setWinner(newWinner); //sincronía no bloquea el código que viene despues
    }else if(checkEndGame(newBoard)){
        setWinner(false);
    }

    };

    
    //resetear los estados a valores originales
    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setTurn(TURNS.X);
        setWinner(null);
    };

    return (
        <main className='board'>
            <h1> Tic Tac Toe</h1>
            <section className="game">
                {
                    board.map((value, index) => {
                        const item = `${value === null ? '' : value}`;
                        return (
                            <Square key={index} updateBoard={updateBoard} index={index}>
                                <span>{item}</span>
                            </Square>
                        )
                    })
                }
            </section>
            <section className='turn'>
                <Square isSelected={turn === TURNS.X}>
                    {TURNS.X}
                </Square>
                <Square isSelected={turn === TURNS.O}>
                    {TURNS.O}
                </Square>
            </section>
                
            <WinnerModal winner={winner} resetGame={resetGame}>

            </WinnerModal>

        </main>
    )
}

export default App
