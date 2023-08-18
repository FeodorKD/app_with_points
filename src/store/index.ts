import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {pointReducer} from "./reducers/pointsReducer";
import {rootReducer} from "./reducers/indexReducer";

export const pointStore = createStore(rootReducer, applyMiddleware(thunk))

export type AppState = ReturnType<typeof rootReducer>