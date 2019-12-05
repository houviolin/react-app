import { handleActions } from "redux-actions"
import { detailsTypes,cartPushTypes,cartReduceTypes,cartAddTypes } from "actions/details/actionsTypes"
const defaultState = {
    productlist1: [],
    productlist2: [],
    productlist3: [],
    cartlist:JSON.parse(localStorage.getItem("cartlist"))?JSON.parse(localStorage.getItem("cartlist")):[]
}

export default handleActions({
    [detailsTypes]: (state, action) => {
        let detailsState = JSON.parse(JSON.stringify(state));
        detailsState.productlist1 = action.payload.data.data[1].data;
        detailsState.productlist2 = action.payload.data.data[2].data;
        detailsState.productlist3 = action.payload.data.data[10].data.items;
        // console.log(action.payload.data.data[10].data.items);
        return detailsState;
    },
    [cartPushTypes]: (state, action) => {
        let cartState = JSON.parse(JSON.stringify(state));
        console.log()
        let flag = 1;
        if(cartState.cartlist.length == 0){
            cartState.cartlist.push(action.payload.obj);
        }else{
            for (var i = 0; i < cartState.cartlist.length; i++) {
                if(cartState.cartlist[i].id === action.payload.obj.id){
                    flag = 0
                    cartState.cartlist[i].count++;
                    break;
                }
            }
            if(flag == 1){
                cartState.cartlist.push(action.payload.obj);
            }
            
            // console.log(cartState.cartlist);
        }
        localStorage.setItem("cartlist",JSON.stringify(cartState.cartlist))
        return cartState
    },
    [cartReduceTypes]:(state, action)=>{
        let cartReduceState = JSON.parse(JSON.stringify(state));
        for(var i = 0; i < cartReduceState.cartlist.length; i++){
            if(cartReduceState.cartlist[i].id == action.payload.id){
                if(cartReduceState.cartlist[i].count !== 1){
                    cartReduceState.cartlist[i].count--;
                    localStorage.setItem("cartlist",JSON.stringify(cartReduceState.cartlist))
                }else{
                    cartReduceState.cartlist.splice(i,1);
                    localStorage.setItem("cartlist",JSON.stringify(cartReduceState.cartlist))
                }
            }
        }
        return cartReduceState;    
    },
    [cartAddTypes]:(state, action)=>{
        let cartAddState = JSON.parse(JSON.stringify(state));
        for(var i = 0; i < cartAddState.cartlist.length; i++){
            if(cartAddState.cartlist[i].id == action.payload.id){
                cartAddState.cartlist[i].count++;
                localStorage.setItem("cartlist",JSON.stringify(cartAddState.cartlist))
            }
        }
        return cartAddState;
    }

}, defaultState)
