import {IPoints} from "../../types/dataTypes";

export interface OnePointState {
    point: IPoints | null,
    loading: boolean,
    error: null | string
}
const initialState: OnePointState = {
    point: null,
    loading: true,
    error: null
}

export enum OnePointActionTypes  {
    FETCH_POINT = 'fetch-point',
    FETCH_POINT_SUCCESS = 'fetch-point-success',
    FETCH_POINT_ERROR = 'fetch-point-error',
}

export interface FetchOnePointAction {
    type: OnePointActionTypes.FETCH_POINT;
}

export interface FetchOnePointSuccessAction {
    type: OnePointActionTypes.FETCH_POINT_SUCCESS;
    payload: IPoints;
}

export interface FetchOnePointErrorAction {
    type: OnePointActionTypes.FETCH_POINT_ERROR;
    payload: string;
}



export type OnePointAction = FetchOnePointAction| FetchOnePointSuccessAction | FetchOnePointErrorAction

export const onePointReducer = (state = initialState, action: OnePointAction): OnePointState => {
    switch (action.type){
        case OnePointActionTypes.FETCH_POINT:
            return {loading: true, error: null, point: undefined}
        case OnePointActionTypes.FETCH_POINT_SUCCESS:
            return {loading: false, error: null, point: action.payload}
        case OnePointActionTypes.FETCH_POINT_ERROR:
            return {loading: false, error: action.payload, point: undefined}
        default:
            return state
    }
}