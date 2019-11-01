import * as React from 'react';
import {useEffect, useState} from 'react';
import ReactPlayer from 'react-player';
import { CSSTransition } from 'react-transition-group';


export interface PlayerProps{
    url:string;

}


export default function Player(Props:PlayerProps) {
    let videoClass:string='';
    useEffect(() => {
        videoClass="video-class"

        // returned function will be called on component unmount 
        return () => {
            videoClass ="video-class pasyw";
        }
    }, [])
    const [inProp, setInProp] = useState(false);
    return (
  
            <ReactPlayer url={Props.url} playing loop width="100%" height="100%" volume={0} muted ></ReactPlayer>
            
 
    )
}
