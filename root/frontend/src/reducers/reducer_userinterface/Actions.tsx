import { UserInterface} from './UserInterface';

export const SELECT_ACTIVE = "SELECT_ACTIVE";



export interface SelectActiveAction{
    type: typeof SELECT_ACTIVE;
    userinterface: UserInterface;
}



export type InterfaceActionTypes = | SelectActiveAction;

export type AppActions = InterfaceActionTypes;