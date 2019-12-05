import React from "react"
import { Details } from "./styled"
import {withRouter} from "react-router-dom"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class Detail extends React.Component {
    render() {
        // console.log(this.props);
        let {productlist1,productlist2} = this.props;
        // console.log(productlist1,productlist2,);
        return (
            <Details>
                <div className="details">
                    <div className="header">
                        <div className="header1" onClick={this.props.handleClick.bind(this)}>
                            <i className="iconfont">&#xe726;</i>
                        </div>
                        <div className="header2">
                            <div className="header2_box_active">
                                商品
                                <span></span>
                            </div>
                            <div className="header2_box">
                                详情
                                <span></span>
                            </div>
                        </div>
                        <div className="header3">
                            <div className="header3_box" onClick={this.props.handle.bind(this)}>
                                <i className="iconfont">&#xe64c;</i>
                            </div>
                            <div className="header3_box">
                                <i className="iconfont">&#xe637;</i>
                            </div>
                        </div>
                    </div>
                    <div className="main" id={this.props.match.params.id} ref="id">
                        <div className="pic">
                            <img src={productlist1.imageUrl? productlist1.imageUrl : ''} alt="" ref="imageUrl"/>
                        </div>
                        <div className="pri">
                            <div className="xsqg"></div>
                            <div className="price">
                                ￥
                                <span ref="price">{productlist2.price}</span>
                            </div>
                        </div>
                        <div className="prodectName">
                            <div className="prodectcontent">
                                <div className="prodecttitle">
                                    <img src="//image1.51tiangou.com/tgou2/img2/product/inter_store_tag.png" alt=""/>
                                    <span ref="name">
                                        {productlist2.productName? productlist2.productName : ''}
                                    </span>
                                </div>
                                <div className="prodectdetail">
                                    {productlist1.subTitle? productlist1.subTitle : ''}
                                </div>
                            </div>
                            <div className="prodectadd">
                                <img src={productlist2.countryImageUrl? productlist2.countryImageUrl : ''} alt=""/>
                                <span ref="address">{productlist2.storeName? productlist2.storeName : ''}</span>
                            </div>
                        </div>
                        <div className="see">
                            <img src="//image1.51tiangou.com/tgou2/img2/product/icon-GGCT.png" alt=""/>
                            <span> 直采精选，查看 [商品溯源]</span>
                            <i className="iconfont">&#xe74c;</i>
                        </div>
                        <div className="discount">
                            <div className="discount1">
                                <span>领券</span>
                                <span>
                                    <i className="iconfont">&#xe606;</i>
                                    好物满减丨满188减12元优惠券
                                    <i className="iconfont">&#xe606;</i>
                                </span>
                                <span className="iconfont">&#xe74c;</span>
                            </div>
                            <div className="discount2">
                                <p>极速达慢必赔  •  满88包邮  •  支持7天无忧退货  •  海外直采  •  大商天狗自营保税仓</p>
                                <span className="iconfont">&#xe74c;</span>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <div className="pinpai">
                            <img src="//image1.51tiangou.com/tgou2/img2/product/icon-pinpai.png" alt=""/>
                        </div>
                        <div className="footer_box">
                            <div className="jrgwc" onClick={this.props.handleadd.bind(this)}>加入购物车</div>
                            <div className="msq">马上抢</div>
                        </div>
                    </div>
                </div>
            </Details>

        )
    }
    componentDidMount(){
        let id = this.props.match.params.id;
        let time = new Date().getTime();
        // console.log(id,time);
        this.props.handleprojectinfo(id,true,time)
    }
}

export default Detail