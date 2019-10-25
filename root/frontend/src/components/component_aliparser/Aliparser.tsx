import * as React from 'react';

import Gridbg from '../component_gridbg/Gridbg';
 
import {Record} from '../../Master';

import {connect} from 'react-redux';
import './Styles.scss';

export interface AliparserProps {
  record?: Record
}
 
export interface AliparserState {
    
}
 
class Aliparser extends React.Component<AliparserProps, AliparserState> {
    // constructor(props: AliparserProps) {
    //     super(props);
    //     this.state = { :  };
    // }
 handleClick=()=>{
   alert('its ok');
 }
 
    render() { 

        return ( 
            <div className="project-wrapper"> 
            <div className="slanted-special slanted-A"  >
              
            </div>
                
              <div className="slanted-container">
      
                    <div className="image-wrapper">
                    <img src="https://images.unsplash.com/photo-1571903753771-ce22acbc441c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt=""/>
                    </div>
                    <Gridbg />
              </div>
            </div>
         );
    }
}
 
export default connect(null, null)(Aliparser);