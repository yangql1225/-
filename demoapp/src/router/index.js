//配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router';
//使用插件
Vue.use(VueRouter)
    // 导入需要引入的组件
import routes from './routes.js'

//重写push|replace方法
//先把VueRouter原型对象的push保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
//
VueRouter.prototype.push = function(location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => {}, () => {})
    }
}
VueRouter.prototype.replace = function(location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => {}, () => {})
    }
}




//配置路由
export default new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        // y=0，路由跳转在最上方
        return { y: 0 }
      },
})