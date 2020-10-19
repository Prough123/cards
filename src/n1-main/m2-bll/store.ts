import {combineReducers, createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {loginReducer} from "./loginReducer";
import {registerReducer} from "./registerReducer";
import {passwRestoreReducer} from "./passwRestoreReducer";
import {passwUpdateReducer} from "./passwUpdateReducer";
import {profileReducer} from "./profileReducer";

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
