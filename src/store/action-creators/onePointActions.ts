import {Dispatch} from "redux";
import axios from "axios";

import {
    FetchOnePointAction, FetchOnePointErrorAction,
    FetchOnePointSuccessAction,
    OnePointAction,
    OnePointActionTypes
} from "../reducers/onePointReducer";
import {IPoints} from "../../types/dataTypes";



const onePointFetchAction = (): FetchOnePointAction => {
    return {
        type: OnePointActionTypes.FETCH_POINT
    }
}

const onePointSuccessAction = (data: IPoints): FetchOnePointSuccessAction => {
    return {
        type: OnePointActionTypes.FETCH_POINT_SUCCESS,
        payload: data
    }
}

const onePointErrorAction = (message: string): FetchOnePointErrorAction => {
    return {
        type: OnePointActionTypes.FETCH_POINT_ERROR,
        payload: message
    }
}

export const fetchOnePoint = (id: number) => {
    return async (dispatch: Dispatch<OnePointAction>) => {
        try {
            dispatch(onePointFetchAction())
            const response = await axios.get<IPoints>(`http://localhost:5000/points/${id}`)
            dispatch(onePointSuccessAction(response.data))
        } catch (error) {
            dispatch(onePointErrorAction(error.message))
        }
    }
}

export const putOnePoint = (point: IPoints) => {
    return async (dispatch: Dispatch<OnePointAction>) => {
        try {
            dispatch(onePointFetchAction())
            const response = await axios.put<IPoints>(`http://localhost:5000/points/${point.id}`, point)
            dispatch(onePointSuccessAction(response.data))
        } catch (error) {
            dispatch(onePointErrorAction(error.message))
        }
    }
}

export const postOnePoint = (point: IPoints) => {
    return async (dispatch: Dispatch<OnePointAction>) => {
        try {
            dispatch(onePointFetchAction())
            const response = await axios.post<IPoints>(`http://localhost:5000/points`, point)
            dispatch(onePointSuccessAction(response.data))
        } catch (error) {
            dispatch(onePointErrorAction(error.message))
        }
    }
}

