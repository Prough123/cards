import {AppRootStateType} from "../store";


interface IRootState extends AppRootStateType {}

export const selectStateProfile = (state: IRootState) => state.profile
