import {loginType} from "./actionsTypes"
import {createAction} from "redux-actions";
import {loginApi} from "api/login"
export const loginAsyncActions = (username,password)=>{
    let loginAction = createAction(loginType,(data)=>({data:data}))
    return async (dispatch)=>{
        let data = await loginApi(username,password);
        console.log(data);
        dispatch(loginAction(data))
    }
}