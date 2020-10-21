import {Dispatch} from "react";
import {authAPI, ForgotPasswordType} from "../../m3-dal/api";
import {setIsErrorAC, setIsLoadingAC, setIsLoggedInAC} from "../b3-loginReducer/actions";
import {ActionsType, setIsEmailAC} from "./actions";

const initialState = {
    email: '',
};

type InitialStateType = typeof initialState

export const passwRestoreReducer = (state: InitialStateType = initialState, action: ActionsType ): InitialStateType => {
    return state;
};

export const forgotPasswordTc = (data:ForgotPasswordType) => async (dispatch:Dispatch<ActionsType>) => {
    debugger
    dispatch(setIsLoadingAC(true))
    try {
        debugger
        const response = await authAPI.forgotPassword(data)
        console.log(response.data.info)
        dispatch(setIsLoadingAC(false))

    }catch (error){
        console.log(error.response.data.error)
        dispatch(setIsErrorAC(error.response.data.error))
        dispatch(setIsLoadingAC(false))
        debugger
    }
}


