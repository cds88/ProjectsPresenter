import * as React from 'react';
import * as ReactDOM from 'react-dom';

import styled from "styled-components";

export interface MasterProps {

}

export interface MasterState {
    name: string;
}

class Master extends React.Component<MasterProps, MasterState> {


    render() {
        return (
            <Wrapper>
                <h1 style={{color:"white"}}>ITS OK </h1>
            </Wrapper>
        );
    }
}

export default Master;




const Wrapper = styled("div")`
    width: 100%;
    height: 100vh;
    background: gray;
 
    



`;
