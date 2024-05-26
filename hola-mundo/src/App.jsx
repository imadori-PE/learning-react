import {useState} from 'react';
import './App.css'
import { TwitterFollowCard } from './twitterFollowCard'
//le estamos diciendo al empaquetador de aplicaciones que en este archivo voy a usar .jsx

export function App(){
    //<> usar esto en vez de React.Fragment
    const fFormat = (username) => `@${username}`;
    //por propieda también se puede enviar elementos como <span>@xxx</span>
    const [name,setName]=useState ('imadorisempai');

    console.log('render with name: ', name);
    const changeName = () =>{
        setName('midudev'); //los cambios se propagan a los niveles inferiores por ello vuelve renderizar todos los twitterfollowcard
    };

    //imadori es un objeto y se puede pasar todo un objeto y pasar todas las propiedades juntas 
    const imadori = {formatUserName:fFormat,username:name, initialIsFollowing:true};
 
    return (
        //los nombres que aparecen son children de twitterfollowcarc
        <section className='App'> 
        {/* comentario dentro del render */}
            <TwitterFollowCard {...imadori}>
                    Junior Miguel Romero Maza
            </TwitterFollowCard> 
            <TwitterFollowCard
                formatUserName={fFormat} 
                username="pamelaanderson" >
                    Pamela Anderson
            </TwitterFollowCard> 
            <TwitterFollowCard
                formatUserName={fFormat} 
                username="SergioRamos">
                    Sergio Ramos
            </TwitterFollowCard> 
            <TwitterFollowCard
                formatUserName={fFormat} 
                username="KMbappe" 
                initialIsFollowing={true}>
                    Kylian Mbappé
            </TwitterFollowCard> 
            <TwitterFollowCard
                formatUserName={fFormat}>
            </TwitterFollowCard> 
            <button onClick={changeName}>Cambio nombre </button>
        </section>
    )
}