import { legacy_createStore as createStore, combineReducers } from "redux";
import { InputReducer } from "./authRedux/reducer";

const rootReducer = combineReducers({
    Input: InputReducer
})

export const store = createStore(rootReducer)