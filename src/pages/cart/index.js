import React from "react"
import {CartContainer} from "./styled"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
@connect(mapStateToProps, mapDispatchToProps)
class Cart extends React.Component{
    render(){
        return(
            <CartContainer>
                <div className="Cart">
                <div className="header">
                        <div className="header1">
                            <i className="iconfont">&#xe726;</i>
                        </div>
                        <div className="header2">
                            <div className="header2_box_active">
                                购物车
                            </div>
                        </div>
                        <div className="header3">
                            <span>编辑</span>
                        </div>
                    </div>
                </div>
            </CartContainer>
        )
    }
    componentDidMount(){
        this.props.handle()
    }
}

export default Cart