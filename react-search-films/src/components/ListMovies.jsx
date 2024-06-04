/* eslint-disable react/prop-types */
 function ListOfMovies({ movies }) {
 
         return (
            <ul className='movies'>
                {
                    movies.map(element => {
                       // console.log(element)
                        const { id, title, year, poster } = element
                        return (
                            <li key={id}>
                                <h3>{title}</h3>
                                <p>{year}</p>
                                <img src={poster} alt={title}></img>
                            </li>
                        )
                    })
                }
            </ul>
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