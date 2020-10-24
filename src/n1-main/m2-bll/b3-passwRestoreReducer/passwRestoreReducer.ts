import {Dispatch} from "react";
import {authAPI, ForgotPasswordType} from "../../m3-dal/api";
import {ActionTypes} from "../store";


const initialState = {
    info: '',
};

type InitialStateType = typeof initialState

export const passwRestoreReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    return state;
};


const actions = {
    setIsEmailAC: (email: string) => ({type: 'SET_IS_EMAIL', email} as const)
}

export const forgotPasswordTC = (data: ForgotPasswordType) => async (dispatch: Dispatch<ActionTypes>) => {
    const requestData = {
        ...data,
        from: 'test-front-admin <slipok1999@mail.ru>',
        message: `<div>password recovery link: <a href='http://localhost:3000/#/update/$token$'>TAP TAP TAP</a></div>`
    }
    try {
        const response = await authAPI.forgotPassword(requestData)
        console.log(response.data.info)

    } catch (error) {
        console.log(error.response.data.error)
    }
}


