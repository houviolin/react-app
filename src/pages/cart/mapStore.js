import {cartReduceAsyncAction,cartAddAsyncAction} from "actions/details/actionCreator"
export const mapStateToProps = (state) => ({
    cartlist:state.details.cartlist
})

export const mapDispatchToProps = (dispatch) =>({
    handleback(e){
        this.props.history.go(-1);
    },
    handleChange(){
        
    },
    handleReduce(id){
        dispatch(cartReduceAsyncAction(id))
    },
    handleAdd(id){
        dispatch(cartAddAsyncAction(id))
    }

})