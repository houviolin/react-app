import React from "react"
// import { Carousel } from 'antd';
import {Link,withRouter} from "react-router-dom"
import { Essencs } from "./styled.js"
import { Carousel, } from 'antd-mobile';
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
@connect(mapStateToProps, mapDispatchToProps)

class Essence extends React.Component {
    constructor() {
        super()
        this.state = {
            CarouselList: [
                "https://img1.tg-img.com/seller/201911/25/A512D4F0-744D-45CD-819F-4CE165C44498.jpg!y",
                "https://img1.tg-img.com/seller/201906/25/FEF2D15E-CCA1-494B-ADD9-DE9179B8B92B.jpg!y",
                "https://img1.tg-img.com/seller/201911/27/BE994737-20D2-4CBE-AF42-D3BDE818F212.jpg!y",
                "https://img1.tg-img.com/seller/201911/27/A63B3972-78A3-438A-8DD4-BC1E163B85AD.jpg!y",
                "https://img1.tg-img.com/seller/201911/26/57DEA098-22F8-4110-9828-32C3D8F4BEE9.jpg!y",
                "https://img1.tg-img.com/seller/201911/26/A271D1A8-7808-4F1F-A98A-CB24E16064AA.jpg!y",
                "https://img1.tg-img.com/seller/201911/25/AFC6E9F4-6248-429B-BED7-85C315FC91B2.png!y",
                "https://img1.tg-img.com/seller/201905/13/8D5591CC-C408-4EC4-97BB-C5864BA78BF5.jpg!y",
            ],
            imgHeight: 366,
        }
    }
    render() {
        let { CarouselList, imgHeight } = this.state;
        let { essencescrolllist, essencescrolllist2, essencescrolllist3, essencescrolllist4, essencescrolllist5, essenctprojectlist } = this.props;
        // console.log(this.props);
        return (
            <Essencs>
                <div className="essence">
                    <div className="animate">
                        <Carousel
                            autoplay={true}
                            infinite
                        // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        // afterChange={index => console.log('slide to', index)}
                        >
                            {CarouselList.map(val => (
                                <a
                                    key={val}
                                    href="http://www.alipay.com"
                                    style={{ display: 'inline-block', width: '100%', height: imgHeight }}
                                >
                                    <img
                                        src={val}
                                        alt=""
                                        style={{ width: '100%', verticalAlign: 'top' }}
                                        onLoad={() => {
                                            // fire window resize event to change height
                                            window.dispatchEvent(new Event('resize'));
                                            this.setState({ imgHeight: 'auto' });
                                        }}
                                    />
                                </a>
                            ))}
                        </Carousel>
                    </div>
                    <div className="pic">
                        <div>
                            <a href="#">
                                <img src="https://img1.tg-img.com/seller/201911/25/0E4359EC-1744-4968-9F06-852A63969342.png!y" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="main">
                        <div className="main1">
                            <div className="main1_box">
                                <div className="main1_box_main">
                                    <a href="#" className="main1_box_main_pic">
                                        <img src="https://img1.tg-img.com/seller/201911/26/819112EE-CF9C-4FC1-8810-ACD5A3691977.jpg!y" alt="" />
                                        <i className="iconfont">&#xe643;</i>
                                    </a>
                                    <div className="scroll-container">
                                        {
                                            essencescrolllist.map((item) => (
                                                <div className="scroll-container_box" style={{ display: item.width === 200 ? 'block' : 'none' }} key={item.id}>
                                                    <img src={item.imageUrl} alt="" />
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="main1_box_main">
                                    <a href="#" className="main1_box_main_pic">
                                        <img src="https://img1.tg-img.com/seller/201911/27/5D673607-182B-49E4-9838-D0D5CA6B6CDF.jpg!y" alt="" />
                                        <i className="iconfont">&#xe643;</i>
                                    </a>
                                    <div className="scroll-container">
                                        {
                                            essencescrolllist2.map((item) => (
                                                <div className="scroll-container_box" style={{ display: item.width === 200 ? 'block' : 'none' }} key={item.id}>
                                                    <img src={item.imageUrl} alt="" />
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="main1_box_main">
                                    <a href="#" className="main1_box_main_pic">
                                        <img src="https://img1.tg-img.com/seller/201911/26/83CF9474-DB39-441E-81CF-82AA42526137.jpg!y" alt="" />
                                        <i className="iconfont">&#xe643;</i>
                                    </a>
                                    <div className="scroll-container margin20">
                                        {
                                            essencescrolllist3.map((item) => (
                                                <div className="scroll-container_box border" key={item.id}>
                                                     {/* <Link to={{pathname:"/detail",query:{id:item.id,name:item.goodsName}}} key={item.id}><li >{item.goodsName}</li></Link> */}
                                                     {/* <Link to={"/detail/"+item.id+"/"+item.goodsName} key={item.id}><li >{item.goodsName}</li></Link> */}
                                                    <Link  to={"/details/"+item.id}>
                                                        <div className="scroll-container_box_up">
                                                            <img src={item.imageUrl} alt="" />
                                                        </div>
                                                        <div className="scroll-container_box_down">
                                                            <p>{item.title}</p>
                                                            <p>
                                                                <span>￥{item.price}</span>
                                                                <del>￥{item.originalPrice}</del>
                                                            </p>
                                                        </div>
                                                    </Link>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="main1_box_main">
                                    <a href="#" className="main1_box_main_pic">
                                        <img src="https://img1.tg-img.com/seller/201911/27/D96B1BE1-28C4-4203-88CE-FEB8447FF096.jpg!y" alt="" />
                                        <i className="iconfont">&#xe643;</i>
                                    </a>
                                    <div className="scroll-container margin20">
                                        {
                                            essencescrolllist4.map((item) => (
                                                <div className="scroll-container_box border" key={item.id}>
                                                    <Link  to={"/details/"+item.id}>
                                                        <div className="scroll-container_box_up">
                                                            <img src={item.imageUrl} alt="" />
                                                        </div>
                                                        <div className="scroll-container_box_down">
                                                            <p>{item.title}</p>
                                                            <p>
                                                                <span>￥{item.price}</span>
                                                                <del>￥{item.originalPrice}</del>
                                                            </p>
                                                        </div>
                                                    </Link>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="main1_box_main">
                                    <a href="#" className="main1_box_main_pic">
                                        <img src="https://img1.tg-img.com/seller/201911/26/3C5EBB96-0296-4C00-AFE9-3F593F686AAD.jpg!y" alt="" />
                                        <i className="iconfont">&#xe643;</i>
                                    </a>
                                    <div className="scroll-container margin20">
                                        {
                                            essencescrolllist5.map((item) => (
                                                <div className="scroll-container_box border" key={item.id}>
                                                    <Link  to={"/details/"+item.id}>
                                                        <div className="scroll-container_box_up">
                                                            <img src={item.imageUrl} alt="" />
                                                        </div>
                                                        <div className="scroll-container_box_down">
                                                            <p>{item.title}</p>
                                                            <p>
                                                                <span>￥{item.price}</span>
                                                                <del>￥{item.originalPrice}</del>
                                                            </p>
                                                        </div>
                                                    </Link>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="main2">
                            <div className="main2_title">
                                <div className="main_title_up">单品推荐</div>
                                <div className="main_title_down">Single Item Recommendation</div>
                            </div>
                            {
                                essenctprojectlist.map((item) => (
                                    <div className="borderb" key={item.data.id} style={{display:item.name === "loadMore" ? "none":"block"}}>
                                        <Link  to={"/details/"+item.data.id}>
                                            <div className="borderb_l">
                                                <img src={item.data.imageUrl} alt="" />
                                            </div>
                                            <div className="borderb_r">
                                                <div className="borderb_r1">
                                                    <div className="borderb_title">{item.data.title}</div>
                                                    <div className="borderb_content">{item.data.promotion}</div>
                                                    <div className="borderb_add">
                                                        <img src={item.data.countryImageUrl} alt="" />
                                                        <span>{item.data.countryName}</span>
                                                    </div>
                                                    <div className="borderb_pri">
                                                        <span>￥{item.data.price}</span>
                                                        <del>¥{item.data.originalPrice}</del>
                                                    </div>
                                                </div>
                                                <div className="borderb_r2">RE:CIPE</div>
                                            </div>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </Essencs>

        )
    }
    componentDidMount() {
        let time = new Date().getTime()
        // console.log(time);
        this.props.scrollhandle(2554, true, 12, -1, 1, time)
        // cityId=2554&selected=true&pid=12&cid=-1&index=1&_=1575188722710&tabIndex=0&childIndex=0&currentView=2
        this.props.handleproject(2554, true, 12, -1, 1, 0, 0, 2, time)
    }
}

export default Essence
// cityId,selected,pid,cid,index,tabIndex,childIndex,currentView,_