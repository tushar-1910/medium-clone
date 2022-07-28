export const Prod_List_Loading="Prod_List_Loading";
export const Prod_List_Success="Prod_List_Success";
export const Prod_List_Failure="Prod_List_Failure";

export const prodListLoading=()=>({
  type:Prod_List_Loading
});
export const prodListSuccess=(payload)=>({
    type:Prod_List_Success,
    payload
});
export const prodListError=()=>({
    type:Prod_List_Failure
});
 
export const getProductList=({productid})=>
    async(dispatch)=>{
        try {
            dispatch(prodListLoading());
            let res=await fetch(`http://localhost:8080/products`);
            let data=await res.json();
            //console.log(data)
            dispatch(prodListSuccess(data));
        } catch (error) {
            //console.log(error)
            dispatch(prodListError())
        }
    };
  