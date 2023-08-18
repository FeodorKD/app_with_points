import {Dispatch} from "redux";
import {
    ActionTypes,
    DeletePointAction,
    FetchPointsAction,
    FetchPointsErrorAction,
    FetchPointsSuccessAction,
    PointAction
} from "../types/storeTypes";
import axios from "axios";
import {IPoints} from "../../types/dataTypes";
import {OnePointAction} from "../reducers/onePointReducer";

const createFetchAction = (): FetchPointsAction => {
    return {
        type: ActionTypes.FETCH_POINTS
    }
}

const createSuccessAction = (data: IPoints[]): FetchPointsSuccessAction => {
    return {
        type: ActionTypes.FETCH_POINTS_SUCCESS,
        payload: data
    }
}

const createErrorAction = (message: string): FetchPointsErrorAction => {
    return {
        type: ActionTypes.FETCH_POINTS_ERROR,
        payload: message
    }
}

const deletePointAction = (id: number): DeletePointAction => {
    return {
        type: ActionTypes.DELETE_POINT,
        payload: id
    }
}
export const fetchPoints = () => {
    return async (dispatch: Dispatch<PointAction>) => {
        try {
            dispatch(createFetchAction())
            const response = await axios.get<IPoints[]>('http://localhost:5000/points')
            dispatch(createSuccessAction(response.data))
        } catch (error) {
            dispatch(createErrorAction(error.message))
        }
    }
}

export const deleteOnePoint = (id: number) => {
    return async (dispatch: Dispatch<PointAction>) => {
        try {
            const response = await axios.delete<IPoints>(`http://localhost:5000/points/${id}`)
            dispatch(deletePointAction(id))
        } catch (error) {
            dispatch(createErrorAction(error.message))
        }
    }
}