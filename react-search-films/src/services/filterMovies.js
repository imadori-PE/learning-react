const API_KEY = 'cf628b41'
const OMDb_API_ENDPOINT = `https://omdbapi.com/?apikey=${API_KEY}`

//para filtrar las películas dependiendo de una entrada de texto
export const filterMovies = async (text) => {

    if (text === '') return null;

    try {
        const res = await fetch(`${OMDb_API_ENDPOINT}&s=${text}`)
        const data = await res.json()
        const { Search } = data

        //mapear por si el API que no nos pertenece cambia de parámetros y en el resto de la aplicación se 
        //manejen los mismos campos
        const mappedMovies = Search?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
        }))
        return mappedMovies
    }
    catch (e) {
        throw new Error('Error searching movies')
    }

    // console.log(Search,mappedMovies)

}
