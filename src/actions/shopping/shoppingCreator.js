import {shoppingType,shoppingAgianTypes} from "./shoppingTypes"
import {shoppingApi,shoppingAgianApi} from "api/shopping"
import {createAction} from "redux-actions"
export const shoppingAsync=(cityId,storeId,_)=>{
    let shoppingAsyncAction=createAction(shoppingType,(data)=>data)
    return async (dispatch)=>{
        let data=await shoppingApi(cityId,storeId,_);
         dispatch(shoppingAsyncAction(data))
    }
}
export const shoppingagainAsync=(currentView)=>{
    let shoppingagainAsyncAction=createAction(shoppingAgianTypes,(data)=>data)
    return async (dispatch)=>{
        let data=await shoppingAgianApi(currentView);
         dispatch(shoppingagainAsyncAction(data))
    }
}

