import * as React from 'react';

import Gridbg from '../component_gridbg/Gridbg';

export interface MememaxProps {
    
}
 
export interface MememaxState {
    
}
 
class Mememax extends React.Component<MememaxProps, MememaxState> {
    // constructor(props: MememaxProps) {
    //     super(props);
    //     this.state = { :  };
    // }
    render() { 
        return (<div className="project-wrapper">
            <div className="slanted-container">

                <div className="image-wrapper">
                    <img src="https://images.unsplash.com/photo-1571903753771-ce22acbc441c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="" />
                </div>
                <Gridbg />
            </div>

        </div> );
    }
}
 
export default Mememax;