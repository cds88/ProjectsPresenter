import * as React from 'react';
import ReactPlayer from 'react-player';
import GridBackground from './components/GridBackground';
import './Styles.scss';
import { Record } from '../../Master';

import { connect } from 'react-redux';

 

import { ThunkDispatch } from 'redux-thunk';

import { Dispatch, bindActionCreators } from 'redux';

import { UserInterface } from '../../reducers/reducer_userinterface/UserInterface';
import { AppActions } from '../../reducers/reducer_data/Actions';
import { AllAppActions } from '../../reducers/actions/AllActionsTypes';
import { Data } from '../../reducers/reducer_data/Data';
import { selectActive } from '../../reducers/actions/AllActions';
import { AppState } from '../../reducers/ConfigureStore';
import  { AllActionTypes} from '../../reducers/actions/AllActionsTypes';
 
export interface CentertextProps{
    
    isActivated: boolean;
    userInterface?: UserInterface;
    
    details: Data
 

}

interface LinkStateProps{
        // Data: Data[],
  
}

// const mapStateToProps = (
//     state: AppState,
//     ownProps: CentertextProps
// ): LinkStateProps => ({
//     // Data: state.DataReducer
   
// });

 
interface LinkDispatchProps {
    selectProject: (active: number) => void;
}
const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AllAppActions>,
    ownProps: CentertextProps): LinkDispatchProps => ({
        selectProject: bindActionCreators(selectActive, dispatch)

    });

type Props = CentertextProps & LinkDispatchProps & LinkStateProps;


const Centertext=(Props:Props) =>{
    
    const handleClick = () => {
        Props.selectProject(5);
    }
    
    const centerContent =()=>{
        if(Props.details){
            return  Props.details.textcontent;
            
        }else{
            return "NOT YET";
        }
    };
 

    switch(Props.isActivated){
        case true:
    return (
        <div className="center-text" onMouseOver={handleClick}>
            <div className="content-wrapper">
                
                
                <div className="text-content">
                <p > {centerContent()}</p>
                </div>
            </div>  
          
        </div>
    )
        case false:
            return(
                <div className="center-text" >
                   
                    
                </div>
            )
}
}


export default connect(null, mapDispatchToProps)(Centertext);