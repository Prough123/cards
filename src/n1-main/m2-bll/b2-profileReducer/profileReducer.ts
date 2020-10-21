import {ACTIONS_TYPE, ActionsType} from "./actions";

const initialState = {
    _id: '',
    email: '',
    isAdmin: false,
    rememberMe: null as null | boolean,
    created: '',
    updated: '',
    name: '',
};
type InitialStateType = typeof initialState



export const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type){
        case ACTIONS_TYPE.SET_IS_DATA_PROFILE:
            return {...state, ...action.payload}
    }
    return state;
};

