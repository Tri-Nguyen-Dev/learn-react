import { combineReducers } from "redux";
import Todoreducer from "../todoSlice";


const rootReducer = combineReducers({
    todos: Todoreducer
})

export default rootReducer