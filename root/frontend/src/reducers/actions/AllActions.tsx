import { UserInterface } from '../reducer_userinterface/UserInterface';
import { FETCH_DATA_BEGIN, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from '../reducer_data/Actions';
import { AppActions, SELECT_ACTIVE } from '../reducer_userinterface/Actions';
import { AllAppActions} from './AllActionsTypes';
import { FetchDataBegin, FetchDataSuccess, FetchDataError} from '../reducer_data/Actions';
import {DataActionTypes} from '../reducer_data/Actions';
import { ThunkDispatch } from "redux-thunk";
import { Dispatch, bindActionCreators } from "redux";
import {AppState} from '../ConfigureStore';
import {Data} from '../reducer_data/Data';
import axios from 'axios';
export const selectActive = (active: number): AllAppActions => ({
    type: SELECT_ACTIVE,
    active
});
export const FetchBegin = (): AllAppActions=>({
    
    type: FETCH_DATA_BEGIN
});

// results: Data[]
export const FetchSuccess = (results:Data[]): AllAppActions=>({
    type: FETCH_DATA_SUCCESS ,
     results
});
 
export const fetchBeginDispatch = ()   => {
    return (dispatch: Dispatch<AllAppActions>, getState: () => AppState) => {
        dispatch(FetchBegin() );
        axios('data/all/').then( 
            response =>  dispatch(FetchSuccess(response.data)) )
          
          };
};
    