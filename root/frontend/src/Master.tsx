import * as React from 'react';
import * as ReactDOM from 'react-dom';

import styled from "styled-components";
import Aliparser from './components/component_aliparser/Aliparser';
import Housecrawler from './components/component_housecrawler/Housecrawler';
import Mememax from './components/component_mememax/Mememax';

import './Styles.scss';
export interface MasterProps {

}

export interface MasterState {
    name: string;
}

class Master extends React.Component<MasterProps, MasterState> {


    render() {
        return (
            <Wrapper>
                <h1 >MOJE PROJEKTY FULLSTACK TO </h1>

                <div>
                <Aliparser/>
                <Housecrawler/>
                <Mememax/>

                
                <div className="side-projects">
                    <h1>Dodatkowe projekty</h1>
                        
                    <h2>smieszna gra z kwadracikami</h2>
                    <h2>przeszukiwacz ogloszen o prace</h2>
                
                </div>
                
                </div>
            </Wrapper>
        );
    }
}

export default Master;




const Wrapper = styled("div")`
    width: 100%;
    height: 100vh;
    background: gray;
    display: grid;
    justify-content:center;
    align-items: center;
 
    



`;
