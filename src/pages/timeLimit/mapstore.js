import {timeListAsync,timeListlistAsync} from "actions/timelist/timelistCreator"
export const mapStateToProps=(state)=>({
    timeliststate:state.timeliststore.timeliststate,
    timelistagianstate:state.timeliststore.timelistagianstate
})
export const  mapDispatchToProps=(dispatch)=>({
    handleStoreAsyncData(itemId,id,pageType,_){
        dispatch(timeListAsync(itemId,id,pageType,_))
    },
    handleStorelistAsyncData(id,pageType,_){
        dispatch(timeListlistAsync(id,pageType,_))
    },

})