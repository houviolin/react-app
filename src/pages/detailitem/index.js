import React from "react"
import {DetailListStyle} from "./styled"
import { connect } from "react-redux"
import Bscroll from "common/bscroll"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
@connect(mapStateToProps, mapDispatchToProps)
class DetailItem extends React.Component{
    constructor(){
        super();
        this.page=10;
    }
    render(){
        let {detaillisttotal}=this.props;
        return(
        <DetailListStyle>
            <Bscroll ref="scroll">
            <div className="details">
                {
                    detaillisttotal.map((item,index)=>(
                        <div className="main">
                        <div className="left">
                            <img src={item.data.imageUrl} alt=""/>
                        </div>
                        <div className="right">
                            <span className='title'>{item.data.title}</span>
                           <div className="detail">
                                <div className="little-left">
                                  <span className="newprice">{item.data.price}</span>
                                  <span className="originprice">{item.data.originalPrice}</span>
                                </div>
                           </div>
                          
                        </div>
                    </div>
                    ))
                }

            </div>
            </Bscroll>
        </DetailListStyle>
        )
    }
    componentWillUpdate(){
        this.refs.scroll.handlefinishPullUp();
    }
     componentDidMount(){
        this.props.handleDetailData();
        let page=this.page
        this.refs.scroll.handlepullingUp(()=>{
            this.props.handleDetailData(page);
            this.page+=10;
        })

    }
}

export default DetailItem
