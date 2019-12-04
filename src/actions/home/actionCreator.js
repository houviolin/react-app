import {homeType,homeType2} from "./actionsTypes"
import {createAction} from "redux-actions";
import {makeupApi,makeupApi2} from "api/makeup"
export const homeAsyncActions = (cityId,pid,cid,index,_)=>{
    let homeAction = createAction(homeType,(data)=>({data:data}))
    return async (dispatch)=>{
        let data = await makeupApi(cityId,pid,cid,index,_);
        // console.log(data);
        dispatch(homeAction(data))
    }
}

export const homeAsyncActions2 = (cityId, pid, cid,index,time,tabIndex,childIndex,currentView)=>{
    let homeAction2 = createAction(homeType2,(data)=>({data:data}))
    return async (dispatch)=>{
        let data = await makeupApi2(cityId, pid, cid,index,time,tabIndex,childIndex,currentView);
        // console.log(data);
        dispatch(homeAction2(data))
    }
}