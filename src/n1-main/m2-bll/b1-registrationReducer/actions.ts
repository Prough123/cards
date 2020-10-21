export enum ACTIONS_TYPE {
    CREATE_USER = 'Registration/CREATE_USER',
    SET_IS_LOADING = 'Registration/SET_IS_LOADING',
    SET_IS_REGISTERED = 'Registration/SET_IS_REGISTERED',
    SET_ERROR = 'Registration/SET_ERROR',
}


export type NewUserData = {
    email: null | string,
    password: null | string,
}

//func to create an action creators
const makeActions = <T extends ACTIONS_TYPE, P>(type: T) => (payload: P) => ({type, payload})

//AC
export const setNewUserData = makeActions<ACTIONS_TYPE.CREATE_USER, NewUserData>(ACTIONS_TYPE.CREATE_USER);
export const setIsLoading = makeActions<ACTIONS_TYPE.SET_IS_LOADING, boolean>(ACTIONS_TYPE.SET_IS_LOADING)
export const setIsRegistered = makeActions<ACTIONS_TYPE.SET_IS_REGISTERED, boolean>(ACTIONS_TYPE.SET_IS_REGISTERED)
export const setError = makeActions<ACTIONS_TYPE.SET_ERROR, string | null>(ACTIONS_TYPE.SET_ERROR)

//object of AC
const actions = {
    setNewUserData,
    setIsLoading,
    setIsRegistered,
    setError,
}
//A[keyof A] returns type object ({type, payload}) that returns the function  T extends ((...args: any) => infer R) ? R : any
//A should have { [key:string]: (...args: any[]) => any }}  this is [nameAC]:(payload)=>{type, payload}
type IActionUnion<A extends { [key: string]: (...args: any[]) => any }> = ReturnType<A[keyof A]>

//create AC Types of the object actions
//combine all types of the actions
export type ActionsType = IActionUnion<typeof actions>
