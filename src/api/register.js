import http from "utils/request";

export const registerApi = (username,password) => http.post({
    method:"post",
    url:"/users/register",
    data: {
        username,password
    }
})


