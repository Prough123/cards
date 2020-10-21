import {
    ACTIONS_TYPE,
    ActionsType, setIsErrorAC,
    setIsLoadingAC,
    setIsLoggedInAC
} from "./actions";
import {Dispatch} from "react";
import {setIsDataProfileAC} from "../b2-profileReducer/actions";
import {authAPI, LoginParamsType} from "../../m3-dal/api";

const initialState = {
    isLoggedIn: false,
    isLoading: false
};
type InitialStateType = typeof initialState

export const loginReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
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
        const {email, name, created, updated, avatar, _id, isAdmin, rememberMe} = res
        dispatch(setIsLoggedInAC({value: true}))
        dispatch(setIsDataProfileAC({
            email: email, created: created,
            name: name, updated: updated,
            avatar: avatar, isAdmin: isAdmin, _id:_id,
            rememberMe:rememberMe
        }))
        dispatch(setIsLoadingAC(false))
    } catch (error) {
        dispatch(setIsErrorAC(error.response.data.error))
        dispatch(setIsLoadingAC(false))
        dispatch(setIsLoggedInAC({value: false}))

    }
}