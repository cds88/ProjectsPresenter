import { Data} from './Data';
import { DataActionTypes } from "./Actions";
import {  FETCH_PROJECTS_BEGIN, FETCH_PROJECTS_ERROR, FETCH_PROJECTS_SUCCESS, FETCH_ASSETS_BEGIN, FETCH_ASSETS_SUCCESS, FETCH_ASSETS_ERROR } from './Actions';

const DataReducerDefaultState: Data = {
        Projects: [],
        Assets: null
};

const DataReducer = (
    state = DataReducerDefaultState,
    action: DataActionTypes
): Data => {
    switch (action.type) {
        case FETCH_PROJECTS_BEGIN:
          
          
            return state
        case FETCH_PROJECTS_SUCCESS:
             
            return {...state, Projects:action.results}

        case FETCH_ASSETS_BEGIN:
            return state

        case FETCH_ASSETS_SUCCESS:
            return {...state, Assets:action.results[0]}
        default:
            return state;
    }
};

export { DataReducer };
