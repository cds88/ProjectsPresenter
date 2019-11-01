import {SelectActiveAction} from '../reducer_userinterface/Actions';

import { DataActionTypes} from '../reducer_data/Actions';


export type AllActionTypes = 
    | SelectActiveAction
    | DataActionTypes


export type AllAppActions = AllActionTypes