import http from "utils/request"
export const timelistApi=(itemId,id,pageType,_)=>http.get({
    url:'shopping/page/sec/tab.node',
    data:{
        itemId,id,pageType,_
    }
})
export const timelistlistApi=(id,pageType,_)=>http.get({
    url:'shopping/page/sec/list.node',
    data:{
       id,pageType,_
    }
})