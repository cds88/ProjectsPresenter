import { Data } from "./Data";

// action strings
export const GET_DATA = "GET_DATA";


export interface GetDataAction {
    type: typeof GET_DATA;
 
}

 
export type DataActionTypes =
    | GetDataAction
 
export type AppActions = DataActionTypes;
