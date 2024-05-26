import './App.css'
//le estamos diciendo al empaquetador de aplicaciones que en este archivo voy a usar .jsx
//la base de la reutilización en react son los parámetros las propiedades
//para que un componente sea reutilizable se tiene que pasarle parámetros
export function TwitterFollowCard({username, name,isFollowing}){
    const imageSrc= `https://unavatar.io/twitter/${username}`; //crear constante y un template string
    console.log({isFollowing});
    return (
        <article className="tw-follow-card">
            <header className="tw-follow-card-header">
                <img alt="Avatar DevianArt" src={imageSrc}/>
                <div>
                    <strong>{name}</strong>
                    <span>@{username}</span>
                </div>
            </header>
            <aside>
                <button>
                    Seguir
                </button>
            </aside>
        </article>
    )
}