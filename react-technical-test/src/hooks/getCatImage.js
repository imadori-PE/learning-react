import {  useState } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function GetCatImage ({ fact }) {

 //const [imageUrl, setImageUrl] = useState()

  // para recuperar la imagen cada vez que tenemos una cita nueva
 // useEffect(() => {
   if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')
    const sourceURL= `https://cataas.com/cat?json=true`
    //setImageUrl(sourceURL)

    //en vez de fetch se puede usar axios, react query, SWR
    
    //ascii ` plantilla literal alt + 96 
    
    fetch(sourceURL)
      .then(res => res.json())
      .then(response => {
        const { _id } = response
        const url = `/cat/gif/${_id}/says/${threeFirstWords}`
       // setImageUrl(url)
        console.log(`${CAT_PREFIX_IMAGE_URL}${url}`)
      })
 // }, [fact])

 // return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}