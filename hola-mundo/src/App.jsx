import './App.css'
import { TwitterFollowCard } from './twitterFollowCard'
//le estamos diciendo al empaquetador de aplicaciones que en este archivo voy a usar .jsx

export function App(){
    //<> usar esto en vez de React.Fragment
    return (
        <> 
            <TwitterFollowCard username="imadorisempai" name="Junior Miguel Romero Maza"/>
            <TwitterFollowCard username="pamelaanderson" name="Pamela Anderson" />
            <TwitterFollowCard username="SergioRamos" name="Sergio Ramos"/>
            <TwitterFollowCard username="KMbappe" name="Kylian Mbappé"/>
        </>
    )
}