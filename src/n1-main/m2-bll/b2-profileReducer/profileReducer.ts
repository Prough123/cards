import {ActionTypes} from "../store";
import {Dispatch} from "redux";

export type setIsDataProfilePayload = {
    name: string
    email: string
    created: string
    updated: string
    avatar?: string
    _id: string
    rememberMe: boolean
}

const initialState = {
    userProfile : {
        _id: '',
        email: '',
        isAdmin: false,
        rememberMe: null as null | boolean,
        created: '',
        updated: '',
        name: '',
    },
    isInitialized: false
};
type InitialStateType = typeof initialState



export const profileReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type){
        case "SET_IS_DATA_PROFILE":
            return {...state, userProfile: {...action.data}}
        case "SET_IS_INITIALIZED":
            return {...state, }
    }
    return state;
};


export const setIsDataProfileAC = (data: setIsDataProfilePayload) => ({type:"SET_IS_DATA_PROFILE", data} as const)
export const setIsInitializedAC = (isInitialized: boolean) => ({type: 'SET_IS_INITIALIZED', isInitialized} as const)

export const authMeTC = () => async (dispatch: Dispatch<ActionTypes>) => {

}
