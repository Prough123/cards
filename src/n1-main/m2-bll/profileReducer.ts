import {authAPI} from "../../n2-features/f1-auth/a1-login/api";
import {Dispatch} from "react";
import {setIsErrorAC, setIsLoggedInAC} from "../../n2-features/f1-auth/a1-login/actions";

const initialState = {
    error: null,
    isInitialized: false
};
type InitialStateType = typeof initialState
export const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    return state;
};

export const initializeProfileTC = () => async (dispatch: Dispatch<ActionsType>) => {
    try {
        const response = authAPI.me()

    } catch (error) {
    }
}

type ActionsType = string;