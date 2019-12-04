import React,{Component,Fragment} from "react"
import TabBar from "common/tabBar"
export default class Layout extends Component{
    render(){
        return(
            <Fragment>
                {this.props.children}
                <TabBar path={this.props.path}/>
            </Fragment>
        )
    }
}
/**
 * 组件标签内部嵌套的内容如何显示
 * this.props.children
 */