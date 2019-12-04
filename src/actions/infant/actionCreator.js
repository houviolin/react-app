import {infantType,infantType2} from "./actionsTypes"
import {createAction} from "redux-actions";
import {makeupApi,makeupApi2} from "api/makeup"
export const infantAsyncActions = (cityId,pid,cid,index,_)=>{
    let infantAction = createAction(infantType,(data)=>({data:data}))
    return async (dispatch)=>{
        let data = await makeupApi(cityId,pid,cid,index,_);
        // console.log(data);
        dispatch(infantAction(data))
    }
}

export const infantAsyncActions2 = (cityId, pid, cid,index,time,tabIndex,childIndex,currentView)=>{
    let infantAction2 = createAction(infantType2,(data)=>({data:data}))
    return async (dispatch)=>{
        let data = await makeupApi2(cityId, pid, cid,index,time,tabIndex,childIndex,currentView);
        // console.log(data);
        dispatch(infantAction2(data))
    }
}