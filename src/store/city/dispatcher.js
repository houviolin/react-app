const defaultState={
    n:1,
    list:[],
   
}


export default (state=defaultState,action)=>{
    switch (action.type){
        case "CITY":
            let cityState=JSON.parse(JSON.stringify(state))
            citylist=action.data;
            console.log(cityState.list)
            for(var i=0;i<citylist.length;i++){
             let letterFirst=citylist[i].code.slice(0,1);
             if(isCityList(letterFirst)){
                
             }
                
            }
            function isCityList(letterFirst){
                var bStop=true;
                for(var i=0;i<cityState.list.length;i++){
                    if(cityState.list[i].index==letterFirst){
                        bStop=false;
                        break;
                    }
                }
                return bStop;
            }
         
        return cityState
    }
    return state
}