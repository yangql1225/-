<template>
  <div class="pagination">
    <button :disabled="pageNo == 1" @click="$emit('getpageNo', pageNo - 1)">
      上一页
    </button>
    <!-- 当前页大于3 -->
    <!-- <button v-if="pageNo > 3">1</button> -->
    <button
      v-if="startNumAndEndNum.startNum > 1"
      @click="$emit('getpageNo', 1)"
      :class="{ active: pageNo == 1 }"
    >
      1
    </button>
    <!-- 当前页大于5 -->
    <!-- <button v-if="pageNo > 5">···</button> -->
    <button v-if="startNumAndEndNum.startNum > 2">···</button>
    <!-- 中间部分，遍历 -->
    <!-- v-for遍历数字，从1开始， 配合v-if满足条件时才展示 -->
    <button
      v-for="(page, index) in startNumAndEndNum.endNum"
      :key="index"
      v-if="page >= startNumAndEndNum.startNum"
      :class="{ active: pageNo == page }"
    >
      {{ page }}
    </button>

    <button v-if="startNumAndEndNum.endNum < totalPage - 1">···</button>
    <button
      v-if="startNumAndEndNum.endNum < totalPage"
      @click="$emit('getpageNo', totalPage)"
      :class="{ active: pageNo == totalPage }"
    >
      {{ totalPage }}
    </button>
    <button
      :disabled="pageNo == totalPage"
      @click="$emit('getpageNo', pageNo + 1)"
    >
      下一页
    </button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  //pageNo:默认第几页(当前页)  pageSize: 每页个数 total:数据总数 continues：展示效果连续页数
  props: ["pageNo", "pageSize", "total", "continues"],
  computed: {
    //计算属性:计算总页数
    totalPage() {
      //向上取整数
      return Math.ceil(this.total / this.pageSize);
    },
    startNumAndEndNum() {
      //解构:解构之后用参数不用加this
      const { pageNo, totalPage, continues } = this;
      let startNum = 0,
        endNum = 0;

      //连续页码数，大于总页数
      if (continues >= totalPage) {
        startNum = 1;
        endNum = totalPage;
      } else {
        startNum = pageNo - parseInt(continues / 2);
        endNum = pageNo + parseInt(continues / 2);
        //纠正页面不正常的情况
        if (startNum < 1) {
          startNum = 1;
          endNum = continues;
        }
        if (endNum > totalPage) {
          startNum = totalPage - continues + 1;
          endNum = totalPage;
        }
      }
      return { startNum, endNum };
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
.active {
  background: rgb(54, 187, 228);
}
</style>