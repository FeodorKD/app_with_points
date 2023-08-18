import {useAppDispatch} from "./useAppDispatch";
import {bindActionCreators} from "redux";
import actionCreators from '../store/action-creators/index'
export const useActions = () => {
    const dispatch = useAppDispatch()
    return bindActionCreators(actionCreators, dispatch)
}

