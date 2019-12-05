// import { registerAsyncActions } from "actions/register/actionCreator"
import {registerApi} from "api/register"
export const mapStateToProps = (state) => ({
    info: state.register.info,
})
export const mapDispatchToProps = (dispatch) => ({
    handleRegister(e) {
        e.preventDefault();
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        this.props.registerAsyncActions(username,password)
    },
    async registerAsyncActions(username,password){
        let data = await registerApi(username,password);
        console.log(data.data.status);
        if(data.data.status == 1){
            alert(data.data.info);
            this.history.push("/login")
        }
    },
    handleLogin() {
        this.props.history.push("/login")
    }
})