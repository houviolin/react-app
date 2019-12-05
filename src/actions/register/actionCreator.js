import {registerType} from "./actionsTypes"
import {createAction} from "redux-actions";
import {registerApi} from "api/register"
export const registerAsyncActions = (username,password)=>{
    let registerAction = createAction(registerType,(data)=>({data:data}))
    return async (dispatch)=>{
        let data = await registerApi(username,password);
        console.log(data.data);
        dispatch(registerAction(data))
        // return data.data
    }
}