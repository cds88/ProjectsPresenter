import { UserInterface } from '../reducer_userinterface/UserInterface';
import { FETCH_PROJECTS_BEGIN, FETCH_PROJECTS_SUCCESS, FETCH_PROJECTS_ERROR, FETCH_ASSETS_BEGIN, FETCH_ASSETS_SUCCESS, FETCH_ASSETS_ERROR } from '../reducer_data/Actions';
import { AppActions, SELECT_ACTIVE } from '../reducer_userinterface/Actions';
import { AllAppActions} from './AllActionsTypes';
 
import {DataActionTypes} from '../reducer_data/Actions';
import { ThunkDispatch } from "redux-thunk";
import { Dispatch, bindActionCreators } from "redux";
import {AppState} from '../ConfigureStore';
import {Project, Assets} from '../reducer_data/Data';
import axios from 'axios';
export const selectActive = (active: number): AllAppActions => ({
    type: SELECT_ACTIVE,
    active
});
export const FetchBegin = (): AllAppActions=>({
    
    type: FETCH_PROJECTS_BEGIN
});

// results: Data[]
export const FetchSuccess = (results: Project[]): AllAppActions=>({
    type: FETCH_PROJECTS_SUCCESS ,
     results
});
 
export const FetchAssetsBegin = ():AllAppActions=>({
    type : FETCH_ASSETS_BEGIN
})

export const FetchAssetsSuccess = (results: Assets[]): AllAppActions => ({
    type: FETCH_ASSETS_SUCCESS,
    results

})


export const fetchBeginDispatch = ()   => {
    return (dispatch: Dispatch<AllAppActions>, getState: () => AppState) => {
        dispatch(FetchBegin() );
        axios('data/all/').then( 
            response =>  dispatch(FetchSuccess(response.data)) )
          

        dispatch(FetchAssetsBegin());
        axios('data/assets/').then(
            response=>dispatch(FetchAssetsSuccess(response.data))
        )

          }
        
};
    