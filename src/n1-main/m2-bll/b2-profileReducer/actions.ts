export enum ACTIONS_TYPE {
    SET_IS_DATA_PROFILE = 'SET_IS_DATA_PROFILE',
}
export type setIsDataProfilePayload = {
    _id: string
    isAdmin: boolean
    name: string
    email: string
    created: string
    updated: string
    avatar?: string
    rememberMe: boolean
}

const makeActions = <T extends ACTIONS_TYPE, P>(type:T) => (payload: P) => ({type, payload})

export const setIsDataProfileAC = makeActions<ACTIONS_TYPE.SET_IS_DATA_PROFILE, setIsDataProfilePayload>(ACTIONS_TYPE.SET_IS_DATA_PROFILE)

interface IStringMap<T> {
    [key:string]: T
}

type IAnyFunction = (...args: any[]) => any

type IActionUnion<A extends IStringMap<IAnyFunction>> = ReturnType<A[keyof A]>

const actions = {
    setIsDataProfileAC
}

export type ActionsType = IActionUnion<typeof actions>
