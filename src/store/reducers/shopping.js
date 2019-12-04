import {handleActions} from "redux-actions"
import {shoppingType,shoppingAgianTypes} from "actions/shopping/shoppingTypes"
const defaultState ={
    top:[],
    bottom:[],
    toptotal:[],
    sendtotal:[],
    nextlist:[]
   
}
export default handleActions({
    [shoppingType]:(state,action)=>{
        let shoppingState=JSON.parse(JSON.stringify(state))
        shoppingState.top=action.payload.data.slice(8,33);
        for(var i=0;i<shoppingState.top.length;i++){
          shoppingState.toptotal[i]=shoppingState.top[i].data;
          shoppingState.sendtotal.push(shoppingState.toptotal[i].items)
         }  
        return shoppingState
    },
    [shoppingAgianTypes]:(state,action)=>{
        let shoppingAgainState=JSON.parse(JSON.stringify(state));
        shoppingAgainState.nextlist=[...shoppingAgainState.nextlist,...action.payload.data.slice(10,20)];
        return shoppingAgainState
    }
},defaultState)