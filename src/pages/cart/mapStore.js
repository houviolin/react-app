import {cartAsyncAction} from "actions/cart/actionCreator"
export const mapStateToProps = (state) => ({

})

export const mapDispatchToProps = (dispatch) =>({
    handle(){
        dispatch(cartAsyncAction())
    }
})