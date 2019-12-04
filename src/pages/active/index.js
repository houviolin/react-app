import React from "react"
import { Actived } from "./styled"
class Active extends React.Component {
    render() {
        return (
            <Actived>
                <div className="active">
                    <div className="header">
                        <div className="head">
                            <div className="head_up">
                                <div className="head_up_l">
                                    <img src="//image1.51tiangou.com/tgou2/img2/index/title-timeSelf.png" alt=""/>
                                    <span className="time">
                                        <span></span>&nbsp;:&nbsp;<span></span>&nbsp;:&nbsp;<span></span>
                                    </span>
                                </div>
                                <div className="head_up_r">
                                    <span>更多</span>
                                    <i className="iconfont">&#xe74c;</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Actived>

        )
    }
}
export default Active