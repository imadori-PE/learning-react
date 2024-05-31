const CAT_IMAGE_ENDPOINT = 'https://cataas.com'

//en vez de fetch se puede usar axios, react query, SWR
//ascii ` plantilla literal alt + 96 

export const  getCatImage = async (tag) => {
    const sourceURL= `https://cataas.com/cat?json=true`

    const response = await fetch(sourceURL)
    const data = await response.json()
    const { _id } = data
    const url = `${CAT_IMAGE_ENDPOINT}/cat/${_id}/says/${tag}`
    return url
}
