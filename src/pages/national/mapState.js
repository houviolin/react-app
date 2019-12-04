import {nationalAsyncActions,nationalAsyncActions2} from "actions/national/actionCreator"
export const mapStateToProps  = (state) => ({
    nationallist:state.national.nationallist,
    nationallist2:state.national.nationallist2,
    nationallist3:state.national.nationallist3,
})
export const mapDispatchToProps = (dispatch) =>({
    handle(cityId,pid,cid,index,_){
        dispatch(nationalAsyncActions(cityId,pid,cid,index,_))
    },
    handleproduct(cityId, pid, cid,index,time,tabIndex,childIndex,currentView){
        dispatch(nationalAsyncActions2(cityId, pid, cid,index,time,tabIndex,childIndex,currentView))
    }
})
// cityId=2554&pid=15&cid=1304&index=3&_=1575298237542