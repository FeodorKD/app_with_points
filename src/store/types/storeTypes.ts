import {IPoints} from "../../types/dataTypes";
import {pointStore} from "../index";

export interface PointState {
    points: IPoints[];
    loading: boolean;
    error: null | string;
}

export interface FetchPointsAction {
    type: ActionTypes.FETCH_POINTS;
}

export interface FetchPointsSuccessAction {
    type: ActionTypes.FETCH_POINTS_SUCCESS;
    payload: IPoints[];
}

export interface FetchPointsErrorAction {
    type: ActionTypes.FETCH_POINTS_ERROR;
    payload: string;
}

export interface DeletePointAction {
    type: ActionTypes.DELETE_POINT;
    payload: number
}


export type PointAction = FetchPointsAction | FetchPointsErrorAction | FetchPointsSuccessAction | DeletePointAction


export enum ActionTypes  {
    FETCH_POINTS = 'fetch-points',
    FETCH_POINTS_SUCCESS = 'fetch-points-success',
    FETCH_POINTS_ERROR = 'fetch-points-error',
    DELETE_POINT = 'delete-point'

}

export type AppDispatch = typeof pointStore.dispatch