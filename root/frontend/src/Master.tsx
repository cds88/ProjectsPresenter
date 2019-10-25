import * as React from 'react';
import * as ReactDOM from 'react-dom';

import styled from "styled-components";
import Aliparser from './components/component_aliparser/Aliparser';
import Housecrawler from './components/component_housecrawler/Housecrawler';
import Mememax from './components/component_mememax/Mememax';
import Pygame from './components/component_pygame/Pygame';
import Centertext from './components/component_centertext/Centertext';
import './Styles.scss';
import axios from 'axios';
export interface MasterProps {

}
export interface MasterState {
    name?: string;
    records: Record[];
    isFetched: boolean;
}
export interface Record {
    id: number;
    title: string;
    image: string;
}
class Master extends React.Component<MasterProps, MasterState> {

    constructor(props: MasterProps) {
        super(props);
        this.state = { records : null, isFetched:false} ;
    }

    componentDidMount(){ 
        
        axios.get('/data/all/').then(response=> this.setState({records:response.data, isFetched:true}));
     
    }

 
    handleClick=()=>{
       alert('its ok ');
    }
    render() {
 
        return (
            <div className="master-wrapper">
              
              

                <div className="projects-container">
                <Aliparser record={this.state.isFetched? this.state.records[3] : undefined} />
                <Housecrawler/>  
                <Mememax/>

                
                   
                   <Pygame/>

                   <Centertext/>
       
                
               
                
                </div>
            </div>
        );
    }
}

export default Master;




const Wrapper = styled("div")`
    width: 100%;
    height: 100vh;
    background: gray;
 
    // display: grid;
    // justify-content:center;
    // align-items: center;
 
    



`;


 