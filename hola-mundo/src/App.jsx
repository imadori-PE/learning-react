import './App.css'
import { TwitterFollowCard } from './twitterFollowCard'
//le estamos diciendo al empaquetador de aplicaciones que en este archivo voy a usar .jsx

export function App(){
    //<> usar esto en vez de React.Fragment
    return (
        <div className='App'> 
            <TwitterFollowCard username="imadorisempai" name="Junior Miguel Romero Maza" isFollowing/>
            <TwitterFollowCard username="pamelaanderson" name="Pamela Anderson" isFollowing/>
            <TwitterFollowCard username="SergioRamos" name="Sergio Ramos" isFollowing={false}/>
            <TwitterFollowCard username="KMbappe" name="Kylian Mbappé" isFollowing/>
        </div>
    )
}