import styled from "styled-components"
export const StoreStyle=styled.div`
width:100%;
padding-bottom: 1.5rem;
overflow-y: auto;
height:100%;
.color-red{
    background-image: url("https://image1.51tiangou.com/tgou2/img2/test/bg-jingpin.png"); 
    background-repeat: no-repeat; background-position: center top; background-size: 100%; 
}
.header{
    padding: .2666666667rem;
    background-color: rgb(206, 9, 9);
}
.tocity{
    display:inline-block;
}
.title{
    font-size: .4rem;
    color: #fff;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei",Arial,sans-serif;
}
.right{
    padding-left:.2rem;
    font-size:.3rem;
    color:#fff
}
.cart{
    font-size:.44rem;
    color:#fff;
    margin-right:40px
}
.message{
    font-size:.44rem;
    color:#fff 
}
.title-right{
    float:right;
    margin-right:.2rem;
}
.serachBox{
    width:100%;
   padding: 0 .2666666667rem;
    color: #999;
    height:.75rem;
    background-color: rgb(206, 9, 9);
   
}
.searchname{
    padding-left:.1rem;
    height:.75rem;
    line-height:.75rem;
    background:rgba(255, 255, 255, 0.9)
}
.swiper{
    overflow: hidden;
    padding:.4rem .2666666667rem;
    background-color: rgb(206, 9, 9);
}
.nav{
    padding-right:.4rem  .5333333333rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom:.4rem;
    background-color: rgb(206, 9, 9);
    height:2rem;
}
.nav-item{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.navitem-bottom{
    color:#fff
}
.swiper>div>img{
    width:100%;
    height:100%;
}
.swiper-x{
    width:100%;
    padding-right: .2666666667rem  .5333333333rem;
    border-radius: .12rem .12rem 0 0;
    background:#fff;
    height:2rem;
}
.swiperx-container{
    display:flex;
    overflow-x: auto;
    overflow-y: hidden;
}
.swiperx-item{
    display:flex;
    flex-shrink:0;
    white-space: nowrap;
    padding:.4rem;
    flex-direction: column;
    width:1.6rem;
    height:2rem;
    justify-content: center;
    align-content: center;
    padding:.2rem
}
.swiperx-top{
    width:.9rem;
    height:.9rem;
}

.swiperx-top img{
    width:100%;
    height:100%
}
.swiper-bottom{
    margin-top:.1rem
}
.xianshi{
    background-image: linear-gradient(90deg, rgb(255, 225, 224) 13%, rgb(255, 248, 248) 100%);
    border-radius: .02rem .02rem 0 0;
    margin:.2666666667rem  .1333333333rem;
    padding:.2rem .2rem 0 .2rem;
}
.xianshi-top{
    display:flex;
    align-content:center;
    justify-content:space-between;
    margin-bottom:.2rem;
}
.xiashitop-left{
 
    display:flex;
 
 
}
.xiashitop-left img{
    width:1.48rem;
    height:.36rem;
    margin-right:.1rem
}
.toovertime{
    font-size: .22rem;
    color: #ff4c48;
    font-weight: bolder;
    margin-left:.2rem;
    margin-right:.1rem;
}
.time{
    height:.26rem;
    line-height:.260rem;
    background: #fff;
    color: #ff4c48;
    padding: .01rem;
    margin-right: .1rem;
}
.lookat{
    margin-top:.3rem;
}
.jian{
    font-size:.25rem
}
.liji{
    width:2rem;
    height:3rem;
    display:flex;
    flex-shrink:0;
    white-space: nowrap;
    background:#fff;
    flex-direction: column;
    margin-right:.15rem
}
.jike{
    width:2rem;
    height:2rem;
    
}
.jike img{
    width:2rem
}

.jikedetail{
    overflow: hidden;
    text-overflow: ellipsis;
    width:2rem;
    margin:.1rem 0

}
.twoline{
    height: .8rem;
  line-height: .4rem;
  width: 300px;
  display: -webkit-box;
  -webkit-line-clamp:2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
}
.jikeprice{
color: #ff4c48;
margin-left:.1rem;
}
.zhekou{
    padding-left:.1rem;
    color: #666;
    font-size: .25rem;
}
.great{
    width: 100%;
    height: 3.4rem;
    padding-left:.1rem;
    background:#fff;
}

.greate-container{
      height: 2.4rem;
      position: relative;
      width:33.0%;
      float:left;
      padding-right:.1rem
  }
  .he{
    height:3.8rem
}
.great-title{
    padding:.2666666667rem;
    font-size: .34rem;
}

.greate-container img{
    width: 100%;
    height: 100%;
}
.he img{
    width:2.36rem;
    height:2.36rem
}

.detaillist{
    position: absolute;

    bottom: .2rem;
    left:.5rem;
    color:#fff;
}
.littlecart{
    float:right;
   margin-right:.2rem;
    border-radius: 50%;
    /* border: 1px solid rgb(224, 224, 224); */
    color:red
}
.in{
    font-size: .3rem;
}
.xian{
    background:#fff;
    background-image:none
}
.colortotal{
    background:#fff;
    height:100%;
}
.navitem-top{
    width:1.08rem;
    height:1.08rem;

}
.navitem-top img{
    width:100%;
    height:100%
}

`