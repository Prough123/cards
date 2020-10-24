import {Dispatch} from "redux";
import {authAPI, LoginParamsType} from "../../m3-dal/api";
import {setIsDataProfileAC} from "../b2-profileReducer/profileReducer";
import {ActionTypes} from "../store";
import {setError, setIsLoading} from "../b1-app/appReducer";


const initialState = {
    isLoggedIn: false,
};
type InitialStateType = typeof initialState

export const loginReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case "SET_IS_LOGGED_IN":
            return {...state, isLoggedIn: action.isLogged}
    }
    return state;
};



export const setIsLoggedInAC = (isLogged: boolean) => ({type: 'SET_IS_LOGGED_IN', isLogged} as const)


export const loginTC = (data: LoginParamsType) => async (dispatch: Dispatch<ActionTypes>) => {
    dispatch(setIsLoading(true))
    try {
        const response = await authAPI.login(data)
        const res = response.data
        const {email, name, created, updated, avatar, _id, isAdmin, rememberMe} = res
        dispatch(setIsLoggedInAC(true))
        dispatch(setIsDataProfileAC({
            email: email, created: created,
            name: name, updated: updated,
            avatar: avatar, _id: _id,
            rememberMe: rememberMe
        }))
        dispatch(setIsLoading(false))
    } catch (error) {
        dispatch(setError(error.response.data.error))
        dispatch(setIsLoading(false))
        dispatch(setIsLoggedInAC(false))

    }
}

