home 主页开发

1、静态主键的拆分。
HTML+CSS+组件

2、postman 
http://39.98.123.211/ 服务器请求地址 接口测试正常；
如果返回code=200,则为成功；
接口前缀都带有api字样。

3、axios 二次封装 api/request.js
XMLHttprequest fetch JQ axios
二次封装的原因：
       请求拦截器：在发请求之前
       响应来拦截器： 服务器数据返回以后
安装 npm install --save axios
4、在项目当中。API文件夹, 百度参考git|npm关于 axios的文档
在接口当中，路径都带有api
baseURL:'/api'

5、接口的统一管理 api/index.js

6、跨域问题：
   浏览器 端口，协议，域名不一样的问题
   解决方法：JSONP  CROS  代理 
   代理是在vue.config.js 里面配置代理服务器信息，配置文件修改完成需要重启：
       devServer: {
        proxy: {
            '/api': {
                target: 'http://39.98.123.211',
                // pathRewrite:{'^/api':''} 地址重写
            }
        }
    }
7、nprogress进度条使用


8、Vuex学习  项目过大，模块式开发

npm install --save vuex --force
有报错
npm ERR! this command with --force, or --legacy-peer-deps

  state : 仓库存储数据的地方
  mutations : 修改state的唯一手段
  actions : 处理action,可以书写自己的业务逻辑，也可以处理异步
  getters : 计算属性，用于简化仓库数据，让组件获取仓库数据更方便

  需要在main.js入口文件引入store仓库