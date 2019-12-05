import styled from "styled-components"
export const DetailListStyle =styled.div`
height:100%;
overflow-y:auto;
    .main{
        display:flex;
        justify-content:space-between;
        align-items:center;
        height:2.2rem;
    }
    .left{
    min-width: 2rem;
    width: 2rem;
    height: 2rem;
    overflow: hidden;
    }
    .left img{
        width:100%;
        height:100%;
    }

    .right{
        width:5.1rem;
        padding:.2rem 0;
        display:flex;
        justify-content:space-between;
        flex-direction:column;
        .title{
            height:.74rem;
            font-weight:700;
        font-size:.26rem;
    } 
    .detail{
        display:flex;
        justify-content:space-between;
        .newprice{
            color:#ff4c48;
            font-size:.4rem;
        }
        .originprice{
            font-size:.2.5rem;
            color:#666;
            text-decoration:line-through
        }
    }

    }
    .show{
        height:.4rem;
        margin-right:.2rem;
        line-height:.4rem;
        font-size:.2.5rem;
            color:#666;
    }

   
`
