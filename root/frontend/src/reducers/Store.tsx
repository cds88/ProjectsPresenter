import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";


import { TableActions } from './reducer_aliparser/actions';

import { AliparserReducer } from './reducer_aliparser/AliparserReducer';


export const rootReducer = combineReducers({
     

});


export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk as ThunkMiddleware<AppState, TableActions>)
)