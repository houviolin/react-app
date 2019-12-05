import React from "react"
import { LoginContainer } from "./styled"
import {withRouter} from "react-router-dom"
import {mapStateToProps,mapDispatchToProps} from "./mapState"
import { connect } from "react-redux"
@connect(mapStateToProps,mapDispatchToProps)
@withRouter
class Login extends React.Component {
    render() {
        return (
            <LoginContainer>
                <div className="login">
                    <div className="hader">
                        <div>
                            <img src="//image1.51tiangou.com/tgou2/img2/login/logo.svg" alt=""/>
                        </div>
                    </div>
                    <div className="main">
                        <form action="">
                            <div className="info">
                                <div className="info_title">
                                    <div className="info_title1 divactive">
                                        <span className="spanactive">账号密码登录</span>
                                    </div>
                                    <div className="info_title2">
                                        <span>手机快捷登录</span>
                                    </div>
                                </div>
                                <div className="info_conten">
                                    <div className="username">
                                        <div className="icon">
                                            <img src="//image1.51tiangou.com/tgou2/img2/login/username.svg" alt=""/>
                                        </div>
                                        <div className="username_input">
                                            <input type="text" placeholder="请输入11位手机号" ref="username"/>
                                        </div>
                                    </div>
                                    <div className="password">
                                        <div className="icon">
                                            <img src="//image1.51tiangou.com/tgou2/img2/login/password.svg" alt=""/>
                                        </div>
                                        <div className="password_input">
                                            <input type="passsword" placeholder="请输入6-16位密码" ref="password"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form_login" onClick={this.props.handleLogin.bind(this)}>
                                登陆
                            </div>
                            <div className="form_message">
                                <span onClick={this.props.handleRegister.bind(this)}>免费注册</span> | <span>忘记密码</span>
                            </div>
                        </form>
                    </div>
                </div>
            </LoginContainer>

        )
    }
}

export default Login