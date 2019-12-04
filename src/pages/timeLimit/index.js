import React,{Fragment} from "react"
import Header from "common/header/index"
import {TimeListStyle} from "./styled"
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import Bscroll from "common/bscroll"
import {mapStateToProps,mapDispatchToProps} from "./mapstore"
@connect(mapStateToProps,mapDispatchToProps)
@withRouter
class TimeList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
      let {timeliststate,timelistagianstate} =this.props;
        return (
          <Fragment>
            <TimeListStyle>
            <Header/>
            <Bscroll>
              <div className="listtotal">
                {
                  timelistagianstate.map((item,index)=>(
                    <div className="item" key={index}>
                    <div className="item-left">
                      <img src={item.data.imageUrl} alt=""/>

                    </div>
                    <div className="item-right">
                      <p className="list-title">{item.data.title}</p>
                      <p className="listprice"><span className="nowprice">{item.data.price}</span><span className="oldprice">{item.data.originalPrice}</span><span className="listzk">{item.data.discount}折</span></p>
                      <p className="monthshow">月销<span>92</span></p>
                    </div>
                </div>
                  ))
                }

              </div>
              </Bscroll>
            </TimeListStyle>  
          </Fragment>
        
        )
    }
    componentDidMount(){
        let {itemId,id,pageType,_}=this.props.match.params;
        console.log(itemId,id,pageType,_)
        this.props.handleStoreAsyncData(itemId,id,pageType,_)
          this.props.handleStorelistAsyncData(id,pageType,_)
     
      }
}
export default TimeList