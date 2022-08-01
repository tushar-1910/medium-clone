import { Input } from "./action";

export const InputReducer = (store={Input:""}, action) => {
    switch(action.type){
        case Input:{
            return {
                Input : action.payload
            }
        }
        default:{
            return store
        }
    }
}