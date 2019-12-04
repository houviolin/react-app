import {goodAsyncAction,goodcityAsycnAction} from "actions/good/actionCreator"
export const mapStateToProps = (state)=>({
    mainlist:state.good.goodlist,
    citylist:state.good.citylist,
})

export const mapDispatchToProps = (dispatch)=>({
    handleAsyncGood(pageCount, startNum, recommendId){
        // console.log(1);
        dispatch(goodAsyncAction(pageCount, startNum, recommendId))
    },
    handlSameCity(cityId, pageCount, startNum, startId){
        dispatch(goodcityAsycnAction(cityId, pageCount, startNum, startId))
    },
    fontClick(index) {
        this.setState({
            classIndex: index
        })
    }
})