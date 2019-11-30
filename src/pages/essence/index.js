import React from "react"
// import { Carousel } from 'antd';
import {Essencs} from "./styled.js"
class Essence extends React.Component {
    render() {
        return (
            <Essencs className="essence">
                <div className="animate">
                    {/* <Carousel autoplay>
                        <img src="https://img1.tg-img.com/seller/201911/25/A512D4F0-744D-45CD-819F-4CE165C44498.jpg!y" alt="" />
                        <img src="https://img1.tg-img.com/seller/201906/25/FEF2D15E-CCA1-494B-ADD9-DE9179B8B92B.jpg!y" alt="" />
                        <img src="https://img1.tg-img.com/seller/201911/27/BE994737-20D2-4CBE-AF42-D3BDE818F212.jpg!y" alt="" />
                        <img src="https://img1.tg-img.com/seller/201911/27/A63B3972-78A3-438A-8DD4-BC1E163B85AD.jpg!y" alt="" />
                        <img src="https://img1.tg-img.com/seller/201911/26/57DEA098-22F8-4110-9828-32C3D8F4BEE9.jpg!y" alt="" />
                        <img src="https://img1.tg-img.com/seller/201911/26/A271D1A8-7808-4F1F-A98A-CB24E16064AA.jpg!y" alt="" />
                        <img src="https://img1.tg-img.com/seller/201911/25/AFC6E9F4-6248-429B-BED7-85C315FC91B2.png!y" alt="" />
                        <img src="https://img1.tg-img.com/seller/201905/13/8D5591CC-C408-4EC4-97BB-C5864BA78BF5.jpg!y" alt="" />
                    </Carousel> */}
                </div>
                <div className="pic">
                    <div>
                        <a href="#">
                            <img src="https://img1.tg-img.com/seller/201911/25/0E4359EC-1744-4968-9F06-852A63969342.png!y" alt=""/>
                        </a>
                    </div>
                </div>
                <div className="main">
                    <div className="main1">
                        <div className="main1_box">
                            <div className="main1_box_main">
                                <a href="#" className="main1_box_main_pic">
                                    <img src="https://img1.tg-img.com/seller/201911/26/819112EE-CF9C-4FC1-8810-ACD5A3691977.jpg!y" alt=""  />
                                    <i className="iconfont">&#xe643;</i>
                                </a>
                                <div className="scroll-container">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Essencs>
        )
    }
}

export default Essence