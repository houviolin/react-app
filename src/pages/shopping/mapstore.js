import {shoppingAsync,shoppingagainAsync} from "actions/shopping/shoppingCreator"
export const mapStateToProps=(state)=>({
    top:state.shoppingstore.top,
    toptotal:state.shoppingstore.toptotal,
    sendtotal:state.shoppingstore.sendtotal,
    nextlist:state.shoppingstore.nextlist
})
export const mapDispatchToProps=(dispatch)=>({
    handleShoppingAsyncData(cityId,storeId,_){
        dispatch(shoppingAsync(cityId,storeId,_))
    },
    handleAgainAsyncData(currentView){
        dispatch(shoppingagainAsync(currentView))
    }
})