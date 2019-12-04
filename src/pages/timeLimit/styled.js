import styled from "styled-components"
export const TimeListStyle=styled.div`
height:100%;
background:#fff;
overflow-y: auto;
.listtotal{
    width: 100%;
  
}
.item{
    width: 100%;
    margin-top: 3px;
    border-bottom: 1px solid #eee;
    padding: .5rem;
    display: flex;
    background:#fff;
}
.item-left{
    width: 2rem;
    border-radius: .04rem;
    overflow: hidden;
    position: relative;

}
.item-left img{
    width: 100%;
    position: absolute;
    top:0;
    left:0;
    z-index: 10;
}
.paiming{
    padding:0 .2rem;
    background: #FF8A88;
    border-radius: 0 .22rem .22rem 0;
    line-height: .46rem;
    height: .46rem;
    height: .46rem;
    color: #fff;
    position: absolute;
    top:0;
    left:0;
    z-index: 20;
}
.item-right{
    margin-left:.2rem;
    flex: 1;
    display: flex;
    flex-direction: column;
   
}
.list-title{
    margin-top: .06rem; 
    height: 2.85714em;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #222;
}
.listprice{
    display: flex;
    justify-content: space-around;
    
}
.nowprice{
    font-weight: bolder; 
    font-size: .4rem; 
    color: #ff6565;
    margin-right: .25rem;
}
.oldprice{
    text-decoration: line-through;
    font-size: .22rem;
    color: #999;
    margin-right: .25rem;
}
.listzk{
    padding: .04rem .14rem;
    background-color: #fff;
    border: 1px solid #ff6565;
    color: #ff6565;
    border-radius: 10.rem;
    min-width: .4rem;
    vertical-align: middle;
    white-space: nowrap;
    text-align: center;
}
.monthshow{
    font-size: .2rem;
    color: #999;
    margin-top: .25rem;
}

`