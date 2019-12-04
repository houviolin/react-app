import {homeAsyncActions,homeAsyncActions2} from "actions/home/actionCreator"
export const mapStateToProps  = (state) => ({
    homelist:state.home.homelist,
    homelist2:state.home.homelist2,
    homelist3:state.home.homelist3,
})
export const mapDispatchToProps = (dispatch) =>({
    handle(cityId,pid,cid,index,_){
        dispatch(homeAsyncActions(cityId,pid,cid,index,_))
    },
    handleproduct(cityId, pid, cid,index,time,tabIndex,childIndex,currentView){
        dispatch(homeAsyncActions2(cityId, pid, cid,index,time,tabIndex,childIndex,currentView))
    }
})
// cityId=2554&pid=15&cid=1304&index=3&_=1575298237542