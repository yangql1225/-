import { reqCategoryList } from '@/api'

//Home模块的小仓库
const state = {
    categoryList: [],
};
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;

    }
};
const actions = {

    async categoryList({ commit }) {
        let result = await reqCategoryList();
        // console.log(result);
        //  console.log(result.data);
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data);

        }
    }

};
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}