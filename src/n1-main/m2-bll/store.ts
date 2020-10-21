import {combineReducers, createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {loginReducer} from "./b3-loginReducer/loginReducer";
import {registerReducer} from "./b1-registrationReducer/registerReducer";
import {passwRestoreReducer} from "./b3-passwRestoreReducer/passwRestoreReducer";
import {passwUpdateReducer} from "./b4-passwUpdatereducer/passwUpdateReducer";
import {profileReducer} from "./b2-profileReducer/profileReducer";

const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
    passwRestore: passwRestoreReducer,
    passwUpdate: passwUpdateReducer,
    profile: profileReducer
});

export const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
));

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;
