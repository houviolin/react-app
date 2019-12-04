import {detailsTypes} from "./actionsTypes"
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