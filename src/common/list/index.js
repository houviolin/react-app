import React,{Fragment} from "react"
import {ListStyle} from "./styled"
class ListTotal extends React.Component{
    constructor(){
        super();
    }
    render(){
        <Fragment>
            <ListStyle className="item">
                    <div className="item-left">
                        <img src="https://image1.51tiangou.com/seller/201909/03/49F28E74-F4C9-4324-9B31-090FC1A85C41.jpg!m" alt=""/>
                        <div className="paiming">no1</div>
                    </div>
                    <div className="item-right">
                        <p className="list-title">【美食1号】马来西亚 普塔蔓白茶香型牙膏 150g</p>
                        <p className="listprice"><span className="nowprice">9.9</span><span className="oldprice">59</span><span className="listzk">1.7折</span></p>
                        <p className="monthshow">月销<span>92</span></p>
                    </div>
            </ListStyle>
        </Fragment>
    }
}
export default ListTotal