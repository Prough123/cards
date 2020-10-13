
const initialState = {test:'test'} as initialStateType

export type initialStateType = {
    test:string
}

const TEST = 'TEST'
export type ActionsType =  TestACType


export const signUpReducer = (state: initialStateType = initialState, action: ActionsType):initialStateType => {
    switch (action.type){
        default: {
            return state
        }
    }
}


export const TestAC = ():TestACType => ({type:'TEST'})
export type TestACType  ={
    type: typeof TEST
}