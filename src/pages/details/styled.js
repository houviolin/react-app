import styled from "styled-components";

export const Details = styled.div`
width:100%;
height:100%;
overflow:auto;
.details{
    width:100%;
    height:100%;
    overflow:auto;
    position:relative;
    .header{
        position:fixed;
        top:0;
        left:0;
        width:7.5rem;
        margin:0 auto;
        height:0.88rem;
        line-height:0.88rem;
        background:#fff;
        div{
            float:left;
        }
        .header1{
            width:1.5rem;
            height:100%;
            line-height:0.88rem;
            
            i{
                display:block;
                width:0.88rem;
                height:0.88rem;
                text-align:center;
                line-height:0.88rem;
                font-size:0.4rem;
                color:#000;
                font-weight:200;
            }
        }
        .header2{
            width:3.75rem;
            height:100%;
            line-height:0.48rem;
            color:#666;
            font-size:0.3rem;
            .header2_box{
                padding:0.2rem;
                width:1.875rem;
                height:100%;
                text-align:center;
                position:relative;
                span{
                    position:absolute;
                    padding:0.02rem 0.3rem;
                    background:#fff;
                    bottom:0;
                    left:0.66rem;
                }
            }
            .header2_box_active{
                padding:0.2rem;
                width:1.875rem;
                height:100%;
                text-align:center;
                position:relative;
                color:#222;
                span{
                    position:absolute;
                    padding:0.02rem 0.3rem;
                    background:#000;
                    bottom:0;
                    left:0.66rem;
                }
            }
        }
        .header3{
            float:right;
            height:0.52rem;
            padding-right:0.2rem;
            margin-top:0.2rem;
            background:#fff;
            .header3_box{
                height:100%;
                line-height:0.52rem;
                i{
                    font-size:0.5rem;
                    color:#222;
                    margin-right:0.2rem;
                }
            }
        }
    }
    .main{
        width:7.5rem;
        margin:0 auto;
        display:flex;
        flex-direction:column;
        padding-top:.88rem;
        padding-bottom:0.99rem;
        align-items:center;
        background-color: rgb(238, 238, 238);
        .pic{
            width:7.5rem;
            height:7.5rem;
            img{
                width:100%;
                height:100%;
            }
        }
        .pri{
            height:1rem;
            width:7.5rem;
            margin:0 auto;
            background: url(//image1.51tiangou.com/tgou2/img2/product/bg-miaosha.png) no-repeat;
            padding:0.1rem 0.2rem;
            display:flex;
            align-items:center;
            .xsqg{
                width:0.6rem;
                height:0.54rem;
                background: url(//image1.51tiangou.com/tgou2/img2/product/img-xianshimiaosha.png) no-repeat;
                margin-right:0.2rem;
            }
            .price{
                height:0.84rem;
                line-height:0.84rem;
                font-size:0.4rem;
                color:#fff;
                span{
                    font-size:0.6rem;
                }
            }
        }
        .prodectName{
            width:7.5rem;
            height:3.12rem;
            padding:0.2rem;
            background:#fff;
            .prodectcontent{
                width:100%;
                height:2.08rem;
                .prodecttitle{
                    height:0.8rem;
                    margin:0.1rem 0;
                    font-size: 14px;
                    color:#222;
                    img{
                        width:1.32rem;
                        height:0.32rem;
                        display:inline-block;
                    }
                    span{
                        height:0.72rem;
                        font-size:0.28rem;
                        line-height:0.34rem;
                    }
                }
                .prodectdetail{
                    height:1.08rem;
                    line-height:0.36rem;
                    color:#666;
                }
            }
            .prodectadd{
                height:0.64rem;
                img{
                    display:block;
                    float:left;
                    width:0.3rem;
                    height:0.3rem;
                    border-radius:50%;
                    margin-top:0.17rem;
                    margin-right:0.1rem;
                }
                span{
                    display:block;
                    float:left;
                    height:0.64rem;
                    line-height:0.6rem;
                }
            }
        }
        .see{
            width:100%;
            height:0.7rem;
            padding:0.1rem 0.2rem;
            line-height:0.5rem;
            background: #f8f8f8;
            position: relative;
            img{
                display:block;
                float:left;
                margin-top:0.095rem;
                margin-right:0.1rem;
                width:0.28rem;
                height:0.32rem;
            }
            span{
                display:block;
                height:100%;
                line-height:0.5rem;
                color: #ff9800;
            }
            i{
                position:absolute;
                top:0;
                right:0.2rem;
                height:0.7rem;
                line-height:0.7rem;
                font-size:0.3rem;
                color:#999;
            }
        }
        .discount{
            width:100%;
            height:1.82rem;
            background:#fff;
            border-top:1px solid #ccc;
            border-bottom:1px solid #ccc;
            margin-top:0.2rem;
            .discount1{
                width:100%;
                height:0.9rem;
                border-bottom:1px solid #ccc;
                padding:0.2rem;
                position:relative;
                span:nth-child(1){
                    display:block;
                    float:left;
                    height:0.28rem;
                    margin-top:0.11rem;
                    line-height:0.28rem;
                    margin-right:0.2rem;
                    background: #ffedec;
                    font-size: 0.24rem;
                    color: #ff4c48;
                }
                span:nth-child(2){
                    display:block;
                    float:left;
                    height:0.36rem;
                    line-height:0.36rem;
                    margin-top:0.11rem;
                    border: 1px solid #ffa4a2;
                    padding: 0 0.1rem;
                    color: #ff4c48;
                    position:relative;
                    i{
                        position:absolute;
                        top:0.1rem;
                        line-height:0.16rem;
                        background:#fff;
                        color:#fff;
                        display:block;
                        width:0.16rem;
                        height:0.16rem;
                        border:1px solid #ffa4a2;
                        border-radius:50%;
                        font-size:0.1rem;
                        
                    }
                    i:nth-child(1){
                        left:-0.1rem;
                        border-left:0;
                    }
                    i:nth-child(2){
                        right:-0.1rem;
                        border-right:0;
                    }
                }
                span:nth-child(3){
                    position:absolute;
                    top:0;
                    right:0.2rem;
                    height:0.9rem;
                    line-height:0.9rem;
                    font-size:0.3rem;
                    color:#999;
                }
            }
            .discount2{
                width:100%;
                height:0.88rem;
                padding:0.2rem;
                line-height:0.48rem;
                position:relative;
                p{
                    color: #666;
                    width:7rem;
                    -webkit-line-clamp: 1;
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                    white-space: initial;
                }
                span{
                    position:absolute;
                    background:#fff;
                    top:0;
                    right:0.2rem;
                    height:0.9rem;
                    line-height:0.9rem;
                    font-size:0.3rem;
                    color:#999;
                }
            }
        }
    }
    .footer{
        width:100%;
        height:0.99rem;
        background:#fff;
        position:fixed;
        left:0;
        bottom:0;
        .pinpai{
            float:left;
            width:1rem;
            height:100%;
            position:relative;
            img{
                position:absolute;
                left:0;
                right:0;
                top:0;
                bottom:0;
                margin:auto;
                width:0.56rem;
                height:0.68rem;
            }
        }
        .footer_box{
            float:right;
            height:100%;
            div{
                float:left;
                width:3.2rem;
                height:100%;
                text-align:center;
                line-height:0.99rem;
                color:#fff;
                font-size:0.3rem;
                font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei",Arial,sans-serif;
            }
            .jrgwc{
                background: #545C6E;
            }
            .msq{
                background-color: #ff4c48;
            }
        }
    }
}
`