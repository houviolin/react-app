import {healthcareAsyncActions,healthcareAsyncActions2} from "actions/healthcare/actionCreator"
export const mapStateToProps  = (state) => ({
    healthcarelist:state.healthcare.healthcarelist,
    healthcarelist2:state.healthcare.healthcarelist2,
    healthcarelist3:state.healthcare.healthcarelist3,
})
export const mapDispatchToProps = (dispatch) =>({
    handle(cityId,pid,cid,index,_){
        dispatch(healthcareAsyncActions(cityId,pid,cid,index,_))
    },
    handleproduct(cityId, pid, cid,index,time,tabIndex,childIndex,currentView){
        dispatch(healthcareAsyncActions2(cityId, pid, cid,index,time,tabIndex,childIndex,currentView))
    }
})