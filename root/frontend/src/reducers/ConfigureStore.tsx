import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { DataReducer } from "./reducer_data/DataReducer";
import { AppActions } from "./reducer_data/Actions";

export const rootReducer = combineReducers({
    DataReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
);
