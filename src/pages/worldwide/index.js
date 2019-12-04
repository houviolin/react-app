import React from "react"
import { NavLink,} from "react-router-dom"
import {WorldWide} from "./styled.js"
import { TabBarRoute } from "../../router/index"
class Worldwide extends React.Component {
    constructor() {
        super()
        this.state = {
            navlist: [],
        }
    }
    render() {
        // console.log(TabBarRoute[3].children);
        return (
            <WorldWide className="worldwide">
                <div className="worldwide_box">
                    <div className="header">
                        <div className="header_list">
                            <a href="#" className="icon">
                                <i className="iconfont">&#xe602;</i>
                            </a>
                        </div>
                        <div className="header_search">
                            <div className="header_search_main">
                                <form action="">
                                    <i className="iconfont">&#xe7f4;</i>
                                    <input type="text" placeholder="尤妮佳化妆棉¥13" />
                                </form>
                            </div>
                        </div>
                        <div className="header_cart">
                            <i className="iconfont">&#xe655;</i>
                        </div>
                    </div>
                    <div className="nav">
                        <div className="navone">
                            <div className="navtwo">
                                <NavLink to="/discount" className="nav_box">
                                    <span>好物满减</span>
                                </NavLink>
                                {
                                    TabBarRoute[3].children.map((item, index) => (
                                        <NavLink to={item.path} className="nav_box" key={index}>
                                            <span>{item.text}</span>
                                        </NavLink>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </WorldWide>
        )
    }
}

export default Worldwide