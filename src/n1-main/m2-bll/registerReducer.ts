import {Dispatch} from "redux";
import {registerAPI, RegisterParams} from "../m3-dal/register-api";

enum ACTIONS_TYPE {
    CREATE_USER = 'Registration/CREATE_USER',
    SET_IS_LOADING = 'Registration/SET_IS_LOADING',
    SET_IS_REGISTERED = 'Registration/SET_IS_REGISTERED',
    SET_ERROR = 'Registration/SET_ERROR',
}

type InitialState = typeof initialState;

const initialState = {
    email: null as null | string,
    password: null as null | string,
    isLoading: false,
    isRegistered: false,
    error: null as null | string,
};

export const registerReducer = (state: InitialState = initialState, action: ActionsType): InitialState => {
    switch (action.type) {
        case ACTIONS_TYPE.CREATE_USER:
            return {
                ...state,
                ...action.payload
            }
        case ACTIONS_TYPE.SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case ACTIONS_TYPE.SET_IS_REGISTERED:
            return {
                ...state,
                isRegistered: action.payload
            }
        case ACTIONS_TYPE.SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
};


//payloads

export type NewUserData = {
    email: null | string,
    password: null | string,
}

//func to create an action creators
const makeActions = <T extends ACTIONS_TYPE, P>(type: T) => (payload: P) => ({type, payload})

//AC
export const setNewUserData = makeActions<ACTIONS_TYPE.CREATE_USER, NewUserData>(ACTIONS_TYPE.CREATE_USER);
export const setIsLoading = makeActions<ACTIONS_TYPE.SET_IS_LOADING, boolean>(ACTIONS_TYPE.SET_IS_LOADING)
const setIsRegistered = makeActions<ACTIONS_TYPE.SET_IS_REGISTERED, boolean>(ACTIONS_TYPE.SET_IS_REGISTERED)
export const setError = makeActions<ACTIONS_TYPE.SET_ERROR, string | null>(ACTIONS_TYPE.SET_ERROR)

//object of AC
const actions = {
    setNewUserData,
    setIsLoading,
    setIsRegistered,
    setError,
}
//A[keyof A] returns type object ({type, payload}) that returns the function  T extends ((...args: any) => infer R) ? R : any
//A should have { [key:string]: (...args: any[]) => any }}  this is [nameAC]:(payload)=>{type, payload}
type IActionUnion<A extends { [key: string]: (...args: any[]) => any }> = ReturnType<A[keyof A]>

//create AC Types of the object actions
//combine all types of the actions
export type ActionsType = IActionUnion<typeof actions>

//thunks
export const registerUser = (params: RegisterParams) => async (dispatch: Dispatch<ActionsType>) => {
    dispatch(setIsLoading(true));
    dispatch(setError(null));
    try {
        const res = await registerAPI.register(params)
        dispatch(setNewUserData({email: res.data.addedUser.email, password: res.data.addedUser.password || null}))
        dispatch(setIsLoading(false));
        dispatch(setIsRegistered(true));
    } catch (error) {
        console.dir(error);
        dispatch(setError(error.response.data.error));
        dispatch(setIsLoading(false));
        dispatch(setIsRegistered(false));
    }
}
