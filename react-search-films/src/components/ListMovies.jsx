/* eslint-disable react/prop-types */
import results from '../mocks/with-results.json'
import { filterFilms } from '../services/filterFilms.js'

 function ListOfMovies({ searchFilms }) {
   // const {Search}=results
    filterFilms(searchFilms).then( (Search) =>{
         const films=Search
         return (
            <ul className='movies'>
                {
                    films.map(element => {
                        console.log(element)
                        const { imdbID, Title, Year, Poster } = element
                        return (
                            <li key={imdbID}>
                                <h3>{Title}</h3>
                                <p>{Year}</p>
                                <img src={Poster} alt={Title}></img>
                            </li>
                        )
                    })
                }
            </ul>
        )
        }
    )
    
}


function NoMoviesResults () {
    return (
      <p>No se encontraron películas para esta búsqueda</p>
    )
  }

  export function Movies ({ movies }) {
    const hasMovies = movies?.length > 0
  
    return (
      hasMovies
        ? <ListOfMovies movies={movies} />
        : <NoMoviesResults />
    )
  }