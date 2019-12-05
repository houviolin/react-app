import {detaillistType} from "./actionTypes"
import {createAction} from "redux-actions"
import {detaillistApi} from "api/details/index.js"
export const detaillistAsync=()=>{
    let detaillistActions=createAction(detaillistType,(data)=>({data:data}))
    return async (dispatch)=>{
        let data=await detaillistApi();
       dispatch(detaillistActions(data.data))
    }
}