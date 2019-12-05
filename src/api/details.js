import http from "utils/request";
export const detailsApi = (id,depot,_) =>http.get({
    url:"/product/listing/init.node",
    data:{
        id,depot,_
    }
})
