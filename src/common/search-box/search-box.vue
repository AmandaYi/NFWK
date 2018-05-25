<template>
  <!-- <div class="search-box">
    <div class="item">
  <input type="text"     class="ipt" :placeholder="智能喷洒 ">
    <i class="iconfont sousuo icon-sousuo"></i>
   
    </div>
   <i class="iconfont chat icon-liaotian"></i>
   <i class="iconfont position">郑州 <i class="iconfont icon-sanjiao_xia"></i></i>
  </div> -->
    <div class="search-box">
      <div class="box clearfix">
        <div class="position">郑州<i class="iconfont icon-sanjiao_xia"></i></div>
        <div class="content">
          <i class="iconfont icon-sousuo"></i>
          <input type="text" class="ipt" placeholder="智能搜索">
        </div>
        <div class="chat-icon"><i class="iconfont icon-liaotian"></i></div>
      </div>
  </div>
</template>

<script>
export default {
  name: "search-box",
  data() {
    return {
      // iconUrl: '@/assets/imgs/search.png'
    };
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "~@/assets/scss/varibles.scss";
.search-box {
  width: 100%;
  height: 64px;
  //  background: #f00;
  .box {
    position: relative;
    .position {
      float: left;
      font-size: 28px;

      line-height: 64px;

      color: #ffffff;
      margin-left: 28px;
    }
    .content {
      position: absolute;
      width: 480px;
      height: 64px;
      left: 136px;

      .icon-sousuo {
        position: absolute;
        top: 16px;
        color: #333333;
        left: 20px;
      }
      .ipt {
        display: block;
        box-sizing: border-box;
        width: 480px;
        height: 64px;
        padding-left: 60px;
        background-color: #ffffff;
        border-radius: 30px;
        font-size: 28px;
      }
    }
    .chat-icon {
      float: right;
      margin-top: 18px;
      margin-right: 28px;
      color: #ffffff;
      .icon-sousuo {
        font-size: 42px;
        height: 64px;
        line-height: 64px;
      }
    }
  }
}
</style>
