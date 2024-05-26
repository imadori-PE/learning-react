import {useState} from 'react'; //manejar estados hooks permiten añadir funcionaliddad a los componentes, diferentes puntos del renderizado
import './App.css';
//le estamos diciendo al empaquetador de aplicaciones que en este archivo voy a usar .jsx
//la base de la reutilización en react son los parámetros las propiedades
//para que un componente sea reutilizable se tiene que pasarle parámetros
//lo que está entre llaves se llaman propiedades: props y deberían ser inmutables
export function TwitterFollowCard({children, formatUserName,username='unknown', initialIsFollowing}){
    // username = `@${username}` esto es un error porque se está modificando una prop mejor crear constantes
    const imageSrc= `https://unavatar.io/twitter/${username}`; //crear constante y un template string

    // también se puede recibir elementos como parámetros
    //children en este ejemplo es un nombre pero podría ser un elemento o hasta un componente
    //el botón seguir enseñará el manejo de estados en react pues el botón tendrá un comportamiento si seguimos o no a una persona
    //si se una prop para inicializar un estado, esto solo se inicializa una vez
    const [isFollowing,setIsFollowing]=useState(initialIsFollowing); //devuelve un array primera posicion valor del estado y la segunda funcion que permite actualizar ese estado
    
    const text = isFollowing?  'Siguiendo' :'Seguir'; //ternaria
    const buttonClass=  isFollowing? 'tw-follow-card-button' :'tw-follow-card-button is-following';
    
    const handleClick = () => {
        setIsFollowing(!isFollowing);
    };

    console.log("Twitter follow card, username: ",username);
    return (
        <article className="tw-follow-card">
            <header className="tw-follow-card-header">
                <img alt="Avatar DevianArt" src={imageSrc}/>
                <div>
                    <strong>{children}</strong>
                    <span>{formatUserName(username)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClass} onClick={handleClick}>
                    {text}  
                </button>
            </aside>
        </article>
    )
}