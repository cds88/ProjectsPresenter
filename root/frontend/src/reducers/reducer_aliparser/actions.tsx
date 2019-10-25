export const GET_CONTACT = "GET_CONTACT";
 
 
 

export interface contact {
    type: typeof GET_CONTACT
}

 

export type fetchActionTypes =
    | contact
 

export type TableActions = fetchActionTypes;