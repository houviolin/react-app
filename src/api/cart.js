import http from "utils/request";
export const cartApi = ()=>http.post({
    url:"/publics/shopCart/cartList",
    data:{}
})

// https://orderserver.51tiangou.com/publics/shopCart/cartList