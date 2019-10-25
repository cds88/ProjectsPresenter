import * as React from 'react';

import Gridbg from '../component_gridbg/Gridbg';


export interface HousecrawlerProps {
    
}
 
export interface HousecrawlerState {
    
}
 
class Housecrawler extends React.Component<HousecrawlerProps, HousecrawlerState> {
    // constructor(props: HousecrawlerProps) {
    //     super(props);
    //     this.state = { :  };
    // }
    render() { 
        return ( 
            <div>
                <div className="project-wrapper">
                    <div className="slanted-special slanted-C" />
                    <div className="slanted-container">

                        <div className="image-wrapper">
                            <img src="https://images.unsplash.com/photo-1571987906345-1b41e18ccf94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt=""  />
                        </div>
                        <Gridbg />
                    </div>

                </div>
            </div>
         );
    }
}
 
export default Housecrawler;