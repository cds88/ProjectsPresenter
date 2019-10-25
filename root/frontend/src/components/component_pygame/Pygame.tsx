import * as React from 'react';
import Gridbg from '../component_gridbg/Gridbg';
 

export default function Pygame() {
    return (
        <div>
            <div className="project-wrapper">
                <div className="slanted-container">

                    <div className="image-wrapper">
                        <img src="https://images.unsplash.com/photo-1569261230225-e0d58c2342c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80" alt="" />
                    </div>
                    <Gridbg />
                </div>

            </div>
        </div>
    )
}
