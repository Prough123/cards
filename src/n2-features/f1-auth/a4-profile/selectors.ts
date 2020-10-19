import {AppRootStateType} from "../../../n1-main/m2-bll/store";


interface IRootState extends AppRootStateType {}

export const selectStateProfile = (state: IRootState) => state.profile
