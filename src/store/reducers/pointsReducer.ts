import {ActionTypes, PointAction, PointState} from "../types/storeTypes";

const initialState: PointState = {
    points: [],
    loading: true,
    error: null
}

export const pointReducer = (state = initialState, action: PointAction): PointState => {
    switch (action.type){
        case ActionTypes.FETCH_POINTS:
            return {loading: true, error: null, points: []}
        case ActionTypes.FETCH_POINTS_SUCCESS:
            return {loading: false, error: null, points: action.payload}
        case ActionTypes.FETCH_POINTS_ERROR:
            return {loading: false, error: action.payload, points: []}
        case ActionTypes.DELETE_POINT:
            return {loading:false, error: null, points: state.points.filter( point => point.id !== action.payload)}
        default:
            return state
    }
}

