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
    }))
}
// https://midway.51tiangou.com
// https://midway.51tiangou.com