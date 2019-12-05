import {detaillistAsync} from "actions/detaillist/actionCreator"
export const mapStateToProps=(state)=>({
    detaillisttotal:state.detaillist.detaillisttotal
})
export const mapDispatchToProps=(dispatch)=>({
    handleDetailData(){
        dispatch(detaillistAsync())
    }
})