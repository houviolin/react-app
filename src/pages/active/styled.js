import styled from "styled-components"
export const Actived = styled.div`
height:100%;
overflow:auto;
padding-top:1.68rem;
padding-bottom:1rem;
.active{
    width:7.5rem;
    height:100%;
    margin:0 auto;
    overflow:auto;
    flex:1;
    flex-direction:column;
    .header{
        width:7.5rem;
        height:4rem;
        margin:0 auto;
        padding:0.2rem;
        background: linear-gradient(135deg, #ffe6e6 0%,#ffface 100%);
        .head{
            width:100%;
            height:100%;
            padding-top:0.2rem;
            border:1px solid #ebebeb;
            background:#fff;
            .head_up{
                width:100%;
                height:0.6rem;
                padding:0.1rem 0.2rem;
                display:flex;
                justify-content:space-between;
                align-items:center;
                .head_up_l{
                    img{
                        /* width:1.7rem;
                        height:.32rem; */
                        display:inline-block;
                    }
                    .time{
                        display:inline-block;
                        /* height:0.4rem; */
                    }
                }
                .head_up_r{
                    font-size:0.26rem;
                    color:#999;
                    line-height:0.3rem;
                    .iconfont{
                        margin-left:0.05rem;
                        font-size:0.2rem;
                    }
                }
            }
        }
    }
}
`