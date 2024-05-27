import { useState } from 'react';
import './App.css'
import { TwitterFollowCard } from './twitterFollowCard'
//le estamos diciendo al empaquetador de aplicaciones que en este archivo voy a usar .jsx

export function App() {
    //<> usar esto en vez de React.Fragment
    //función que se lleva al hijo y dentro de ella le agrega la arroba al username
    const fFormat = (username) => `@${username}`;

    const changeName = () => {
        setName('midudev'); //los cambios se propagan a los niveles inferiores por ello vuelve renderizar todos los twitterfollowcard
    };

    //por propieda también se puede enviar elementos como <span>@xxx</span>
    const [name, setName] = useState('imadorisempai');
    console.log('render with name: ', name);

     //en la vida real debería ser un arreglo de objetos que recibo para listar
     const users = [
        {
            username: name,
            nameuser: 'Junior Miguel Romero Maza',
            isFollowing: true
        },
        {
            username: 'pamelaanderson',
            nameuser: 'Pamel Anderson',
            isFollowing: false
        },
        {
            username: 'SergioRamos',
            nameuser: 'Sergio Ramos',
            isFollowing: false
        },
        {
            username: 'KMbappe',
            nameuser: 'Kylian Mbappé',
            isFollowing: true
        }
    ];


    //imadori es un objeto y se puede pasar todo un objeto y pasar todas las propiedades juntas
    //pero no es aconsejable pero se puede 
    //const imadori = {formatUserName:fFormat,username:name, initialIsFollowing:true}; TwitterFollowCard {...imadori}

    return (
        //los nombres que aparecen son children de twitterfollowcarc
        <section className='App'>
            {/* comentario dentro del render lo que devuelve el mapeo de llaves es lo que queremos renderizar */}
            {
                users.map(user => {
                    const { username, nameuser, isFollowing } = user;
                    //cuando se recorre una lista todo hijo debe tener un key
                    return (
                        <TwitterFollowCard
                            key={username} 
                            username={username}
                            initialIsFollowing={isFollowing}
                            formatUserName={fFormat} >
                            {nameuser}
                        </TwitterFollowCard>
                    )
                })
            }

            <button onClick={changeName}>Cambio de usuario </button>
        </section>
    )
}