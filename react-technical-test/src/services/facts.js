const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
/*
    La API Fetch proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP,
     tales como peticiones y respuestas. También provee un método global fetch() que proporciona una forma 
     fácil y lógica de obtener recursos de forma asíncrona por la red.
*/
export async function getRandomFact () {
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  const data = await res.json()
  console.log(data); /*
    {"fact": "A cat's appetite is the barometer of its health. Any cat that does not eat or drink for more than two days should be taken to a vet.",
    "length": 132
}*/
  const { fact } = data //de data solo está que devuelve el fact
  return fact
}

//forma original de recorrer una API con fetch.
//se puede crear a async function una función rápidamente dándole clic  a los ... en el nombre de la aplicacion
export const getRandomFactTwo = () =>{
  return fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(res => res.json())
        .then(data => {
          const {fact} = data
          return fact
        })
}

//esto puede ser usado en vue, react, etc
export const getRandomFactThree = async () =>{
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT);
  const data = await res.json();
  const { fact } = data;
  return fact;
}