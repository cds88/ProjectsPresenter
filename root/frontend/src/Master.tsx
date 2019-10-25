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

import {connect} from 'react-redux';

import {AppState} from './reducers/ConfigureStore';
import {Data} from './reducers/reducer_data/Data';
interface LinkStateProps {
    Data: Data[];
}

const mapStateToProps = (
    state: AppState,
    ownProps: MasterProps
): LinkStateProps => ({
    Data: state.DataReducer
});

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
type Props = MasterProps & LinkStateProps
class Master extends React.Component<Props, MasterState> {
    constructor(props: Props) {
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
                    <Centertext content={JSON.stringify(this.props.Data)}/>

                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, null)( Master);



 
 