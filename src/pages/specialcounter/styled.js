import styled from 'styled-components';

export const SpecilaCounterStyle =styled.div`
    height:100%;
    .head-box{
        height:1.7rem;
        background: rgb(192, 153, 139);
    }
    .head-info{
        height:0.8rem;
        padding:0 0.2rem 0 0.3rem;
        
        display:flex;
        align-items:center;
        justify-content:space-between;
    }
    .head-logo {
        display:flex;
        align-items:center;
    }
    .head-logo img {
        width:1.5rem;height:0.44rem;
    }
    .head-logo span{
        font-size:0.22rem;
        color:#fff;
        margin: 0 0 0 0.08rem;
    }
    .head-icon {
        font-size:0.44rem;
        color:#fff;
        display:flex;
       justify-content:space-between;
    }
    .head-icon .anticon-shopping-cart{
        font-size:0.48rem;
        margin-right:0.16rem;
    }
    .head-input{
        height:0.72rem;
        padding: 0 0.4rem;
        margin-top:0.1rem;
    }
    .head-search{
        width:100%;
        height:0.72rem;
        border-radius:.6rem;
        background-color:#eeeff4;
        padding: 0 0.16rem;
        line-height:0.72rem;
        color:#999;
        font-size:0.26rem;
    }
    .main-box{
        height:100%;
        overflow-y:scroll;
        padding-bottom:2rem;
    }
    .banner {
        height:3.98rem;
        background: rgb(192, 153, 139);
        padding-top:0.2rem;
        border-radius: 0 0 0.52rem 0.52rem;
        overflow:hidden;
        margin-bottom:0.4rem;
    }
    .banner-position{
        width:100%;
        height:1.88rem;
    }
    .banner img {
        height:3.32rem;
    }
    .main-nav{
        height:3rem;
    }
    .main-nav ul {
        height:100%;
        display:flex;
        justify-content:space-around;
        flex-wrap:wrap;
    }
    .main-nav li {
        width:20%;
        text-align:center;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
    }
    .main-nav li img {
        width:1rem;
        height:1rem;
    }
    .main-nav li .title {
        font-size:0.22rem;
        color:#222;
        line-height:0.4rem;
    }
    .center-banner {
        width:100%;
        height:1.72rem;
    }
    .center-banner img{
        width:100%;
        margin-top:0.4rem;
        height:1.72rem;
    }
    .main-title{
        height:0.68rem;
        line-height:0.68rem;
        font-size:0.34rem;
        color:#222;
        font-weight:bolder;
        margin-top:0.2rem;
        padding-left:.22rem;
    }
    .main-content{
        min-height:4.2rem;
        padding:0 0.3rem;
        margin-bottom:0.5rem;
    }
    .mainlight{
        min-height:2.8rem;
    }
    .littlemian{
        padding:0 0.3rem;
        margin-bottom:0.5rem;
    }
    .mian-one{
        width:100%;
        height:4.2rem;
        color:#fff;
        background: url("//img1.tg-img.com/seller/201910/29/7BDA3A7B-FAC2-4E5D-8220-D95E9D7C604A.png!y") center top / 100% no-repeat;
    }
    .swipermian{
        height:3.7rem;
    }
    .one-head{
        height:1.34rem;

    }
    
    .one-title{
        height:1.34rem;
        padding:0.14rem 0;
        position:relative;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-around;
    }
    .one-title .title-top{
        overflow: hidden;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    font-weight: bolder;
    font-size: 0.32rem;
    color: #fff;
    text-align:center;
    }
    .title-time{
        font-size: 0.18rem;
        color: #fff;
    }
    .title-time span:nth-child(2){
        text-align:center;
        margin: 0 0.1rem;
        min-width: .24rem;
    height: .24rem;
    line-height: .24rem;
    border-radius: .04rem;
    background: rgba(0, 0, 0, 0.16);
    display:inline-block;
    }
    .one-content{
        height:2.86rem;
        display:flex;
        justify-content:space-around;
    }
    .one-content .one-goods{
        width:1.9rem;
        height:2.8rem;
        border:1px solid #eee;
        padding:0.1rem;
        position:relative;
        background-color:#fff;
    }
    .one-content .one-goods img{
        width:1.7rem;
        height:1.7rem;
    }
    .one-content .one-goods .activity{
        position:absolute;
        bottom:1.1rem;
        left:0.8rem;
    }
    .one-content .one-goods .activity span{
        background: rgba(255, 255, 255, 0.8);
        border: 1px solid rgb(255, 76, 72);
        border-radius: 0.16rem;
        font-size: 0.18rem;
        color: #ff4c48;
    }
    .one-content .one-goods .name{
        height:0.34rem;
        line-height:0.34rem;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        font-weight: bolder;
        text-align: center;
        font-size: 0.24rem;
        color: #222;
    }
    .one-content .one-goods .price{
        height:0.36rem;
        text-align:center;
    }
    .one-content .one-goods .price .new{
        text-align: right;
        font-size: 0.26rem;;
        color: #ff4c48;
        margin-right:0.1rem;
    }
    .one-content .one-goods .price .pro{
        text-align: left;
        font-size: 0.18rem;;
        color: #999;
    }
    .content-two{
        height:2.2rem;
        padding:0 0.16rem 0.16rem;
        border-bottom:1px solid #eee;
        display:flex;
        justify-content:space-between;
    }

    .content-two .goods-img{
        width:2rem;
        height:2rem;
        position:relative;
    }
    .content-two .goods-img img{
        width:2rem;
        height:2rem;
    }
    .content-two .goods-img span{
        position:absolute;
        left:0;
        bottom:0;
        font-size: 0.16rem;
        background: rgb(189, 162, 139);
        padding: 0.06rem;
    }
    .content-two .goods-info{
        width:4.04rem;
        height:2rem;
       display:flex;
       flex-direction:column;
       justify-content:space-between
    }
    .goods-title{
        width:100%;
        height:0.64rem;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    font-size: 0.26rem;
    color: #222;
    }
    .goods-title span:nth-child(1){
        font-size: 0.2rem;
        color: #fff;
        padding: 0.02rem 0.02rem;
        background-color: #ff9800;
        margin-right:0.2rem;
    }
    .goods-title span:nth-child(2){
        overflow: hidden;
        height:0.76rem;
        font-weight: 700;
        font-size: 0.26rem;
    }
    .goods-activity{
        height:0.42rem;
    }
    .goods-price{
        height:0.54rem;
        line-height:0.54rem;
    }
    .goods-price .new{
        text-align: right;
        font-size: 0.4rem;
        color: #ff4c48;
    } 
    .goods-price .pro{
        color: #999;
        font-size: 0.22rem;
        line-height: 0.32rem;
    }
    .goods-activity{
        margin-top:0.2rem;
    }
` 