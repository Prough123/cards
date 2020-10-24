import {combineReducers, createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {loginReducer, setIsLoggedInAC} from "./b3-loginReducer/loginReducer";
import {passwRestoreReducer} from "./b3-passwRestoreReducer/passwRestoreReducer";
import {passwUpdateReducer} from "./b4-passwUpdatereducer/passwUpdateReducer";
import {profileReducer, setIsDataProfileAC, setIsInitializedAC} from "./b2-profileReducer/profileReducer";
import {registerReducer, setIsRegistered, setNewUserData} from "./b5-registrationReducer/registerReducer";
import {appReducer, setError, setInfo, setIsLoading} from "./b1-app/appReducer";

const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
    passwRestore: passwRestoreReducer,
    passwUpdate: passwUpdateReducer,
    profile: profileReducer,
    app: appReducer,
});

export const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
));


export type AppRootStateType = ReturnType<typeof rootReducer>
export type ActionTypes = ReturnType<typeof setError>
    | ReturnType<typeof setIsLoading>
    | ReturnType<typeof setIsDataProfileAC>
    | ReturnType<typeof setIsLoggedInAC>
    | ReturnType<typeof setInfo>
    | ReturnType<typeof setNewUserData>
    | ReturnType<typeof setIsRegistered>
    | ReturnType<typeof setIsDataProfileAC>
    | ReturnType<typeof setIsInitializedAC>


// @ts-ignore
window.store = store;
