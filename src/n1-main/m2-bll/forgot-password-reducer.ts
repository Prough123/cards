const initialState = {test:'test'} as initialStateType

export type initialStateType = {
    test:string
}

export type ActionsType =  ReturnType<typeof testAC>


export const forgotPasswordReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        default: {
            return state
        }
    }
}

export const testAC = () => ({type:'TEST'} as const)



