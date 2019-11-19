import { Project, Assets } from "./Data";

// action strings
export const GET_DATA = "GET_DATA";
export const FETCH_PROJECTS_BEGIN = "FETCH_PROJECTS_BEGIN"
export const FETCH_PROJECTS_SUCCESS = "FETCH_PROJECTS_SUCCESS"
export const FETCH_PROJECTS_ERROR = "FETCH_PROJECTS_ERROR"

export const FETCH_ASSETS_BEGIN = "FETCH_ASSETS_BEGIN"
export const FETCH_ASSETS_SUCCESS = "FETCH_ASSETS_SUCCESS"
export const FETCH_ASSETS_ERROR = "FETCH_ASSETS_ERROR"
 

export interface FetchProjectsBegin{
    type: typeof FETCH_PROJECTS_BEGIN 
    
}


export interface FetchProjectsSuccess{
    type: typeof FETCH_PROJECTS_SUCCESS,
     results: Project[]

}

export interface FetchProjectsError {
    type: typeof FETCH_PROJECTS_ERROR

}


export interface FetchAssetsBegin{
    type: typeof FETCH_ASSETS_BEGIN
}
export interface FetchAssetsSuccess{
    type: typeof FETCH_ASSETS_SUCCESS
    results: Assets[]
}
export interface FetchAssetsError{
    type: typeof FETCH_ASSETS_ERROR
}


export type DataActionTypes =
    | FetchProjectsBegin
    | FetchProjectsSuccess
    | FetchProjectsError
    | FetchAssetsBegin
    | FetchAssetsSuccess
    | FetchAssetsError
 
export type AppActions = DataActionTypes;
