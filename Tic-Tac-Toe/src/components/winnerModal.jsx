import { Square } from './square.jsx'
//el renderizado lo más limpio posible
export function WinnerModal({winner, resetGame })
{
    //si aún no hay ganador no debería mostrar nada
    if (winner === null) return null;

    const winnerText = winner === false ? 'Empate' : 'Ganó:'

    return (
        <section className='winner'>
          <div className='text'>
            <h2>{winnerText}</h2>
    
            <header className='win'>
              <Square>{winner}</Square>
            </header>
    
            <footer>
              <button onClick={resetGame}>Empezar de nuevo</button>
            </footer>
          </div>
        </section>
      )
}