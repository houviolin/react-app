import styled from "styled-components"

export const LoginContainer = styled.div`
width:100%;
height:100%;
background: rgb(238, 239, 244);
.login{
    height:100%;
    .hader{
        width:7.5rem;
        margin:0 auto;
        height:3.2rem;
        background: #FF5652;
        div{
            width:100%;
            height:100%;
            padding-top:0.5rem;
        }
        img{
            width:2.62rem;
            height:1.3rem;
            margin:auto;
        }
    }
    .main{
        width:7.5rem;
        height:5.5rem;
        margin-top:-1rem;
        form{
            width:7.1rem;
            height:100%;
            margin:auto;
            .info{
                width:100%;
                height:3.66rem;
                border-radius:0.3rem;
                background:#fff;
                padding-top:0.2rem;
                padding-bottom:0.4rem;
                .info_title{
                    height:.9rem;
                    padding:0 0.4rem;
                    div{
                        float:left;
                        width:50%;
                        height:100%;
                        font-size:0.32rem;
                        color:#999;
                        span{
                            display:block;
                            width:1.92rem;
                            height:.9rem;
                            text-align:center;
                            line-height:.9rem;
                            margin:auto;
                            border-bottom:3px solid #fff;
                        }
                    }
                    .divactive{
                        color:#ff4c48;
                        span{
                            border-bottom:3px solid #ff4c48;
                        }
                    }
                }
                .info_conten{
                    width:100%;
                    height:1.98rem;
                    margin-top:0.2rem;
                    padding:0 0.3rem;
                    .username,.password{
                        width:100%;
                        height:0.98rem;
                        .icon{
                            width:0.7rem;
                            height:100%;
                            float:left;
                            position:relative;
                            img{
                                width:0.4rem;
                                position:absolute;
                                top:0;
                                bottom:0;
                                left:0;
                                right:0;
                                margin:auto;
                            }
                        }
                        .username_input,.password_input{
                            float:right;
                            width:5.8rem;
                            height:0.98rem;
                            border-bottom:1px solid #ccc;
                            padding:0.2rem 0.1rem;
                            input{
                                width:100%;
                                height:100%;
                                border:0;
                                output:0;
                                font-size:0.3rem;
                            }
                        }
                    }
                }
            }
            .form_login{
                width:100%;
                height:0.92rem;
                margin-top:0.4rem;
                text-align:center;
                line-height:0.92rem;
                font-size:0.28rem;
                border-radius:0.15rem;
                background:#ccc;
                color:#fff;
            }
            .form_message{
                width:100%;
                height:0.32rem;
                margin-top:0.2rem;
                text-align:center;
                line-height:0.32rem;
                color:#bbb;
            }
        }
    }
}
` 