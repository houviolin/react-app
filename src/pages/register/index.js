import React from "react"
import { RegisterContainer } from "./styled"
import {withRouter} from "react-router-dom"
import {mapStateToProps,mapDispatchToProps} from "./mapState"
import { connect } from "react-redux"
@connect(mapStateToProps,mapDispatchToProps)
@withRouter
class Register extends React.Component{
    constructor(){
        super()
        this.state = {
            info:'',
        }
    }
    render(){
        return(
            <RegisterContainer>
                <div className="reigster">
                    <div className="hader">
                        <div>
                            <img src="//image1.51tiangou.com/tgou2/img2/login/logo.svg" alt=""/>
                        </div>
                    </div>
                    <div className="main">
                        <form action="">
                            <div className="info">
                                <div className="info_title">
                                    <span>免费注册</span>
                                </div>
                                <div className="info_conten">
                                    <div className="username">
                                        <div className="icon">
                                            <img src="//image1.51tiangou.com/tgou2/img2/login/username.svg" alt=""/>
                                        </div>
                                        <div className="username_input">
                                            <input type="text" placeholder="请输入账号" ref="username"/>
                                        </div>
                                    </div>
                                    <div className="password">
                                        <div className="icon">
                                            <img src="//image1.51tiangou.com/tgou2/img2/login/password.svg" alt="" />
                                        </div>
                                        <div className="password_input">
                                            <input type="password" placeholder="请输入6-16位密码" ref="password"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form_register" onClick={this.props.handleRegister.bind(this)}>
                                注册
                            </div>
                            <div className="form_message" onClick={this.props.handleLogin.bind(this)}>
                                登录
                            </div>
                        </form>
                    </div>
                </div>
            </RegisterContainer>
        )
    }
    componentDidMount(){
    }
}

export default Register