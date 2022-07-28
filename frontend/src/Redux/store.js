import {legacy_createStore as createStore , combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { ProdListReducer } from "./moisturizers/reducer";


const rootReducer = combineReducers({
    pdata:ProdListReducer

})


export const store = createStore(rootReducer,applyMiddleware(thunk))


  store.subscribe(() => {
    console.log(store.getState());
  })