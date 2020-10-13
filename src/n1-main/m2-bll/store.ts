import {combineReducers, applyMiddleware, createStore} from 'redux'
import {forgotPasswordReducer} from "./forgot-password-reducer";
import {newPasswordReducer} from "./newPassword-reducer";
import {profileReducer} from "./profile-reducer";
import {signInReducer} from "./sign-in-reducer";
import {signUpReducer} from "./sing-up-reduce";
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    forgotPassword:forgotPasswordReducer,
    newPassword:newPasswordReducer,
    profileReducer:profileReducer,
    signIn:signInReducer,
    singUp:signUpReducer
})

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunkMiddleware)))

export type AppRootStateType = ReturnType<typeof rootReducer>