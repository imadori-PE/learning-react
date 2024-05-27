import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

import { TURNS } from './constants.js';
import { checkEndGame, checkWinner } from './logic/board.js';
import { saveGameToStorage, resetGameStorage } from './logic/storage/index.js';
import { Square } from './components/square.jsx';
import { WinnerModal } from './components/winnerModal.jsx';

import './App.css';


function App() {
    //un estado es un valor que cada vez que cambie rendizará el componente
    const [board, setBoard] = useState(() => {
        console.log('Inicializando estado del board');
        const boardFromStorage = window.localStorage.getItem('board');
        return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null);
    }
    );

    const [turn, setTurn] = useState(() => {
        console.log('Inicializando estado del turno');
        const boardFromStorage = window.localStorage.getItem('turn');
        return boardFromStorage ?? TURNS.X; //?? validda si esto es null o undefined
    }
    );

    const [winner, setWinner] = useState(null); // null no hay ganador, false empate

     //resetear los estados a valores originales
     const resetGame = () => {
        setBoard(Array(9).fill(null));
        setTurn(TURNS.X);
        setWinner(null);
        resetGameStorage();
    };

    const updateBoard = (index) => {
        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;

        if (board[index] || winner) return;

        //si no tiene nada ingresa
        //se crea un nuevo arrya porque las props y los estados son inmutables
        const newBoard = [...board]; //... copia superficial de un arrya con operador de propagación
        newBoard[index] = turn;

        setTurn(newTurn);
        setBoard(newBoard);

        //guardar aqui partida
        saveGameToStorage(
            {board: newBoard, turn: newTurn}
        )

        //revisar si hay un ganador
        const newWinner = checkWinner(newBoard);
        if (newWinner) {
            confetti()
            setWinner(newWinner); //sincronía no bloquea el código que viene despues
        } else if (checkEndGame(newBoard)) {
            setWinner(false);
        }

    };

    //el useEffect se ejecuta cada vez que se renderiza algo, tiene dos parametros  una función y un array de dependencias que 
    //puede ser opcional; cuando se pasa una lista de dependencias la función sólo se ejecutará una sola vez
    useEffect(()=>{
        console.log('useEffect');
        
    },[ turn, board]); // ejecuta la función cada vez que cambia el valor de la dependencia que se pasa
    //util para guardar en la base datos o hacer una petición a un servicio, para hacer un
    
    return (
        <main className='board'>
            <h1> Tic Tac Toe</h1>
            <button onClick={resetGame}>Reset game</button>
            <section className="game">
                {
                    board.map((value, index) => {
                        return (
                            <Square key={index} updateBoard={updateBoard} index={index}>
                                {value}
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
