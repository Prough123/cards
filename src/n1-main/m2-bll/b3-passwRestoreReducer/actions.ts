import {setIsErrorAC, setIsLoadingAC} from "../b3-loginReducer/actions";

export enum ACTIONS_TYPE {
    SET_IS_EMAIL= 'SET_IS_EMAIL',
    SET_IS_ERROR = 'SET_IS_ERROR'

}

const makeActions = <T extends ACTIONS_TYPE, P>(type:T) => (payload: P) => ({type, payload})


export const setIsEmailAC = makeActions<ACTIONS_TYPE.SET_IS_EMAIL, string>(ACTIONS_TYPE.SET_IS_EMAIL)

interface IStringMap<T> {
    [key:string]: T
}

type IAnyFunction = (...args: any[]) => any

type IActionUnion<A extends IStringMap<IAnyFunction>> = ReturnType<A[keyof A]>

const actions = {
    setIsEmailAC,
    setIsLoadingAC,
    setIsErrorAC
}

export type ActionsType = IActionUnion<typeof actions>
