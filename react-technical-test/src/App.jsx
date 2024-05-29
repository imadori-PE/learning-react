import { useState, useEffect } from 'react'
import { useCatImage } from './hooks/getCatImage.js'
import { getRandomFact } from './services/facts.js'
import './App.css'

function App() {
  const [fact, setFact] = useState()
  const [image, setImage] = useState()

  const getCatFact = () => {
    getRandomFact().then((newFact) => {
      console.log(newFact)
      setFact(newFact)
    })
  }

  useEffect(() => {
    const newImage = useCatImage(fact)
    setImage(newImage)
  }, [fact])

  useEffect(getCatFact, [])

  return (
    <main>
      <h1>Cat&apos;s App</h1>
      <button onClick={getCatFact}>
        Get new Fact
      </button>
      <p>
        {fact}
      </p>
      <img src={image} alt={`Image extracted for ${fact}`} />
    </main>
  )

}

export default App
