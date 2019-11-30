import React from "react"
import "./index.css"
class Header extends React.Component{
    render(){
        return (
            <div className="nav">
                <div className="back">
                <i className="iconfont">&#xe726;</i>
                </div>
                <div>折扣排行</div>
                <div className="gouwu">
                <i className="iconfont">&#xe64c;</i>
                </div>
                  <div className="selecter">
                  <i className="iconfont">&#xe602;</i>
                  </div>
            </div>
        )
    }
}
export default Header