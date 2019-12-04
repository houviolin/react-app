import {nationalType,nationalType2} from "./actionsTypes"
import {createAction} from "redux-actions";
import {makeupApi,makeupApi2} from "api/makeup"
export const nationalAsyncActions = (cityId,pid,cid,index,_)=>{
    let nationalAction = createAction(nationalType,(data)=>({data:data}))
    return async (dispatch)=>{
        let data = await makeupApi(cityId,pid,cid,index,_);
        // console.log(data);
        dispatch(nationalAction(data))
    }
}

export const nationalAsyncActions2 = (cityId, pid, cid,index,time,tabIndex,childIndex,currentView)=>{
    let nationalAction2 = createAction(nationalType2,(data)=>({data:data}))
    return async (dispatch)=>{
        let data = await makeupApi2(cityId, pid, cid,index,time,tabIndex,childIndex,currentView);
        // console.log(data);
        dispatch(nationalAction2(data))
    }
}