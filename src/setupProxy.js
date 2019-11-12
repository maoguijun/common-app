/*
 * @Author: maoguiun
 * @Date: 2019-11-12 17:28:35
 * @LastEditors: maoguiun
 * @LastEditTime: 2019-11-12 17:52:17
 * @FilePath: \common-app\proxySetup.js
 */
const proxy = require("http-proxy-middleware");
const proxyConfig = app => {
    // proxy middleware options
    const options = {
        target: "http://www.example.org", // target host
        changeOrigin: true, // needed for virtual hosted sites
        ws: true, // proxy websockets
        pathRewrite: {
            "^/api/old-path": "/api/new-path", // rewrite path
            "^/api/remove/path": "/path", // remove base path
        },
        router: {
            // when request.headers.host == 'dev.localhost:3000',
            // override target 'http://www.example.org' to 'http://localhost:8000'
            "dev.localhost:3000": "http://localhost:8000",
        },
    };

    const exampleProxy = proxy(options);
    app.use("/api", exampleProxy);
};

module.exports = proxyConfig;
