import {AppRootStateType} from "../store";


interface IRootState extends AppRootStateType {}

export const selectStateLogin = (state: IRootState) => state.login
