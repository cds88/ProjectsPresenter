import * as React from 'react';
import * as ReactDOM from 'react-dom';

import styled from "styled-components";
import Aliparser from './components/component_aliparser/Aliparser';
import Housecrawler from './components/component_housecrawler/Housecrawler';
import Mememax from './components/component_mememax/Mememax';
import Pygame from './components/component_pygame/Pygame';
import './Styles.scss';
import axios from 'axios';
export interface MasterProps {

}

export interface MasterState {
    name: string;
}

class Master extends React.Component<MasterProps, MasterState> {


    componentDidMount(){ 
        var data = axios.get('/data/all/').then(response=> response.data);
     
    }

    render() {
        return (
            <div className="master-wrapper">
                <h1 >MOJE PROJEKTY  TO </h1>

                <div className="projects-container">
                <Aliparser/>
                <Housecrawler/>
                <Mememax/>

                
                   
                   <Pygame/>
       
                
               
                
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
