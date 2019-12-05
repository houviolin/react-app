import http from "utils/request";

export const loginApi = (username,password) => http.post({
    method:"post",
    url:"/users/login",
    data: {
        username,password
    }
})


