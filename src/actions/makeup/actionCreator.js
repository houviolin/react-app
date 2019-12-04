import {makeupType,makeupType2} from "./actionsTypes"
import {createAction} from "redux-actions";
import {makeupApi,makeupApi2} from "api/makeup"
export const makeupAsyncActions = (cityId,pid,cid,index,_)=>{
    let makeupAction = createAction(makeupType,(data)=>({data:data}))
    return async (dispatch)=>{
        let data = await makeupApi(cityId,pid,cid,index,_);
        // console.log(data);
        dispatch(makeupAction(data))
    }
}

export const makeupAsyncActions2 = (cityId, pid, cid,index,time,tabIndex,childIndex,currentView)=>{
    let makeupAction2 = createAction(makeupType2,(data)=>({data:data}))
    return async (dispatch)=>{
        let data = await makeupApi2(cityId, pid, cid,index,time,tabIndex,childIndex,currentView);
        // console.log(data);
        dispatch(makeupAction2(data))
    }
}