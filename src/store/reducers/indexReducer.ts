import {combineReducers} from "redux";
import {pointReducer} from "./pointsReducer";
import {onePointReducer} from "./onePointReducer";


export const rootReducer = combineReducers({
    onePoint: onePointReducer,
    points: pointReducer
})