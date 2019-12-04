import React from 'react';
import { ShoppingCon,ShoppingList} from "./shopcss"
import { connect } from "react-redux"
import Bscroll from "common/bscroll"
import {Link} from "react-router-dom";
import { mapStateToProps, mapDispatchToProps } from "./mapstore"
@connect(mapStateToProps, mapDispatchToProps)

class Shopping extends React.Component {
    constructor(){
        super();
        this.currentView=2;
    }
    render() {
        let { top,toptotal ,sendtotal,nextlist} = this.props;
        return (
            <ShoppingCon>
                <div className="head-box">
                    <div className="head-info">
                        <div className="head-logo">
                            <img src="http://image1.51tiangou.com/tgou2/img2/index/logo-tgw.png" />
                            <span>逛商场更便利、买好货更省钱</span>
                        </div>

                    </div>
                    <div className="head-input">
                        <div className="head-search">
                            <span>控油抗痘宝典</span>
                        </div>
                    </div>
                </div>
                <Bscroll ref="scroll">
                <div className="main-box">
                    <div className="banner">
                        <div className="banner-position"><img src="http://img1.tg-img.com/seller/201911/25/166D7D5F-DAE3-48F8-9C6A-FC7017B63B4E.jpg!y" /></div>
                    </div>
                    <div className="main-nav">
                        <ul>
                            <li>
                                <img src="http://img1.tg-img.com/seller/201905/23/8FEF1F26-5465-4DD5-A5CC-FE3245EA07DA.png!y" />
                                <span className="title">扫码购</span>
                            </li>
                            <li>
                                <img src="http://img1.tg-img.com/seller/201905/23/66520014-A142-45BC-823A-429C13B8397E.png!y" />
                                <span className="title">结算码</span>
                            </li>
                            <li>
                                <img src="http://img1.tg-img.com/seller/201905/23/52C9AF35-9D74-49EF-9DCF-BDC84966F3D4.png!y" />
                                <span className="title">专柜收银</span>
                            </li>
                            <li>
                                <img src="http://img1.tg-img.com/seller/201905/23/8515C9C6-3144-42D6-A43B-FBA81A69890A.png!y" />
                                <span className="title">停车缴费</span>
                            </li>
                            <li>
                                <img src="http://img1.tg-img.com/seller/201905/29/4D39C429-C615-4FF6-91EF-1D6BFF93D008.gif!y" />
                                <span className="title">拼团</span>
                            </li>
                            <li>
                                <img src="http://img1.tg-img.com/seller/201905/23/EA8EC29C-6B99-4AF2-AA6B-D2C005F85833.png!y" />
                                <span className="title">专柜特卖</span>
                            </li>
                            <li>
                                <img src="http://img1.tg-img.com/seller/201905/23/E11284B9-FBBB-457F-A953-9D713913AA7F.png!y" />
                                <span className="title">全球好货</span>
                            </li>
                            <li>
                                <img src="http://img1.tg-img.com/seller/201905/23/4C859B5A-6283-4827-9A23-4922EC8D1EBE.png!y" />
                                <span className="title">超市精选</span>
                            </li>
                            <li>
                                <img src="http://img1.tg-img.com/seller/201905/23/B07604D4-499D-45B2-A15F-6B5CC040374C.png!y" />
                                <span className="title">品牌秒杀</span>
                            </li>
                            <li>
                                <img src="http://img1.tg-img.com/seller/201905/23/63D6162A-8668-48ED-ABDC-0A915F0C69DE.png!y" />
                                <span className="title">天狗到家</span>
                            </li>
                        </ul>
                    </div>
                    <div className="center-banner">
                        <img src="http://img1.tg-img.com/seller/201911/26/05E82B39-EAAA-4596-AFFA-0DC8E67D039B.png!y" />
                    </div>
                    <div className="main-title">
                        限时疯抢
                    </div>

                    <div className="main-content">
                        {
                            top.map((item, index) =>(
                                item.data ?
                                <ShoppingList bgimg={item.data.backgroundImg}>
                                    <div className="mian-one" key={index} >
                                        <div className="one-head" >
                                            <div className="one-title">
                                                <div className="title-top">{item.data.title}</div>
                                                <div className="title-time">
                                                    <span>距结束</span>
                                                    <span>1</span>
                                                    <span>天</span>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="one-content">
                                                                   {
                                                                       sendtotal[index]? sendtotal[index].map((i,ind)=>(
                                                                 
                                                                        <Link to={'/timeLimit/'+i.itemId+'/82'+'/2573'+'/1575341971279'}   className="one-goods"  key={ind}>
                                                                            <img src={i.imageUrl}/>
                                                                            <div className="activity">
                                                                                    <span>{i.couponList[0]}</span>
                                                                            </div>
                                                                            <div className="name">{i.title}</div>
                                                                            <div className="price">
                                                                                <span className="new">¥{i.price}</span>
                                                                                <span className="pro"><s>¥{i.originalPrice}</s></span>
                                                                            </div>
                                                                        </Link>
                                                                        )):''   
                                                                   }         
                                                            </div>                          
                                                  
                                        }
                
                                    </div>
                                    </ShoppingList> : ''))
                                 
                        }
                    </div>
                    <div className="main-title">
                        为你推荐
                    </div>   
                    {
                        nextlist.map((item,index)=>(
                         
                         nextlist[index]? <div className="content-two">
                            <div className="goods-img">
                                <img alt="haha" src={item.data.imageUrl}/>
                            </div >
                            <div className="goods-info">
                                <div className="goods-title">
                                    <span>品牌</span>
                                    <p>{item.data.title}</p>
                                </div>
                                <div className="goods-activity"></div>
                                <div className="goods-price">
                        <span className="new">￥{item.data.price}</span>
                        <span className="pro"><s>{item.data.originalPrice}</s></span>
                                </div>
                            </div>
                        </div>:''
                        ))
                    }

                </div>
                </Bscroll>
            </ShoppingCon>
        )
    }
    componentDidMount() {
        this.props.handleShoppingAsyncData(1065, 2554, 1575276320733);
        this.refs.scroll.handlepullingUp(()=>{
            let currentView=this.currentView;
             this.props.handleAgainAsyncData(2);
             this.currentView++
        })
        
    }
    componentWillUpdate(){
        this.refs.scroll.handlefinishPullUp();
    }
}

export default Shopping;




