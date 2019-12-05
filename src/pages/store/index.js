import React from "react"
import {StoreStyle} from "./styled"
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import Bscroll from "common/bscroll"
import {mapStateToProps,mapDispatchToProps} from "./mapStore"
@connect(mapStateToProps,mapDispatchToProps)

class Store extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let {one,two,three,total}=this.props
        return(
            <StoreStyle >
                    <div className="total-container">
                        <div className='header'>
                                <span className="title">美食1号精品超市</span>
                                <Link className="tocity" to='/city'>
                                <i className="iconfont right">&#xe74c;</i>
                                </Link>      
                                <div className="title-right">
                                    <i className="iconfont cart">&#xe655;</i>
                                    <i className="iconfont message">&#xe610;</i>
                                </div>
                            </div>
                    </div>
                    <Bscroll  ref="scroll">
                    <div className="bscontainer">
                  <div className="serachBox">
                    <div className="searchname">
                       好物搜索
                    </div>
                </div>
                <div className="swiper">
                    <div>
                        <img src="http://img1.tg-img.com/seller/201911/20/9FB00B5E-794D-4FB4-BFDD-2D81108A8098.png!y" alt=""/>
                    </div>
                </div>
                <div className="nav">
                    <div className="nav-item">
                        <div className="navitem-top">
                            <img src="https://image1.51tiangou.com/tgou2/img2/store/icon-store_2.png?v=time" alt=""/>
                        </div>
                        <span className="navitem-bottom">扫码购</span>
                    </div>
                    <div className="nav-item">
                        <div className="navitem-top">
                            <img src="https://image1.51tiangou.com/tgou2/img2/store/icon-store_3.png?v=time" alt=""/>
                        </div>
                        <span className="navitem-bottom">折扣排行</span>
                    </div>
                    <div className="nav-item">
                        <div className="navitem-top">
                            <img src="https://image1.51tiangou.com/tgou2/img2/store/icon-store_1.png?v=time" alt=""/>
                        </div>
                        <span className="navitem-bottom">结算码</span>
                    </div>
                    <div className="nav-item">
                        <div className="navitem-top">
                            <img src="https://image1.51tiangou.com/tgou2/img2/store/icon-store_4_fill.png?v=time" alt=""/>
                        </div>
                        <span className="navitem-bottom">天狗到家</span>
                    </div>
                    <div className="nav-item">
                        <div className="navitem-top">
                            <img src="https://image1.51tiangou.com/tgou2/img2/store/icon-store_5.png?v=time" alt=""/>
                        </div>
                        <span className="navitem-bottom">门店信息</span>
                    </div>
                </div>
                <div className="colortotal">
                <div className="swiper-x">
                    <div className="swiperx-container">
                        <div className="swiperx-item">
                            <div className="swiperx-top">
                                <img src="https://image1.51tiangou.com/tgou2/img2/store/img-store_class_1.png" alt=""/>
                            </div>
                            <span className="swiper-bottom">全部分类</span>
                        </div>
                        <div className="swiperx-item">
                            <div className="swiperx-top">
                                <img src="https://image1.51tiangou.com/tgou2/img2/store/img-store_class_5.png" alt=""/>
                            </div>
                            <span className="swiper-bottom">美妆个护</span>
                        </div>
                        <div className="swiperx-item">
                            <div className="swiperx-top">
                                <img src="https://image1.51tiangou.com/tgou2/img2/store/img-store_class_2.png" alt=""/>
                            </div>
                            <span className="swiper-bottom">休闲零食</span>
                        </div>
                        <div className="swiperx-item">
                            <div className="swiperx-top">
                                <img src="https://image1.51tiangou.com/tgou2/img2/store/img-store_class_4.png" alt=""/>
                            </div>
                            <span className="swiper-bottom">粮油调味</span>
                        </div>
                        <div className="swiperx-item">
                            <div className="swiperx-top">
                                <img src="https://image1.51tiangou.com/tgou2/img2/store/img-store_class_3.png" alt=""/>
                            </div>
                            <span className="swiper-bottom">饮料饮品</span>
                        </div>
                        <div className="swiperx-item">
                            <div className="swiperx-top">
                                <img src="https://image1.51tiangou.com/tgou2/img2/store/img-store_class_8.png" alt=""/>
                            </div>
                            <span className="swiper-bottom">家庭清洁</span>
                        </div>
                        <div className="swiperx-item">
                            <div className="swiperx-top">
                                <img src="https://image1.51tiangou.com/tgou2/img2/store/img-store_class_6.png" alt=""/>
                            </div>
                            <span className="swiper-bottom">家庭厨卫</span>
                        </div>
                        <div className="swiperx-item">
                            <div className="swiperx-top">
                                <img src="https://image1.51tiangou.com/tgou2/img2/store/img-store_class_7.png" alt=""/>
                            </div>
                            <span className="swiper-bottom">母婴儿童</span>
                        </div>                        
                    </div>
                   
                </div>
                <div  className="xianshi">
                       <div className="xianshi-top">
                            <div className="xiashitop-left">
                                <img src="https://image1.51tiangou.com/tgou2/img2/store/img-hot_xianshi_2.png" alt=""/>
                                <span className="toovertime">距结束</span>
                                <span className="time">01</span>
                                <span className="time">01</span>
                                <span className="time">01</span>
                                <span className="time">01</span>
                            </div>
                            <div>
                                <span className="lookat">查看更多</span>
                                <i className="iconfont jian">&#xe74c;</i>
                            </div>
                       </div>


                       <div className="swiperx-container">
                         
                         {
                             one.map((item,index)=>(
                                    <Link className="liji" key={index} to={'/detaillist'}>
                                        <div className="jike">
                                            <img src={item.imageUrl} alt=""/>
                                        </div>
                                        <span className="swiper-bottom jikedetail"></span>
                             <div ><span className="jikeprice">￥{item. priceString}</span><span className="zhekou">{item.discount}折</span></div>
                                    </Link>
                                 
                             ))
                         }
                    </div>
                </div>
                <div className="great">
                        <div className="great-title">
                            优质生活
                        </div>
                        <div className="total-container">
                            {
                                two.map((item,index)=>(
                                    <div className="greate-container" key={index}>
                                        <img src={item.imageUrl} alt=""/>
                                        <div className="detaillist">
                                        <p className="greate-detail">{item.title}</p>
                                        <span>{item.subTitle}</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                </div>
                <div  className="xianshi xian">
                       <div className="swiperx-container">
                           {
                               three.map((item,index)=>(
                                <div className="liji" key={index}>
                                        <div className="jike">
                                            <img src={item.imageUrl} alt=""/>
                                        </div>
                                            <span className="swiper-bottom jikedetail">【美食1号】NISSIN日清 始祖鸡汤拉面106g*4 </span>
                                                <div ><span className="jikeprice">￥{item.price}</span>
                                                <div className="littlecart">
                                                    <i className="iconfont in">&#xe64c;</i>
                                                </div>
                                            </div>
                                </div> 
                               ))
                           }
                        </div>
                </div>
                <div className="great">
                        <div className="great-title">
                            为你推荐
                        </div>
                        <div className="total-container">
                            {
                               total.map((item,index)=>(
                                   item.data?<div className="greate-container he" key={index}>
                                   <img src={item.data.imageUrl} alt=""/>
                                   <span className="swiper-bottom jikedetail  twoline">{item.data.title} </span>
                               <div ><span className="jikeprice">￥{item.data.price}</span>
                                           <div className="littlecart">
                                               <i className="iconfont in">&#xe64c;</i>
                                           </div>
                                       </div>
                               </div>:''
                               ))
                            
                            }
                        </div>
                </div>
                </div>
                </div>
                </Bscroll>
            </StoreStyle>
        )
    }
    componentDidMount(){
        // 在这里进行进行调用redux中的函数
        this.props.handleStoreAsncyData(2554,1065,1575113898840);
    }
}

export default Store