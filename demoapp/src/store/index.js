import Vue from 'vue'
import Vuex from 'vuex'

//引入小仓库
import home from './Home/index'
import search from './Search/index'
import detail from './detail'
import shopcart from './shopcart.js'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({

    modules: {
        home,
        search,
        detail,
        shopcart,
        user
    }
})