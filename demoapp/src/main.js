import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
// 全局引入组件
import TypeNav from '@/components/TypeNav'
import  Pagination  from '@/components/Pagination'
//引入仓库
import store from '@/store'

//全局注册组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Pagination.name,Pagination)

Vue.config.productionTip = false
new Vue({
        render: h => h(App),
        beforeCreate(){
            //全局事件总线配置
        Vue.prototype.$bus=this;
        },


        
        router,
        // 注册仓库 ：组件实例的身上多了$.store
        store
    }).$mount('#app')
    // export default router