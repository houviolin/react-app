import {detailsAsyncActions,cartPushAction} from "actions/details/actionCreator"
export const mapStateToProps = (state) => ({
    productlist1:state.details.productlist1,
    productlist2:state.details.productlist2,
    productlist3:state.details.productlist3,
    cartlist:state.details.cartlist
})

export const mapDispatchToProps = (dispatch) => ({
    handleprojectinfo(id,depot,_){
        // console.log(id,depot,_);
        dispatch(detailsAsyncActions(id,depot,_))
    },
    handleClick(){
        this.props.history.go(-1)
    },
    handleadd(){
        let id = this.refs.id.id;
        let pic = this.refs.imageUrl.src;
        let name = this.refs.name.innerHTML;
        let price = this.refs.price.innerHTML;
        let address = this.refs.address.innerHTML;
        let count = 1;
        let obj = {
            id,
            pic,
            name,
            price,
            address,
            count
        }
        dispatch(cartPushAction(obj)) 
    },
    handle(){
        this.props.history.push("/cart");
    }
})