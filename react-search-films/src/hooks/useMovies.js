import { useRef, useState, useMemo, useCallback } from 'react'
import { filterMovies } from '../services/filterMovies.js'

//useRef es un hook que permite crear una referencia mutable que persiste durante todo el ciclo de vida del componente
//puede guardar un elemento pero cada vez que cambia no renderiza el componente, guardar referencias del emento del DOM

export function useMovies({ search, sort }) {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    // el error no se usa pero puedes implementarlo
    // si quieres:
    const [, setError] = useState(null)
    //objeto mutable asi se renderice 
    const previousSearch = useRef(search)

    //usecallback es igual que un useMemo, solo está pensado para funciones
    const getMovies = useCallback(async ({ search }) => {
        console.log('getMovies()')
        if (search === previousSearch.current) return
        // search es ''

        try {
            setLoading(true)
            setError(null)
            previousSearch.current = search
            const newMovies = await filterMovies (search)
            setMovies(newMovies)
        } catch (e) {
            setError(e.message)
        } finally {
            // tanto en el try como en el catch
            setLoading(false)
        }
    }, [])

    //useMemo memoriza un valor, evitar tener que ordenar la lista sino ha cambiado
    //vuelve a ejecutar una funcion cada vez que cambien de orden o las peliculas
    const sortedMovies = useMemo(() => {
        console.log('sorted()')
        if (!movies) return;
        return sort
            ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
            : movies
    }, [sort, movies])

    return { movies: sortedMovies, getMovies, loading }
}