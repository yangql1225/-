<template>
  <div class="outer">
    <!-- 头部 -->
    <header class="header">
      <!-- 头部的第一行 -->
      <div class="top">
        <div class="container">
          <div class="loginList">
            <p>尚品汇欢迎您！</p>
            <!-- 没有用户名 表示没有登录的情况下-->
            <p v-if="!userName">
              
              <router-link to="/login">登陆</router-link>
              <router-link to="/register" class="register"
                >免费注册</router-link
              >
              <!-- <a href="###" class="register">免费注册</a> -->
            </p>
              <p v-else>              
              <a>{{userName}}</a>
              <a class="register" @click="logout"
                >退出登录</a
              >
            </p>
          </div>
          <div class="typeList">
            <a href="###">我的订单</a>
            <a href="###">我的购物车</a>
            <a href="###">我的尚品汇</a>
            <a href="###">尚品汇会员</a>
            <a href="###">企业采购</a>
            <a href="###">关注尚品汇</a>
            <a href="###">合作招商</a>
            <a href="###">商家后台</a>
          </div>
        </div>
      </div>
      <!--头部第二行 搜索区域-->
      <div class="bottom">
        <h1 class="logoArea">
          <router-link class="logo" title="尚品汇" to="/home">
            <img src="./images/logo.png" alt="" />
          </router-link>
        </h1>
        <div class="searchArea">
          <form action="###" class="searchForm">
            <input
              type="text"
              id="autocomplete"
              class="input-error input-xxlarge"
              v-model="keyword"
            />
            <button
              class="sui-btn btn-xlarge btn-danger"
              type="button"
              @click="goSearch"
            >
              搜索
            </button>
          </form>
        </div>
      </div>
    </header>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    goSearch() {
      if (this.$route.query) {
        let loction = { name: "search", params: { keyword: this.keyword } };
        loction.query = this.$route.query;
        this.$router.push(loction);
        console.log("点击搜索发请求query ");
      } else {
        this.$router.push({
          name: "search",
          params: { keyword: this.keyword },
        });
        console.log("点击搜索发请求");
      }
    },
    //退出登录
    logout(){}
  },
  mounted() {
    this.$bus.$on("clear", () => {
      this.keyword = "";
    });
    //  头部组件加载完毕
    // 派发action 获取用户数据
     this.$store.dispatch('getUserTokenInfo');
  },
  computed:{
    //计算属性可以从仓库中获取想要的数据
   ...mapGetters(['userInfo']),
    userName(){
      return this.userInfo.name;
  }
  },
  
};
</script>

<style lang="less" scoped >
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>