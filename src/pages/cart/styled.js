import styled from "styled-components"

export const CartContainer = styled.div`
width:100%;
height:100%;
overflow:auto;
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
                width:4.5rem;
                height:100%;
                text-align:center;
                position:relative;
                color:#222;
                font-size:0.36rem;
            }
        }
        .header3{
            float:right;
            height:100%;
            line-height:0.88rem;
            padding-right:0.2rem;
            background:#fff;
            color: #666;
            font-size:0.28rem;
        }
    }
`