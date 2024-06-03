import { useEffect, useState } from 'react'
import { ListMovies } from './components/ListMovies.jsx'
import './App.css'

function App() {
  const [hasSearch, setHasSearch] = useState(false)
  const [searchFilm, setSearchFilm] = useState()

  useEffect(() =>{ 
      if (hasSearch)
        {
          const newSearch=document.getElementsByName('query')[0].value
          setSearchFilm(newSearch)
        }
   }, [hasSearch] )

  const handleOnSubmit = (event) =>{
    event.preventDefault()
    setHasSearch(true)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    console.log(newSearch)
    setHasSearch(false)
    //setSearchFilm(newSearch)
  }


  return (
    <div className='page'>
      <header>
        <h1>
          Buscador de películas
        </h1>
        <form className='form' onSubmit={handleOnSubmit}>
          <input name="query" placeholder="Avengers, Star Wars, The Matrix..." onChange={handleChange} />
          <input type="checkbox" />
          <button type="submit">
            Buscar
          </button>
        </form>
      </header>
      <main>
        { hasSearch&&<ListMovies searchFilms={searchFilm}></ListMovies>}
      </main>
    </div>
  )
}

export default App
