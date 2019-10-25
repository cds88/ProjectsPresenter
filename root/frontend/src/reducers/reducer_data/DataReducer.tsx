import { Data} from './Data';
import { DataActionTypes } from "./Actions";
import { GET_DATA } from './Actions';

const DataReducerDefaultState: Data[] = [
    {id:1, title:"my_title", image:"image"}
];

const DataReducer = (
    state = DataReducerDefaultState,
    action: DataActionTypes
): Data[] => {
    switch (action.type) {
        case GET_DATA:
            return [...state];
        default:
            return state;
    }
};

export { DataReducer };
