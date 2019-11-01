import * as React from 'react';


export default function GridBackground() {
    var rows = [];
    for (var i = 0; i < 6; i++) {
        rows.push(<div key={i}> </div>)
    }
    return (
        <div className="center-text-background-wrapper">
            
        

        <div className='center-text-background'> 
        
        {rows} 
            
        </div>
        </div>
    )
}
