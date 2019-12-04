import styled from "styled-components"

export const GoodGoods = styled.div`
height:100%;
overflow:auto;
.goodgoods{
    width:100%;
    height:100%;
    overflow: auto;
    padding-bottom:0.5rem;
}
.goodgoods_box{
    /* height:100%; */
    /* display: flex; */
    flex-direction: column;
    overflow: auto;
    align-items: center;
    padding-bottom:1rem;
}
.header{
    width:7.5rem;
    margin:0 auto;
    position: relative;
    height:0.88rem;
    display:flex;
    justify-content: center;
    align-items: center;
    div{
        position:absolute;
        top:0.16rem;
        right:0.3rem;
        min-width:20%;
        height:0.54rem;
        display:flex;
        align-items: center;
        .message{
            color:black;
        }
        a{
            display:inline-block;
            float:left;
        }
        a:nth-child(1){
            width:0.82rem;
            height:0.48rem;
            line-height:0.48rem;
            display: flex;
            align-items: center;
            i{
                width:0.44rem;
                height:0.44rem;
            }
            .iconfont{
                font-size:0.4rem;
            }
        }
        a:nth-child(2){
            width:0.44rem;
            height:0.54rem;
            color:#000;
            display:flex;
            justify-content: center;
            align-items: center;
            img{
                width:0.44rem;
                height:0.44rem;
                border-radius: 50%;
            }
        }
    }
}
.nav1{
    margin:0 auto;
    width:7.5rem;
    height:2.3rem;
    padding:0.2rem 0.2rem 0 0.2rem;
    display:flex;
    justify-content: space-between;
    align-items: center;
    .nav1_box{
        width:25%;
        height:100%;
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        div:nth-child(1){
            width:1.5rem;
            height:1.5rem;
            img{
                width:100%;
                height:100%;
            }
        }
        div:nth-child(2){
            width:1.5rem;
            height:0.4rem;
            text-align:center;
            line-height:0.4rem;
            color: black;
            margin-top:0.1rem;
            font-size:0.26rem;
        }
    }
}
.animate{
    margin:0 auto;
    width:7.5rem;
    height:3.42rem;
    padding:0.3rem 0.2rem 0.1rem 0.2rem;
    img{
        width:100%;
        height:3.02rem;
    }
}
.ant-carousel .slick-slide {
    text-align: center;
    height: 3.02rem;
    line-height: 160px;
    background: #364d79;
    overflow: hidden;
  }
  
  .ant-carousel .slick-slide h3 {
    color: #fff;
  }
.nav2{
    margin:0 auto;
    width:7.5rem;
    height:1.9rem;
    padding:0.3rem 0.4rem 0 0.4rem;
    display:flex;
    justify-content: space-between;
    align-items: center;
    .nav2_box{
        width:20%;
        height:100%;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .up{
            width:1rem;
            height:1rem;
            img{
                width:100%;
                height:100%;
            }
        }
        .down{
            width:1rem;
            height:0.4rem;
            margin-top:0.1rem;
            text-align:center;
            line-height:0.4rem;
            font-size: 0.24rem;
            color:#666;
        }
    }
}
.nav3{
    width:7.5rem;
    height:0.8rem;
    margin:0 auto;
    padding:0.1rem 0 0.06rem;
    display: flex;
    justify-content: center;
    align-items: center;
    span{
        font-size:0.28rem;
        display: inline-block;
        margin:0 0.3rem;
        padding:0.06rem 0 0.04rem;
        border-bottom:0.04rem solid transparent;
    }
    .activefont{
        font-size:0.28rem;
        color:#ff4c48;
        display: inline-block;
        margin:0 0.3rem;
        padding:0.06rem 0;
        font-weight:bolder;
        border-bottom:0.04rem solid transparent;
        border-color:#ff4c48;
    }
}
.main{
    width:7.5rem;
    margin:0 auto;
    padding:0 0.2rem;
    background-image: linear-gradient(rgb(255, 255, 255) 0%, rgb(238, 239, 244) 270px);
    .main_box{
        width:100%;
        .main_content{
            width:48.5%;
            // padding:0 0.05rem;
            margin:0 0.05rem;
            margin-top:0.1rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background:#fff;
            float: left;
            .main_pic{
                width:100%;
                height:3.5rem;
                position: relative;
                background:pink;
                .main_pic1{
                    width:100%;
                    height:100%;
                    div{
                        width:100%;
                        height:100%;
                    }
                }
                .main_pic2{
                    position: absolute;
                    top:0;
                    bottom:0;
                    left:0;
                    right:0;
                    margin:auto;
                    width:0.86rem;
                    height:0.86rem;
                    border-radius: 50%;
                    border: 3px solid #fff;
                    text-align:center;
                    line-height:0.86rem;
                    i{
                        font-size:0.4rem;
                        color:#fff;
                    }
                }
                .main_pic3{
                    position: absolute;
                    top:0.1rem;
                    left:0.1rem;
                    height:0.36rem;
                    background: rgba(0,0,0,.3);
                    color: #fff;
                    line-height: 0.36rem;
                    padding: 0 0.14rem;
                    border-radius: 0.2rem;
                    i{
                        font-size:0.3rem;
                        margin-right:0.1rem;
                    }
                    span{
                        font-size:0.26rem;
                    }
                }
            }
            .main_title{
                width:3.5rem;
                padding:0.1rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                p{
                    height: 0.7rem;
                    line-height:0.35rem;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                }
                .main_tg{
                    width:3.3rem;
                    height:0.58rem;
                    padding-bottom:0.1rem;
                    margin-top:0.2rem;
                    display: flex;
                    align-items: center;
                    div:nth-child(1){
                        float:left;
                        width:0.48rem;
                        height:00.48rem;
                        display: flex;
                        justify-content:center;
                        align-items: center;
                        margin-right:0.1rem;
                        border:1px solid #eee;
                        border-radius: 49%;
                        img{
                            width:0.44rem;
                            height:0.44rem;
                            border-radius: 49%;
                        }
                    }
                    div:nth-child(2){
                        width:1.5rem;
                        height:0.34rem;
                        line-height:0.34rem;
                        overflow: hidden;
                        float: left;
                    }
                    div:nth-child(3){
                        float: left;
                        height:0.4rem;
                        margin-left:auto;
                        display: flex;
                        align-items: center;
                        color: #ff4c48;
                        i{
                            width:0.4rem;
                            height:0.4rem;
                            text-align:center;
                            font-size:.4rem;
                            margin-right:0.06rem;
                        }
                        font-size:0.24rem;
                    }
                }
            }
        }
    }
    .main_fllow{
        width:100%;
        margin:0 auto;
        padding:0.5rem 0;
        margin-bottom:1rem;
        img{
            width:100%;
            height:3.08rem;
            padding:0.5rem 0 0.2rem 0;
        }
        p{
            width:100%;
            height:0.4rem;
            text-align:center;
            line-height:0.4rem;
            font-size:0.26rem;
        }
        div{
            width:1.96rem;
            height:0.72rem;
            text-align:center;
            line-height:0.72rem;
            margin:0 auto;
            margin-top:0.4rem;
            font-size:0.3rem;
            background:#ff4c48;
            color:#fff;
            border-radius: 10rem;
        }
    }
    .tg-loading{
        width:100%;
        height:0.8rem;
        text-align:center;
        line-height:0.8rem;
    }
}
`