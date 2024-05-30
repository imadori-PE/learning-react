import { useState, useEffect } from 'react'
import { GetCatImage } from './hooks/getCatImage.js'
import { getRandomFact } from './services/facts.js'
import './App.css'

function App() {
  const [fact, setFact] = useState()
  const [imageURL, setImageURL]=useState()
 // const [image, setImage] = useState()

  const getCatFact = () => {
    getRandomFact().then( newFact => {
      setFact(newFact)
    })
  } 


  useEffect(getCatFact, [])

  useEffect(() => {
    GetCatImage({fact:fact})
  }, [fact]) 


  return (
    <main>
      <h1>Cat&apos;s App</h1>
      <button onClick={getCatFact}>
        Get new Fact
      </button>
        {fact && <p>{fact}</p>}
      {<img src='' alt={`Image extracted for ${fact}`} />}
    </main>
  )

}

export default App
