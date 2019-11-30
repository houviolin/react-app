// 城市接口
import http from "../../utils/request"
export const cityApi=_=>http({
    method:'get',
    url:'/publics/city/hot/store?hide=true&_=1574930304791',
    params:{
        hide:true,
        _:1574930304791
    }
})
// https://base.51tiangou.com/publics/city/hot/store?&_=1574930304791