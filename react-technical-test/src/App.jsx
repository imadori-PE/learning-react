import { useCatImage } from './hooks/useCatImage.js'
import { useFact } from './hooks/useFact.js'
import './App.css'

function App() {
  const {fact , getCatFact}= useFact()
  //{fact} es un parámetro nombrado
  const {imageURL}=useCatImage({fact}) 

  const getFact = async () => {
    getCatFact()
    } 

  return (
    <main>
      <h1>Cat&apos;s App</h1>
      <button onClick={getFact}>
        Get new Fact
      </button>
        {fact && <p>{fact}</p>}
      {imageURL && <img src={imageURL} alt={`Image extracted for ${fact}`} />}
    </main>
  )

}

export default App
