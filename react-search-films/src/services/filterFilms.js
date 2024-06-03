const API_KEY = 'cf628b41'
const OMDb_API_ENDPOINT = `https://omdbapi.com/?apikey=${API_KEY}`

//para filtrar las películas dependiendo de una entrada de texto
export const filterFilms = async (text) => {
    const res = await fetch(`${OMDb_API_ENDPOINT}&s=${text}`)
    const data = await res.json()
    const { Search } = data
    return Search
}