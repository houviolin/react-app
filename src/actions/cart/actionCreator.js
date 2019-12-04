import {cartTypes} from "./actionsTypes"
import {createAction} from "redux-actions"
import {cartApi} from "api/cart"

export const cartAsyncAction = () =>{
    let cartAction = createAction(cartTypes,(data)=>({data:data}))
    return async (dispatch)=>{
        let data = await cartApi();
        console.log(data);
        dispatch(cartAction())
    }
}