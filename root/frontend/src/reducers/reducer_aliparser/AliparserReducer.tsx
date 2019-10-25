import { Reducer } from 'redux';



export interface initialState {

}





export const AliparserReducer: Reducer = (state: initialState, action: any) => {

    switch (action.type) {
        case "GET_CONTACT":
            return {
                ...state,
            }



    }

    return state



}


export default AliparserReducer;