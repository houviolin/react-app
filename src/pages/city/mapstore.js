import {CityAction} from "../../action/city"
export const mapStateToProps=(state)=>({
    n:state.city.n
})
export const mapDispatchToProps=(dispatch)=>({
   handle(){
    dispatch(CityAction())
   },
})