import {infantAsyncActions,infantAsyncActions2} from "actions/infant/actionCreator"
export const mapStateToProps  = (state) => ({
    infantlist:state.infant.infantlist,
    infantlist2:state.infant.infantlist2,
    infantlist3:state.infant.infantlist3,
})
export const mapDispatchToProps = (dispatch) =>({
    handle(cityId,pid,cid,index,_){
        dispatch(infantAsyncActions(cityId,pid,cid,index,_))
    },
    handleproduct(cityId, pid, cid,index,time,tabIndex,childIndex,currentView){
        dispatch(infantAsyncActions2(cityId, pid, cid,index,time,tabIndex,childIndex,currentView))
    }
})
// cityId=2554&pid=15&cid=1304&index=3&_=1575298237542