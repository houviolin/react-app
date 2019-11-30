import styled from "styled-components"

export const Essencs = styled.div`
.essence{
    width:7.5rem;
    margin:0 auto;
    .pic{
        width:7.5rem;
        height:2.4rem;
        padding:0.2rem 0;
        margin-bottom:0.2rem;
        background:#fff;
        div{
            width:100%;
            height:100%;
            a{
                display:block;
                width:100%;
                height:100%;
            }
            img{
                width:100%;
                height:100%;
            }
        }
    }
    .main{
        width:7.5rem;
        margin:0 auto;
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
                }
            }
        }
    }
}
`
