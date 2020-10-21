import {Dispatch} from "redux";
import {authAPI, RegisterParams} from "../../m3-dal/api";
import {ACTIONS_TYPE, ActionsType, setError, setIsLoading, setIsRegistered, setNewUserData} from "./actions";


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

//thunks
export const registerUser = (params: RegisterParams) => async (dispatch: Dispatch<ActionsType>) => {
    dispatch(setIsLoading(true));
    dispatch(setError(null));
    try {
        const res = await authAPI.register(params)
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
