import {Prod_List_Loading,Prod_List_Success,Prod_List_Failure} from "./action";

export const ProdListReducer=(store={pdata:[],isLoading:false,isError:false},{type,payload})=>{
    switch(type){
        case Prod_List_Loading:
            return{
                ...store,
                isLoading1:true,
                isError1:false,
                pdata:[]
            };
        case  Prod_List_Success:
            return{
                ...store,
                isLoading1:false,
                isError1:false,
                pdata:payload
            };
        case  Prod_List_Failure:
            return{
                ...store,
                isLoading1:false,
                isError1:true,
                pdata:[]
            }; 
        default:
            return store;         
    }
}