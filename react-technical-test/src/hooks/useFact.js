import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts.js'

export function useFact() {
    const [fact, setFact] = useState()

    const getCatFact = () => {
        getRandomFact().then(newFact => {
            setFact(newFact)
        })
    }

    useEffect(getCatFact, [])

    return { fact, getCatFact}
}

