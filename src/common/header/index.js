import React from "react"
import PropTypes from "prop-types"
import "./index.css"
class Header extends React.Component{
    render(){
        return (
            <div className="nav">
                <div className="back">
                <i className="iconfont">&#xe726;</i>
                </div>
                    <div>{this.props.title}</div>
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
Header.defaultProps={
    title:'折扣排行'
}
Header.protoType={
    title:PropTypes.string
}