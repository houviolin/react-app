import {storeAsync} from "actions/store/storeActionCreator"
export const mapStateToProps=(state)=>({
    one:state.storein.one,
    two:state.storein.two,
    three:state.storein.three,
    total:state.storein.total
})
export const mapDispatchToProps=(dispatch)=>({
    handleStoreAsncyData(cityId,storeId,_){
        // 在这里调用dispatch 里面调用action
        dispatch(storeAsync(cityId,storeId,_))
    }
})