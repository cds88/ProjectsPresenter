import * as React from 'react';
import * as ReactDOM from 'react-dom';

import styled from "styled-components";
 
import Centertext from './components/component_centertext/Centertext';
import './Styles.scss';
import axios from 'axios';

import ProjectComponent from './components/component_project/ProjectComponent';
import { ThunkDispatch } from "redux-thunk";
import {connect} from 'react-redux';

import {AppState} from './reducers/ConfigureStore';
import {Data} from './reducers/reducer_data/Data';
import {UserInterface} from './reducers/reducer_userinterface/UserInterface';
import { AllAppActions} from './reducers/actions/AllActionsTypes';
import {fetchBeginDispatch} from './reducers/actions/AllActions';
import { Dispatch, bindActionCreators } from "redux";
interface LinkStateProps {
    Data: Data[];
    Userinterface: UserInterface;
}

const mapStateToProps = (
    state: AppState,
    ownProps: MasterProps
): LinkStateProps => ({
    Data: state.DataReducer,
    Userinterface: state.InterfaceReducer
});
interface LinkDispatchProps {
    TEST: () => void;
     
}
const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AllAppActions>,
    ownProps: MasterProps
): LinkDispatchProps => ({
        TEST: bindActionCreators(fetchBeginDispatch, dispatch),
    
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
    video: string;
}

type Props = MasterProps & LinkStateProps & LinkDispatchProps
class Master extends React.Component<Props, MasterState> {
    constructor(props: Props) {
        super(props);
        this.state = { records : null, isFetched:true} ;
    }
    componentDidMount(){         
        this.props.TEST();    
        document.body.style.backgroundColor = "";
    } 
     

    mainClass=():string=>{
        switch(this.props.Userinterface.active){
            case 1:
                document.body.style.backgroundColor = " #2c2c2c";
                return "first-div"
            case 2:
                document.body.style.backgroundColor = "#2c2c2c";
                return "first-div"
            case 3:
                document.body.style.backgroundColor = "#2c2c2c";
                return "first-div"
            case 4:
                document.body.style.backgroundColor = "#2c2c2c";
                return "first-div"
            case 5:
                document.body.style.backgroundColor = "black";
                return "first-div"
        }
    }

   
    render() { 
        const Results = this.props.Data
        const Projects = Results.map((el)=>{
            return <ProjectComponent index={el.id} selectedProject={this.props.Userinterface.active} Data={el}/>
        })
        
        
        return (
            <div className={this.mainClass()} >
            <div className="master-wrapper">   
          
                    <img src={`http://127.0.0.1:8000/media/proj${this.props.Userinterface.active}.jpg`}className="background-GG" alt=""/>
                <div className="projects-container">
                     
                {Projects}
   
                 
                    <Centertext isActivated={true}
                        userInterface={this.props.Userinterface } 
                        details={this.props.Data[this.props.Userinterface.active-1]}/>
    

                </div>
            </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)( Master);



 
 