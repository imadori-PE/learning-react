import { Square } from './square.jsx'
import { useState } from 'react';
import './App.css'

const TURNS = {
    X: 'X',
    O: 'O'
};

const WINNER_COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

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
        setWinner(newWinner); //sincronía no bloquea el código que viene despues
        console.log(winner);
    }

    };

    const checkWinner = (boardToCheck) => {
        //revisan todas las combinaciones ganadoras
        for (const combo of WINNER_COMBOS) {
            const [a, b, c] = combo;
            if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] &&
                boardToCheck[b] === boardToCheck[c]
            )
                return boardToCheck[a];
        }
        return null;
    }

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

        </main>
    )
}

export default App
