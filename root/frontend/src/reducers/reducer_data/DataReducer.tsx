import { Data} from './Data';
import { DataActionTypes } from "./Actions";
import {  FETCH_DATA_BEGIN, FETCH_DATA_ERROR, FETCH_DATA_SUCCESS } from './Actions';

const DataReducerDefaultState: Data[] =[
   

];

const DataReducer = (
    state = DataReducerDefaultState,
    action: DataActionTypes
): Data[] => {
    switch (action.type) {
        case FETCH_DATA_BEGIN:
          
          
            return state
        case FETCH_DATA_SUCCESS:
             
            return [...state, ...action.results]
        default:
            return state;
    }
};

export { DataReducer };
