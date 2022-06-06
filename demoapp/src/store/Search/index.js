import { reqGetSearchInfo } from '@/api';

//仓库模块
const state = {
    searchList: {}
};
const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList;

    }
};
const actions = {
    //获取search 模块数据
    async getSearchList({ commit }, params = {}) {
        let result = await reqGetSearchInfo(params);
        if (result.code == 200) {
            commit('GETSEARCHLIST', result.data);
        }
    }
};
//计算属性：在项目当中为了简化数据而生，可以把将来在组建当中需要用的数据简化，组件在获取数据的时候更方便
const getters = {
    goodsList(state) {
        //当没有网络的时候，获取不到服务器数据,返回一个空数组；这样，vue组件获取的到的数据就是一个空数组，而不是undefined
        return state.searchList.goodsList || [];
    },
    trademarkList(state) {
        return state.searchList.trademarkList || [];
    },
    attrsList(state) {
        return state.searchList.attrsList || [];
    }
};

export default {
    state,
    mutations,
    actions,
    getters

}