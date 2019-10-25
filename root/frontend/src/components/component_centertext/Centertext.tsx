import * as React from 'react';


export interface Props{
    content?:string
}



export default function Centertext(Props:Props) {
    return (
        <div className="center-text" style={{color: "white"}}>
            {/* {Props.content} */}
        </div>
    )
}
