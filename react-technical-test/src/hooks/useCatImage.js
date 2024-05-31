import {  useState, useEffect } from 'react'
import { getCatImage } from '../services/catImage.js'

//custom hook
export function useCatImage ({ fact }) {

 const [imageUrl, setImageUrl] = useState()

  // para recuperar la imagen cada vez que tenemos una cita nueva
  useEffect(() => {
   if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')
    setImageUrl(getCatImage(threeFirstWords))
  
  }, [fact])

  return { imageUrl }
}