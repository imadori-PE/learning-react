import { useEffect, useState } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  // para recuperar la imagen cada vez que tenemos una cita nueva
  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')
    const sourceURL= `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
    console.log(threeFirstWords,sourceURL)
    setImageUrl(sourceURL)

    /*
    //ascii ` plantilla literal alt + 96 
    fetch(url)
      .then(res => res.json())
      .then(response => {
        const { _id } = response
        const url = `/cat/${_id}/says/${threeFirstWords}`
        setImageUrl(url)
      })*/
  }, [fact])

  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}