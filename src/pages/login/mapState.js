// import { loginAsyncActions } from "actions/login/actionCreator"
import {loginApi} from "api/login"
export const mapStateToProps  = (state) => ({
    homelist:state.home.homelist,
    homelist2:state.home.homelist2,
    homelist3:state.home.homelist3,
})
export const mapDispatchToProps = (dispatch) =>({
    handleRegister(){
        this.props.history.push("/register")
    },
    handleLogin(e){
        e.preventDefault();
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        this.props.loginAsyncActions(username,password);
    },
    async loginAsyncActions(username,password){
        let data = await loginApi(username,password);
        if(data.data.code == 1){
            alert(data.data.info);
            this.history.push("/store")
        }
    }
})