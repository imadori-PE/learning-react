import { useState, useCallback } from 'react'
import { Movies } from './components/ListMovies.jsx'
import { useSearch } from './hooks/useSearch.js'
import { useMovies } from './hooks/useMovies.js'
import './App.css'
import debounce from 'just-debounce-it'

 // 🔥 ✅

function App() {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedGetMovies = useCallback(
    debounce(search => {
      console.log('search', search)
      getMovies({ search })
    }, 300)
    , [getMovies]
  )


  const handleOnSubmit = (event) => {
    event.preventDefault()
    //const value=inputRef.current.value - <input ref={inputRef} name="query" placeholder=""
    //no controlado porque dependemos que siempre estén registrados los datos
    //const fields = Object.fromEntries(new window.FormData(event.target)) //obtiene un objeto de todos los input 
    //const { query } = fields
    //updateSearch(query)
    getMovies({ search })

  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  return (
    <div className='page'>
      <header>
        <h1>
          Buscador de películas
        </h1>
        <form className='form' onSubmit={handleOnSubmit}>
          <input style={{
            border: '1px solid transparent',
            borderColor: error ? 'red' : 'transparent'
          }}
            name='query' placeholder="Avengers, Star Wars, The Matrix..." onChange={handleChange} />
          <input name='check' type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">
            Buscar
          </button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        {
          loading ? <p>Cargando...</p> : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
