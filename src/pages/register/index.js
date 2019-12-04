import React from "react"
import { RegisterContainer } from "./styled"
class Register extends React.Component{
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
                                            <input type="text" placeholder="请输入账号"/>
                                        </div>
                                    </div>
                                    <div className="password">
                                        <div className="icon">
                                            <img src="//image1.51tiangou.com/tgou2/img2/login/password.svg" alt=""/>
                                        </div>
                                        <div className="password_input">
                                            <input type="passsword" placeholder="请输入6-16位密码"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form_login">
                                注册
                            </div>
                        </form>
                    </div>
                </div>
            </RegisterContainer>
        )
    }
}

export default Register