import {detailsAsyncActions} from "actions/details/actionCreator"
export const mapStateToProps = (state) => ({
    productlist1:state.details.productlist1,
    productlist2:state.details.productlist2,
    productlist3:state.details.productlist3,
})

export const mapDispatchToProps = (dispatch) => ({
    handleprojectinfo(id,depot,_){
        // console.log(id,depot,_);
        dispatch(detailsAsyncActions(id,depot,_))
    },
    handleClick(){
        this.props.history.go(-1)
    }
})