import {
    ACTIONS_TYPE,
    ActionsType,
    setIsDataProfileAC, setIsErrorAC,
    setIsLoadingAC,
    setIsLoggedInAC
} from "../../n2-features/f1-auth/a1-login/actions";
import {authAPI, LoginParamsType} from "../../n2-features/f1-auth/a1-login/api";
import {Dispatch} from "react";

const initialState = {
    isLoggedIn: false,
    email: null as null | string,
    name: null as null | string,
    avatar: null as null | string,
    updated: null as null | string,
    created: null as null | string,
    error: null as null | string,
    isLoading: false
};
type InitialStateType = typeof initialState

export const loginReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        case ACTIONS_TYPE.SET_IS_DATA_PROFILE:
            return {...state, ...action.payload}
        case ACTIONS_TYPE.SET_IS_LOGGED_IN:
            return {...state, isLoggedIn: action.payload.value}
    }
    return state;
};

export const loginTC = (data: LoginParamsType) => async (dispatch: Dispatch<ActionsType>) => {
    dispatch(setIsLoadingAC(true))
    try {
        const response = await authAPI.login(data)
        const res = response.data
        const {email, name, created, updated, avatar} = res
        dispatch(setIsLoggedInAC({value: true}))
        dispatch(setIsDataProfileAC({email: email, created: created, name: name, updated: updated, avatar: avatar}))
        dispatch(setIsLoadingAC(false))
    } catch (error){
        dispatch(setIsErrorAC(error.response.data.error))
        dispatch(setIsLoadingAC(false))
        dispatch(setIsLoggedInAC({value: false}))
    }
}