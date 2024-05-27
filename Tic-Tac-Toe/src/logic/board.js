import { WINNER_COMBOS } from '../constants.js'

//recorre un array para revisar si todos los elementos tienen algo 
//diferente al null ya sea una X u O
export const checkEndGame = (newBoard) => {
    //every retorna true si todos los elementos cumplen la condiciones
    return newBoard.every((square) => square != null);
};

export const checkWinner = (boardToCheck) => {
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

/*cuando hay funciones que solo ejecutan sólo lógica javascript se podrían separar en un archivo y renombrarlo utils */