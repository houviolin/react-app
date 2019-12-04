import {makeupAsyncActions,makeupAsyncActions2} from "actions/makeup/actionCreator"
export const mapStateToProps  = (state) => ({
    makeuplist:state.makeup.makeuplist,
    makeuplist2:state.makeup.makeuplist2,
    makeuplist3:state.makeup.makeuplist3,
})
export const mapDispatchToProps = (dispatch) =>({
    handle(cityId,pid,cid,index,_){
        dispatch(makeupAsyncActions(cityId,pid,cid,index,_))
    },
    handleproduct(cityId, pid, cid,index,time,tabIndex,childIndex,currentView){
        dispatch(makeupAsyncActions2(cityId, pid, cid,index,time,tabIndex,childIndex,currentView))
    }
})
// cityId=2554&pid=15&cid=1304&index=3&_=1575298237542