import {CityAction} from "actions/city"
console.log(CityAction);
export const mapStateToProps=(state)=>({
    n:state.city.n
})
export const mapDispatchToProps=(dispatch)=>({
   handle(){
    dispatch(CityAction())
   },
})