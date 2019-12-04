import {healthcareType,healthcareType2} from "./actionsTypes"
import {createAction} from "redux-actions";
import {makeupApi,makeupApi2} from "api/makeup"
export const healthcareAsyncActions = (cityId,pid,cid,index,_)=>{
    let healthcareAction = createAction(healthcareType,(data)=>({data:data}))
    return async (dispatch)=>{
        let data = await makeupApi(cityId,pid,cid,index,_);
        // console.log(data);
        dispatch(healthcareAction(data))
    }
}

export const healthcareAsyncActions2 = (cityId, pid, cid,index,time,tabIndex,childIndex,currentView)=>{
    let healthcareAction2 = createAction(healthcareType2,(data)=>({data:data}))
    return async (dispatch)=>{
        let data = await makeupApi2(cityId, pid, cid,index,time,tabIndex,childIndex,currentView);
        // console.log(data);
        dispatch(healthcareAction2(data))
    }
}