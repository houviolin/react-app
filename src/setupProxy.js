const proxy = require("http-proxy-middleware");

module.exports = (app)=>{
    app.use("/front",proxy({
        target:"https://discover.51tiangou.com",
        changeOrigin:true,
    })),
    app.use("/overseas",proxy({
        target:"https://midway.51tiangou.com",
        changeOrigin:true,
    })),
    app.use("/product",proxy({
        target:"https://midway.51tiangou.com",
        changeOrigin:true,
    })),
    app.use("/publics",proxy({
        target:"https://orderserver.51tiangou.com",
        changeOrigin:true,
    })),
    app.use("/shopping",proxy({
        target:" https://midway.51tiangou.com",
        changeOrigin:true,
    })),
    app.use("/users",proxy({
        target:"http://39.105.204.151:3000",
        changeOrigin:true,
    }))
}


