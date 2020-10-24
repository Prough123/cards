import {authAPI, SetNewPasswordParamsType} from "../../m3-dal/api";
import {Dispatch} from "redux";
import {ActionTypes} from "../store";
import {setError, setIsLoading} from "../b1-app/appReducer";

const initialState = {};

type initialStateType = typeof initialState

export const passwUpdateReducer = (state: initialStateType = initialState, action: ActionTypes):initialStateType => {
    switch (action.type) {
        default:
            return state
    }

};

export const setNewPasswordTC = (data: SetNewPasswordParamsType) => async (dispatch: Dispatch<ActionTypes>) => {
    dispatch(setIsLoading(true));
    try {
        const response = await authAPI.setNewPassword(data)
    } catch (error) {
        console.dir(error);
        dispatch(setError(error.response.data.error));
        dispatch(setIsLoading(false));
        console.log(error.response.data.error)

    }
}
