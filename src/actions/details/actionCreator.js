import {detailsTypes,cartPushTypes,cartReduceTypes,cartAddTypes} from "./actionsTypes"
import {createAction} from "redux-actions";
import {detailsApi} from "api/details" 

export const detailsAsyncActions = (id,depot,_) =>{
    let detailsActions = createAction(detailsTypes,(data)=>({data:data}))
    return async (dispatch)=>{
        let data = await detailsApi(id,depot,_);
        // console.log(data);
        dispatch(detailsActions(data))
    }
}
export const cartPushAction = (obj) =>{
    let cartAction  = createAction(cartPushTypes,(obj)=>({obj:obj}))
    return (dispatch)=>{
        dispatch(cartAction(obj))
    }
}

export const cartReduceAsyncAction = (id) =>{
    let cartAction  = createAction(cartReduceTypes,(id)=>({id:id}))
    return (dispatch)=>{
        dispatch(cartAction(id))
    }
}

export const cartAddAsyncAction = (id) =>{
    let cartAction  = createAction(cartAddTypes,(id)=>({id:id}))
    return (dispatch)=>{
        dispatch(cartAction(id))
    }
}