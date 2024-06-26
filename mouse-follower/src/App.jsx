import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleKey = (event)=>{
    event.ctrlKey  && setEnabled(!enabled);
  }

  window.addEventListener('keydown', handleKey);

  const handleClick = () => {
    setEnabled(!enabled);
  }

  //se puede tener varios efectos separados
  useEffect(()=>{
    document.body.classList.toggle('no-cursor', enabled)
    return ()=>{
      document.body.classList.remove('no-cursor')
    }
  }, [enabled]); 
  //[] solo se ejecuta una vez cuando se monta el componente
  //[enabled] se ejecuta cuando se cambia enabled y cuando se monta el componente
  //undefined se ejecuta cada vez que se renderiza el componente
 
  useEffect(() => {
    console.log('efecto', {enabled})

    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
      console.log('handleMove',{ clientX, clientY }  )
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    //limpiar el efecto, el return se ejecuta siempre que se desmonte el componente o se ejecuta cada vez que
    //la dependencia cambia entonces limpia la subscripcion anterior para el nuevo valor de la dependencia.
    //el limpiar las subscripciones mejora el rendimiento 
    return () => {
      console.log('cleanup')
      window.removeEventListener('pointermove', handleMove)
    }

  }, [enabled])

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />

      <h3>Mouse Follower</h3>
      <button onClick={handleClick}>
        {enabled ? 'Desactivar' : 'Activar'} Seguir puntero 
      </button>
    </main>
  )
}

export default App
