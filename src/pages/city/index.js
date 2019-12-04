import { CityStyle } from "./styled"
import React from "react"
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
}
export default City