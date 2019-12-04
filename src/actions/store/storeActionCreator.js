import {storeType} from "./storeActionTypes"
import {storeApi} from "../../api/index"
import {createAction} from "redux-actions"
export const storeAsync=(cityId,storeId,_)=>{
    let storeAsyncAction=createAction(storeType,(data)=>data)
    return async (dispatch)=>{
        let data=await storeApi(cityId,storeId,_);
        dispatch(storeAsyncAction(data.data))
      
    }
}
