import {essenceScrollType,essenceProjectType} from "./actionsTypes"
import {createAction} from "redux-actions";
import {scrollhandleApi,projectApi} from "api/essence"
export const essenceAsyncScrollAction = (cityId, selected, pid, cid, index, _)=>{
    let essenceScrollAction = createAction(essenceScrollType,(data)=>({data:data}))
    return async (dispatch)=>{
        let data = await scrollhandleApi(cityId, selected, pid, cid, index,_);
        dispatch(essenceScrollAction(data))
    }
}

export const essenceAsyncProjectAction = (cityId,selected,pid,cid,index,tabIndex,childIndex,currentView,_)=>{
    let essenceProjectAction = createAction(essenceProjectType,(data)=>({data:data}))
    return async (dispatch)=>{
        let data = await projectApi(cityId,selected,pid,cid,index,tabIndex,childIndex,currentView,_);
        dispatch(essenceProjectAction(data))
    }
}