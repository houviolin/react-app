import {handleActions} from "redux-actions"
import {registerType} from "actions/register/actionsTypes"
const defaultState = {
    info:'',
}

export default handleActions({
    [registerType]:(state,action)=>{
        let registerState = JSON.parse(JSON.stringify(state));
        registerState.data = action.payload.data.data
        console.log(registerState.data);
        return registerState
    },
},defaultState)