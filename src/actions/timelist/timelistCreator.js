import {timeListType,timeList2Type} from "./timelistTypes"
import {timelistApi,timelistlistApi} from "api/timelist"
import {createAction} from "redux-actions"
export const timeListAsync=(itemId,id,pageType,_)=>{
    let timelistAsyncAction=createAction(timeListType,(data)=>(data))
    return async (dispatch)=>{
        let data=await timelistApi(itemId,id,pageType,_)
         dispatch(timelistAsyncAction(data.data[0].data.items))
    }
}
export const timeListlistAsync=(id,pageType,_)=>{
    let timelistAsyncAction=createAction(timeList2Type,(data)=>(data))
    return async (dispatch)=>{
        let data=await timelistlistApi(id,pageType,_);
         dispatch(timelistAsyncAction(data.data.splice(3)))
    }
}