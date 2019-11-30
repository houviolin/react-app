import styled from "styled-components"

export const WorldWide= styled.div`
.worldwide{
    width:100%;
    margin:0 auto;
    // height:100%;
    overflow:auto;
    .worldwide_box{
        width:7.5rem;
        margin:0 auto;
        flex-direction: column;
        align-items: center;
    }
}
.header{
    height:0.88rem;
    display: flex;
    align-items: center;
    .header_list{
        float:left;
        width:0.74rem;
        height:0.88rem;
        .icon{
            color:#222;
        }
        a{
            display: block;
            width:100%;
            height:100%;
            i{
                float:right;
                width:0.44rem;
                height:0.88rem;
                line-height:0.88rem;
                font-size:0.5rem;
            }
        }
    }
    .header_search{
        float:left;
        width:6.02rem;
        height:0.92rem;
        position: relative;
        .header_search_main{
            width:5.52rem;
            height:0.52rem;
            position: absolute;
            background:#F4F4F4;
            top:0;
            left:0;
            bottom:0;
            right:0;
            margin:auto;
            form{
                width:100%;
                height:100%;
                display: flex;
                align-items: center;
                color:#999;
                i{
                    display:inline-block;
                    width:0.36rem;
                    height:0.36rem;
                    margin:0 0.2rem;
                    font-size:0.34rem;
                }
                input{
                    border:0;
                    outline: 0;
                    display: inline-block;
                    width:4.66rem;
                    height:0.52rem;
                    background:#F4F4F4;
                    font-size:0.24rem;
                }
            }
        }
    }
    .header_cart{
        float:right;
        width:0.44rem;
        height:0.48rem;
        margin-right:0.3rem;
        i{
            font-size:0.4rem;
            color:#222;
        }
    }
}
.nav{
    width:100%;
    height:0.8rem;
    background:#fff;
    .navone{
        width:100%;
        height:100%;
        padding:0 0.2rem;
        overflow:auto;
        .navtwo{
            height:100%;
            display: flex;
            overflow: auto;
            align-items: center;
            flex-wrap: nowrap;
            .nav_box{
                flex-shrink:0;
                height:0.8rem;
                line-height: 0.6rem;
                padding:0.1rem 0;
                margin-right:0.3rem;
                border-bottom:2px solid transparent;
                font-size:0.28rem;
                color:#000;
            }
        }
    }
}
`