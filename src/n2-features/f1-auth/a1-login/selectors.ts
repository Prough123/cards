import {AppRootStateType} from "../../../n1-main/m2-bll/store";


interface IRootState extends AppRootStateType {}

export const selectStateLogin = (state: IRootState) => state.login
