import styled from "styled-components"

export const NationalContainer = styled.div`
height:100%;
overflow:auto;
padding-top:1.68rem;
padding-bottom:1rem;
.national{
    width:7.5rem;
    height:100%;
    margin:0 auto;
    overflow:auto;
    flex:1;
    flex-direction:column;
    background-color: rgb(238, 238, 238);
    .header_title{
        width:7.5rem;
        height:0.96rem;
        margin:0 auto;
        padding:0.2rem 0.2rem 0 0.2rem;
        background:#fff;
        .header_title_up{
            height:0.42rem;
            font-size:0.3rem;
            color:#333;
        }
        .header_title_down{
            height:0.34rem;
            font-size:0.22rem;
            color:#999;
        }
    }
    .header_title.margin{
        margin-top:0.2rem;
    }
    .jxfl{
        padding:0.2rem;
        padding-top:0;
        height:4.68rem;
        width:100%;
        background:#fff;
        .jxfl_box{
            width:100%;
            height:100%;
            border:1px solid #ebebeb;
            a{
                display:block;
                float:left;
                width:50%;
                height:50%;
                img{
                    width:100%;
                    height:100%;
                }
            }
            a:nth-child(1){
                border-right:1px solid #ebebeb;
            }
            a:nth-child(3){
                border-top:1px solid #ebebeb;
                border-right:1px solid #ebebeb;
            }
            a:nth-child(4){
                border-top:1px solid #ebebeb;
            }
        }
    }
    .main1{
        width:100%;
        margin:0 auto;
        overflow: hidden;
        margin-bottom:0.2rem;
        .main1_box{
            width:100%;
            margin:0 auto;
            .main1_box_main{
                padding-bottom:0.2rem;
                .main1_box_main_pic{
                    display:block;
                    width:100%;
                    height:3.2rem;
                    color:#fff;
                    position:relative;
                    img{
                        width:100%;
                        height:100%;
                    }
                    .iconfont{
                        font-size:0.4rem;
                        position:absolute;
                        bottom:-0.2rem;
                        left:50%;
                        right:0;
                    }
                }
                .scroll-container{
                    width:100%;
                    padding-bottom:0.04rem;
                    padding-right:0.2rem;
                    display:flex;
                    overflow:auto;
                    background:#fff;
                    .scroll-container_box{
                        flex-shrink:0;
                        width:2rem;
                        height:2.8rem;
                        margin:0.2rem 0 0 0.2rem;
                        outline: 1px solid #ebebeb;
                        img{
                            width:100%;
                            height:100%;
                        }
                    }
                }
                .scroll-container.margin20{
                    width:100%;
                    height:3.14rem;
                    margin-top:0.2rem;
                    padding:0 0.2rem 0 0.1rem;
                    background:#fff;
                    display:flex;
                    overflow:auto;
                    .scroll-container_box.border{
                        width:2rem;
                        flex-shrink:0;
                        height:2.94rem;
                        border-radius: 2px;
                        border: 1px solid #ebebeb;
                        margin:0 0 0.2rem 0.1rem;
                        a{
                            display:block;
                            width:100%;
                            height:100%;
                            display:flex;
                            flex-direction:column;
                            align-items:content;
                            .scroll-container_box_up{
                                width:1.96rem;
                                height:1.96rem;
                                img{
                                    width:100%;
                                    height:100%;
                                }
                            }
                            .scroll-container_box_down{
                                width:1.96rem;;
                                height:0.94rem;
                                p:nth-child(1){
                                    width:1.76rem;
                                    height:.34rem;
                                    margin:0 auto;
                                    overflow: hidden;
                                    -webkit-box-orient: vertical;
                                    text-overflow: ellipsis;
                                    white-space: initial;
                                    line-height:0.34rem;
                                    font-size:0.24rem;
                                    color:#222;
                                }
                                p:nth-child(2){
                                    width:1.76rem;
                                    margin:0 auto;
                                    margin-top:0.1rem;
                                    height:0.3rem;
                                    line-height:0.3rem;
                                    span{
                                        font-size:0.3rem;
                                        color:#ff4c48;;
                                    }
                                    del{
                                        font-size:0.22rem;
                                        color:#999;
                                        margin-left:0.1rem;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    .main2{
        width:100%;
        .main2_title{
            width:7.5rem;
            height:0.96rem;
            margin:0 auto;
            margin-top:0.2rem;
            padding:0.2rem 0.2rem 0 0.2rem;
            background:#fff;
            .main_title_up{
                height:0.42rem;
                font-size:0.3rem;
                color:#333;
            }
            .main_title_down{
                height:0.34rem;
                font-size:0.22rem;
                color:#999;
            }
        }
        .borderb{
            width:7.5rem;
            margin:0 auto;
            padding:0.3rem;
            height:3.64rem;
            background:#fff;
            border-bottom: 1px solid #ccc;
            a{
                display:block;
                .borderb_l{
                    float:left;
                    width:2.84rem;
                    height:100%;
                    border: 1px solid #ccc;
                    img{
                        width:100%;
                        height:100%;
                    }
                }
                .borderb_r{
                    float:left;
                    width:4.06rem;
                    padding-left:0.2rem;
                    .borderb_r1{
                        width:3.86rem;
                        div{
                            width:100%;
                            overflow: hidden;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            text-overflow: ellipsis;
                            white-space: initial;
                        }
                        .borderb_title{
                            height:0.65rem;
                            line-height:.325rem;
                            font-size:0.26rem;
                            color:#333;
                            -webkit-line-clamp: 2;
                            
                        }
                        .borderb_content{
                            
                            height:0.84rem;
                            margin-top: .066666rem;
                            line-height: 0.24rem;
                            -webkit-line-clamp: 3;
                            font-size:0.2rem;
                            color:#999;
                        }
                        .borderb_add{
                            -webkit-line-clamp: 1;
                            height:0.34rem;
                            line-height:0.34rem;
                            padding: 0.04rem 0;
                            margin-top:0.1rem;
                            font-size:0.2rem;
                            color:#999;
                            display:flex;
                            align-items:center;
                            img{
                                /* float:left; */
                                display:inline-block
                                width:0.24rem;
                                height:0.24rem;
                            }
                            span{
                                margin-left:0.2rem;
                                font-size:0.2rem;
                                color:#999;
                            }
                        }
                        .borderb_pri{
                            margin-top:0.1rem;
                            height:0.4rem;
                            line-height:0.4rem;
                            span{
                                font-size:0.28rem;
                                color:#ff4c48;
                            }
                            del{
                                margin-left:0.2rem;
                                font-size:0.2rem;
                                color:#999;
                            }
                        }
                    }
                    .borderb_r2{
                        margin-top:0.05rem;
                        height:0.34rem;
                        line-height:0.28rem;
                        font-size:0.2rem;
                        padding:0.04rem 0.08rem;
                        border: 1px solid #ff9800;
                        color: #ff9800;
                        border-radius: 10rem;
                        display:inline-block;
                    }
                }
            }
        }
    }
}
`