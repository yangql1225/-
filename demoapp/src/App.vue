<template>
  <div>
    <Header></Header>
    <router-view></router-view>

    <Footer></Footer>
  </div>
</template>

<script>
import "../node_modules/swiper/swiper-bundle.min.css";

import Header from "./components/Header/index.vue";
import Footer from "./components/Footer/index.vue";

export default {
  components: {
    Header,
    Footer,
  },
  //组件加载完毕之后再发请求
  mounted() {
    //   通知Vuex向服务器发请求，获取数据，存储于仓库
    this.$store.dispatch("categoryList");

    console.log("发请求获取服务器数据");
  },
};
</script>

<style lang="less" scoped>
</style>