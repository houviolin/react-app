import React from "react"
import { mapStateToProps, mapDispatchToProps } from "./mapstore"
import { connect } from "react-redux"
import { CityStyle } from "./styled"
class City extends React.Component {
    constructor() {
        super();
    }

    render() {

        return (
            <CityStyle>
                <div className='total'>
                    <div className="left">11</div>
                    <div className="right">22</div>
                </div>
            </CityStyle>

        )
    }

    // 请求数据
    componentDidMount() {
        this.props.handle()

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(City)