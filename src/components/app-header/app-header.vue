<template>
<div class="app-header">
  
  <div class="box">
      <div @click="personList()" class="personal">
          <i class="iconfont icon-wo"></i>
      </div>
        <div class="search-btn">
          <!-- <i class="iconfont icon-sousuo"></i> -->
      </div>
      <div class="city-title">
          <h2 class="city">
             <span class="text">{{city}}</span><i class="iconfont icon-sanjiao_xia"></i>
          </h2>
         
      </div>
    
  </div>
</div>
</template>

<script>
export default {
  name: "app-header",
  props: ["city"],
  methods: {
    back() {
      this.$router.go(-1);
    },
    personList() {
      //  this.$router.push({
      //      name:"ordinary-login-page"
      //  })
      this.$emit("showLeftList")
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/index.scss";

.app-header {
  width: 100%;
  height: 88px;
  background-color: #ffffff;
  .box {
    width: 100%;
    height: 88px;
    padding-left: 28px;
    padding-right: 28px;
    box-sizing: border-box;
    // position: relative;
    .personal {
      //  position: absolute;
      //  top: 30px;
      //  left: 28px;
      float: left;
      margin-top: 22px;
      .iconfont.icon-wo {
        font-size: 38px;
      }
    }
    .city-title {
      text-align: center;

      .city {
        margin-top: 0;
        margin-bottom: 0;
        //   margin-top: 20px;
        line-height: 88px;

        .text {
          margin-right: 14px;
        }
      }
    }
    .search-btn {
      float: right;
      //    font-size: 38px;
      margin-top: 22px;
      .iconfont.icon-sousuo {
        font-size: 38px;
      }
      //  position: absolute;
      //  top: 13px;
      //  right: 28px;
    }
  }
}
</style>
