import {essenceAsyncScrollAction,essenceAsyncProjectAction} from "actions/essence/actionCreator"
export const mapStateToProps = (state) => ({
    essencescrolllist : state.essence.essencescrolllist,
    essencescrolllist2 : state.essence.essencescrolllist2,
    essencescrolllist3 : state.essence.essencescrolllist3,
    essencescrolllist4 : state.essence.essencescrolllist4,
    essencescrolllist5 : state.essence.essencescrolllist5,
    essenctprojectlist: state.essence.essenctprojectlist
})

export const mapDispatchToProps = (dispatch) => ({
    scrollhandle(cityId, selected, pid, cid, index, _){
        // alert(1);
        dispatch(essenceAsyncScrollAction(cityId, selected, pid, cid, index, _))
    },
    handleproject(cityId,selected,pid,cid,index,tabIndex,childIndex,currentView,_){
        dispatch(essenceAsyncProjectAction(cityId,selected,pid,cid,index,tabIndex,childIndex,currentView,_))
    }
})