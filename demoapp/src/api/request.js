import axios from "axios";
//引入进度条
import nprogress from "nprogress";
//console.log(nprogress)
import 'nprogress/nprogress.css';
//在当前模块中引入store获取存在里面的uuid
import store from '@/store/index'

//引入之后进行封装
//配置axios的request请求
let requests = axios.create({
    //基础路径配置，方便后面发请求的时候，不用在写 /api 这一层路径了
    baseURL: '/api',
    //请求超时时间 50000ms=5s
    timeout: 2000
});
// 请求拦截器：在发请求之前，请求拦截器可以检测到信息，可以做一些处理
requests.interceptors.request.use((config) => {
     //引入之后先打印，看引入成功了没
    //  console.log(store);
    
    //在发请求的时候加一个请求头，向后端传入uuid
    if(store.state.detail.uuid_token){
        //给请求头加一个字段，字段名字是和后端确认好的（userTempId）,不能随便写
        config.headers.userTempId=store.state.detail.uuid_token;
    }
    //带token : 带登录用户的信息
     if(store.state.user.token){
      config.headers.token=store.state.user.token;
     }
    //启用进度条
    nprogress.start();
    // 返回config配置对象，config里面包含headers请求头
    return config;

});
//回调函数
requests.interceptors.response.use((res) => {
    //结束进度条
     nprogress.done();
    
    //成功之后，服务器会返回数据，响应拦截器可以监测到，可以做一些处理
    return res.data;

}, (error) => {
    //响应失败回调函数，这里可以自定义一些日志显示或者提示
    return Promise.reject(new Error('faile'));
});



//向外共享
export default requests