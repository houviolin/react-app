import React from "react"
import { MemberContainer } from "./styled"
class Member extends React.Component {
    constructor() {
        super()
        this.state = {
            arr: ["会员卡", "优惠券", "签到积分"],
            orderlist: [
                {
                    icon: "//image1.51tiangou.com/tgou2/img2/mine/icon-pay_1.png",
                    text: '待支付',
                },
                {
                    icon: "//image1.51tiangou.com/tgou2/img2/mine/icon-pay_2.png",
                    text: '待发货',
                },
                {
                    icon: "//image1.51tiangou.com/tgou2/img2/mine/icon-pay_3.png",
                    text: '待收获',
                },
                {
                    icon: "//image1.51tiangou.com/tgou2/img2/pingjia_icon@2x.png",
                    text: '评价',
                },
                {
                    icon: "//image1.51tiangou.com/tgou2/img2/mine/icon-pay_4.png",
                    text: '退款/退货',
                },
            ],
        }
    }
    render() {
        let { arr, orderlist } = this.state;
        return (
            <MemberContainer>
                <div className="member">
                    <div className="header">
                        <div className="icon">
                            <div className="icon_l">
                                <i className="iconfont">&#xe623;</i>
                            </div>
                            <div className="icon_r">
                                <div>
                                    <i className="iconfont">&#xe655;</i>
                                </div>
                                <div>
                                    <i className="iconfont">&#xe610;</i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="info">
                        <div className="info_up">
                            <div className="info_up_l">
                                <div>
                                    <img src="//image1.51tiangou.com/tgou2/img2/mine/defaultPhoto.png!s" alt="" />
                                </div>
                                <div>
                                    <a href="">fsfasfsadsad</a>
                                </div>
                            </div>
                            <div className="info_up_r">
                                <img src="//image1.51tiangou.com/tgou2/img2/mine/icon-code.png" alt="" />
                            </div>
                        </div>
                        <div className="info_down">
                            {
                                arr.map((item, index) => (
                                    <div className="info_down_box" key={index}>
                                        <div>{item}</div>
                                        <div>-</div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="myorder">
                        <div className="myorder_up">
                            <div className="myorder_up_l">
                                我的订单
                            </div>
                            <div className="myorder_up_r">
                                全部订单
                                <i className="iconfont">&#xe74c;</i>
                            </div>
                        </div>
                        <div className="myorder_down">
                            {
                                orderlist.map((item) => (
                                    <div className="myorder_down_box" key={item.icon}>
                                        <div className="myorder_down_box_pic">
                                            <img src={item.icon} alt=""/>
                                        </div>
                                        <div className="myorder_down_box_text">
                                            {item.text}
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </MemberContainer>

        )
    }
}

export default Member