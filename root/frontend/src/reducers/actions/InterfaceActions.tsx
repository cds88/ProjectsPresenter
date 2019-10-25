import { UserInterface} from '../reducer_userinterface/UserInterface';

import {AppActions, SELECT_ACTIVE} from '../reducer_userinterface/Actions';

export const selectActive=(userinterface:UserInterface):AppActions=>({
        type: SELECT_ACTIVE,
        userinterface
        
});