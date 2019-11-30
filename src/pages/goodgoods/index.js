import React from "react"
import "./styled.js"
import { mainlistApi, citylistApi } from "../../api/goodgoods"
import {GoodGoods} from "./styled"
// import { Carousel } from 'antd';
class Goodgoods extends React.Component {
    constructor() {
        super()
        this.state = {
            nav1list: [
                {
                    url: "https://img1.tg-img.com/seller/201910/17/5DCC9787-CAC4-4FA3-A22B-2A18F4CA015E.gif!y",
                    name: "测评视频"
                },
                {
                    url: "https://img1.tg-img.com/seller/201910/17/866B829F-05AE-4D54-A503-91FD3A2D1A04.gif!y",
                    name: "好物推荐"
                },
                {
                    url: "https://img1.tg-img.com/seller/201911/21/B2005D6A-1CE2-4939-97BB-0CA9082A3DAE.png!y",
                    name: "李艳"
                },
                {
                    url: "//img1.tg-img.com/seller/201911/21/D1E68D9B-E401-4478-9C86-045D10143181.png!y",
                    name: "悦悦"
                },
            ],
            nav2list: [
                {
                    url: "https://img1.tg-img.com/seller/201911/21/F14B3449-21D3-4DFE-9852-CA022F8122E9.png!y",
                    name: "美妆馆"
                },
                {
                    url: "http://img1.tg-img.com/seller/201911/21/9C66204E-DF1D-4E79-BECD-EB4AAAF26FF1.png!y",
                    name: "美衣馆"
                },
                {
                    url: "https://img1.tg-img.com/seller/201911/21/EA914F4A-485C-4FEF-960C-5CB8B99C047C.png!y",
                    name: "生活馆"
                },
                {
                    url: "https://img1.tg-img.com/seller/201911/21/7767BDCF-9A27-4510-AF96-1EACC5FD0608.png!y",
                    name: "羽绒风情"
                },
                {
                    url: "http://img1.tg-img.com/seller/201911/21/5E1595B7-50DA-4A38-B9E9-E9A840A6076D.png!y",
                    name: "运动装备"
                },
            ],
            classIndex: 1,
            headpic: 'https://image1.51tiangou.com/tgou2/img2/dum/dum_dog.png',
            mainlist: [],
            citylist: [],
        }
        for (var i = 0; i < 20; i++) {
            this.handleinfo(10, i, 22228 - i);
            let num = Math.floor(Math.random() * 10);
            console.log(num);
            this.handlSameCity(2554, 10, i, 413300 - num * 100)
            i += 9;
        }

    }
    render() {

        let { nav1list, nav2list, classIndex, mainlist, headpic, citylist } = this.state;
        return (
            <GoodGoods className="goodgoods">
                <div className="goodgoods_box">
                    <div className="header">
                        <img src="https://image1.51tiangou.com/tgou2/img2/tempActivity/title-goodgoods.png" alt="" />
                        <div>
                            <a href="#" className="message">
                                <i className="iconfont">&#xe610;</i>
                            </a>
                            <a href="#">
                                <img src="https://image1.51tiangou.com/tgou2/img2/fitting/defaultPic.jpg" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="nav1">
                        {
                            nav1list.map((item, index) => (
                                <div className="nav1_box" key={item.url}>
                                    <a href="">
                                        <div>
                                            <img src={item.url} alt="" />
                                        </div>
                                        <div>{item.name}</div>
                                    </a>
                                </div>
                            ))
                        }
                    </div>
                    <div className="animate">
                        {/* <Carousel autoplay>
                            <img src="https://img1.tg-img.com/seller/201911/21/2C4B18DD-F4B9-4A46-9D71-3607085A0724.jpg!y" alt="" />
                            <img src="https://img1.tg-img.com/seller/201911/19/AFB8802F-79A8-4904-8E5E-71840A134EB6.jpg!y" alt="" />
                            <img src="https://img1.tg-img.com/seller/201911/22/99E77296-B7FC-4D90-B176-2C7B7522EE85.jpg!y" alt="" />
                            <img src="https://img1.tg-img.com/seller/201911/20/6CE7B85A-52F9-4DDD-B3EF-7F4EBC1DEFF2.gif!y" alt="" />
                            <img src="https://img1.tg-img.com/seller/201911/21/2C4B18DD-F4B9-4A46-9D71-3607085A0724.jpg!y" alt="" />
                            <img src="https://img1.tg-img.com/seller/201911/19/AB2CBB6A-4762-4092-AB3F-A76A6153F565.jpg!y" alt="" />
                        </Carousel> */}
                    </div>
                    <div className="nav2">
                        {
                            nav2list.map((item, index) => (
                                <div className="nav2_box" key={index}>
                                    <div className="up">
                                        <img src={item.url} alt="" />
                                    </div>
                                    <div className="down">{item.name}</div>
                                </div>
                            ))
                        }

                    </div>
                    <div className="nav3">
                        <span onClick={this.fontClick.bind(this, 1)} className={classIndex == 1 ? 'activefont' : ''}>推荐</span>
                        <span onClick={this.fontClick.bind(this, 2)} className={classIndex == 2 ? 'activefont' : ''}>同城</span>
                        <span onClick={this.fontClick.bind(this, 3)} className={classIndex == 3 ? 'activefont' : ''}>关注</span>
                    </div>
                    <div className="main">
                        <div className="main_box" style={{ display: classIndex == 1 ? 'block' : 'none' }}>
                            {
                                mainlist.map((item, index) => (
                                    <div className="main_content" key={index}>
                                        <div className="main_pic">
                                            <div className="main_pic1" style={{ background: `url('https://image1.51tiangou.com/` + item.imageUrl + `') center center / cover no-repeat` }}>
                                                <div style={{ background: `url('https://image1.51tiangou.com/tgou2/img2/discover/bg-goodgoods_01.png') center bottom / 100% no-repeat` }}></div>
                                            </div>
                                            <div className="main_pic2">
                                                <i className="iconfont">&#xe63d;</i>
                                            </div>
                                            <div className="main_pic3">
                                                <i className="iconfont">&#xe640;</i>
                                                <span>{item.browseNum}</span>
                                            </div>
                                        </div>
                                        <div className="main_title">
                                            <p>
                                                {item.content}
                                            </p>
                                            <div className="main_tg">
                                                <div>
                                                    <img src={item.photoUrl ? 'https://image1.51tiangou.com/' + item.photoUrl : headpic} alt="" />
                                                </div>
                                                <div>{item.nickName}</div>
                                                <div>
                                                    <i className="iconfont">&#xe74b;</i>
                                                    <span>{item.likedSum}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="main_box" style={{ display: classIndex == 2 ? 'block' : 'none' }}>
                            {
                                citylist.map((item, index) => (
                                    <div className="main_content" key={index}>
                                        <div className="main_pic">
                                            <div className="main_pic1" style={{ background: `url('https://image1.51tiangou.com/` + item.imageUrl + `') center center / cover no-repeat` }}>
                                                <div style={{ background: `url('https://image1.51tiangou.com/tgou2/img2/discover/bg-goodgoods_01.png') center bottom / 100% no-repeat` }}></div>
                                            </div>
                                            <div className="main_pic2" style={{ display: item.imageType == 0 ? 'none' : 'block' }}>
                                                <i className="iconfont">&#xe63d;</i>
                                            </div>
                                            <div className="main_pic3" >
                                                <i className="iconfont">&#xe640;</i>
                                                <span>{item.browseNum}</span>
                                            </div>
                                        </div>
                                        <div className="main_title">
                                            <p>
                                                {item.content}
                                            </p>
                                            <div className="main_tg">
                                                <div>
                                                    <img src={item.photoUrl ? 'https://image1.51tiangou.com/' + item.photoUrl : headpic} alt="" />
                                                </div>
                                                <div>{item.nickName}</div>
                                                <div>
                                                    <i className="iconfont">&#xe74b;</i>
                                                    <span>{item.likedSum}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="main_box" style={{ display: classIndex == 3 ? 'block' : 'none' }}>
                            <div className="main_fllow">
                                <img src="https://image1.51tiangou.com/tgou2/img2/blank/blankNew/blankBasketList.png" alt="" />
                                <p>暂无内容</p>
                                <div>去逛逛</div>
                            </div>
                            <div className="tg-loading">
                                哎呦~一不小心就到底啦！
                            </div>
                        </div>
                    </div>
                </div>

            </GoodGoods>
        )
    }
    async handleinfo(pageCount, startNum, recommendId) {
        // let data = await mainlistApi(pageCount, startNum, recommendId);
        // let list = this.state.mainlist;
        // list = list.concat(data.data.data)
        // this.setState({
        //     mainlist: list
        // })
    }
    async handlSameCity(cityId, pageCount, startNum, startId) {
        // let data = await citylistApi(cityId, pageCount, startNum, startId);
        // let list = this.state.citylist;
        // list = list.concat(data.data.data)
        // this.setState({
        //     citylist: list
        // })
        // console.log(this.state.citylist)
    }
    fontClick(index) {
        this.setState({
            classIndex: index
        })
    }
}

export default Goodgoods;