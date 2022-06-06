const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    devServer: {
        proxy: {
            '/api': {
                // target: 'http://39.98.123.211',               
                // pathRewrite:{'^/api':''} 地址重写
                target: 'http://gmall-h5-api.atguigu.cn'
            }
        }
    },
    // },
    configureWebpack: {
        resolve: {
            fallback: {
                
                fs:false,
                crypto: false,
                 url: false,
                 path:false,
                 http: false,
                 util:false,
                // path: require.resolve("path-browserify"),
                // url: require.resolve("url/"),
                querystring: false,
                // querysting: require.resolve("querystring-es3"),
                // util: require.resolve("util/"),

                  stream: false,//require.resolve("stream-browserify"),
                // http: require.resolve("stream-http"),
               zlib: false,//require.resolve("browserify-zlib"),
                assert: false,//require.resolve("assert/")
            }
        }
    }
})