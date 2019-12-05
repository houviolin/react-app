import React ,{Fragment} from "react"
import { Deatiltotal} from './styled'
import Header from "common/header"
import {Link,withRouter} from "react-router-dom"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "../detailitem/mapStore"
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class DetailTwo extends React.Component {
    render() {
        return (
          <Fragment>
                <Header title="限时抢购"></Header>
                <Deatiltotal>
                <div className="nav">
                    <span>正在抢购</span>
                    <span>即将开始</span>
                </div>
                </Deatiltotal>
            </Fragment>
        )
    }
   
}

export default DetailTwo