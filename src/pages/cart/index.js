import React from "react"
import { CartContainer } from "./styled"
import { connect } from "react-redux"
import {withRouter} from "react-router-dom"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
@connect(mapStateToProps, mapDispatchToProps)

@withRouter
class Cart extends React.Component {
    render() {
        let {cartlist} = this.props;
        // console.log(cartlist);
        return (
            <CartContainer>
                <div className="cart">
                    <div className="header">
                        <div className="header1">
                            <i className="iconfont" onClick={this.props.handleback.bind(this)}>&#xe726;</i>
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
                    <div className="main">
                        {
                            cartlist.map((item,index)=>(
                                <div className="main_box" >
                            <div className="main_top">
                                <input type="checkbox" name="" id=""/>
                                <div className="main_top_r">
                                    <span>自营</span>
                                    <span>{item.address}</span>
                                </div>
                            </div>
                            <div className="main_contetn">
                                <input type="checkbox" name="" id=""/>
                                <div className="main_content_box">
                                    <div className="main_content_box_l">
                                        <img src={item.pic} alt=""/>
                                    </div>
                                    <div className="main_content_box_r">
                                        <div className="main_content_title">{item.name}</div>
                                        <div className="main_content_pir">
                                            <span>
                                                ￥
                                                <i>{item.price}</i>
                                            </span>
                                            <span className="inputgroup">
                                                <div className="input_reduce" onClick={this.props.handleReduce.bind(this,item.id)}>-</div>
                                                <input type="number" className="input_text" value={item.count} onChange={this.props.handleChange.bind(this)}/>
                                                <div className="input_add" onClick={this.props.handleAdd.bind(this,item.id)} >+</div>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="main_bottom">
                                <div className="main_bottom_count">
                                    <span>合计：</span>
                                    <span>
                                        <i>￥</i>
                                        {item.price*item.count}
                                    </span>
                                    <span>（不含运费、税费）</span>
                                </div>
                                <div className="mian_bottom_js">
                                    结算
                                    <span>({item.count})</span>
                                </div>
                            </div>
                            <div className="main_kong"></div>
                        </div>
                            ))
                        }
                        
                        
                    </div>
                </div>
            </CartContainer>
        )
    }
}

export default Cart