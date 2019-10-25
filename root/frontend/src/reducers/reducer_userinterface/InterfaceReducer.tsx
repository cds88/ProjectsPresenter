import { UserInterface} from './UserInterface';
import {InterfaceActionTypes, SELECT_ACTIVE} from './Actions';
 


const InterfaceReducerDefaultState: UserInterface={
    active:1
};


const InterfaceReducer = (
    state = InterfaceReducerDefaultState,
    action: InterfaceActionTypes 
): UserInterface=>{
    switch(action.type){
        case SELECT_ACTIVE:
            return action.userinterface
        default:
            return state;
    }
}

export {InterfaceReducer}

