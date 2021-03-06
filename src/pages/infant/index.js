import React from "react"
import { InfantContainer } from "./styled"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "./mapState"
@connect(mapStateToProps, mapDispatchToProps)
class Infant extends React.Component {
    render() {
        let { infantlist, infantlist2, infantlist3 } = this.props;
        // console.log(infantlist3);
        return (
            <InfantContainer>
                <div className="infant">
                    <div className="header_title">
                        <div className="header_title_up">精选分类</div>
                        <div className="header_title_down">Featured Categories</div>
                    </div>
                    <div className="jxfl">
                        <div className="jxfl_box">
                            {
                                infantlist.map((item) => (
                                    <a href="" key={item.bk}>
                                        <img src={item.imageUrl} alt="" />
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                    <div className="header_title margin">
                        <div className="header_title_up">精选活动</div>
                        <div className="header_title_down">Selected Activities</div>
                    </div>
                    <div className="main1">
                        <div className="main1_box">
                            {
                                infantlist2.data ?
                                    <div className="main1_box_main" >
                                        <a href="#" className="main1_box_main_pic">
                                            <img src={infantlist2.data.imageUrl} alt="" />
                                            <i className="iconfont">&#xe643;</i>
                                        </a>
                                        <div className="scroll-container margin20">
                                            {
                                                infantlist2.data.items.map((child) => (
                                                    <div className="scroll-container_box border" key={child.id}>
                                                        <Link to={"/details/" + child.id}>
                                                            <div className="scroll-container_box_up">
                                                                <img src={child.imageUrl} alt="" />
                                                            </div>
                                                            <div className="scroll-container_box_down">
                                                                <p>{child.title}</p>
                                                                <p>
                                                                    <span>￥{child.price}</span>
                                                                    <del>￥{child.originalPrice}</del>
                                                                </p>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    : ''
                            }
                        </div>
                    </div>
                    <div className="main2">
                        <div className="main2_title">
                            <div className="main_title_up">单品推荐</div>
                            <div className="main_title_down">Single Item Recommendation</div>
                        </div>
                        {
                            infantlist3.map((item) => (
                                <div className="borderb" key={item.data.id} >
                                    <Link to={"/details/" + item.data.id}>
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
            </InfantContainer>

        )
    }
    componentDidMount() {
        // cityId=2554&pid=13&cid=1301&index=6&_=1575344018560
        // cityId=2554&pid=13&cid=1301&index=6&_=1575344018561&tabIndex=0&childIndex=0&currentView=2
        let cityId = 2554;
        let pid = 13;
        let cid = 1301;
        let index = 6;
        let tabIndex = 0;
        let childIndex = 0;
        let currentView = 2
        let time = new Date().getTime()
        this.props.handle(cityId, pid, cid, index, time)
        this.props.handleproduct(cityId, pid, cid, index, time, tabIndex, childIndex, currentView)
    }
}

export default Infant