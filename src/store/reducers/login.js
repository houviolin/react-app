import {handleActions} from "redux-actions"
import {loginType} from "actions/login/actionsTypes"
const defaultState = {
    info:'',
}

export default handleActions({
    [loginType]:(state,action)=>{
        let loginState = JSON.parse(JSON.stringify(state));
        loginState.info = action.payload.data.data.info
        console.log(loginState.info);
        // if(loginState.info === "注册成功"){
        //     this.props.history.push("/login")
        // }
        return loginState
    },
},defaultState)