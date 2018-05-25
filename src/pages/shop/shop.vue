<template>
<div class="shop-page">
    <div class="banner">
        <img class="img" alt="">
        </div>
    <h2 class="on-title">类型</h2>
    <div class="kind-list">   
        <li class="item">
            <div class="list-banner">
                <img class="list-img" alt="">
            </div>
            <div class="item-title">
                <i class="iconfont"></i>
               <h2 class="sub-title">农机服务</h2>
            </div>
            <div class="desc">依法经营生产销售企业或厂家授权经销代理，有经营许可。</div>
            <div class="btn" @click="toShopmsg(0)">立即入住</div>
        </li>
         <li class="item">
            <div class="list-banner">
                <img class="list-img" alt="">
            </div>
            <div class="item-title">
                <i class="iconfont"></i>
               <h2 class="sub-title">农机服务</h2>
            </div>
            <div class="desc">依法经营生产销售企业或厂家授权经销代理，有经营许可。</div>
            <div class="btn" @click="toShopmsg(1)">立即入住</div>
        </li>
         <li class="item">
            <div class="list-banner">
                <img class="list-img" alt="">
            </div>
            <div class="item-title">
                <i class="iconfont"></i>
               <h2 class="sub-title">农机服务</h2>
            </div>
            <div class="desc">依法经营生产销售企业或厂家授权经销代理，有经营许可。</div>
            <div class="btn" @click="toShopmsg(2)">立即入住</div>
        </li>
         <li class="item">
            <div class="list-banner">
                <img class="list-img" alt="">
            </div>
            <div class="item-title">
                <i class="iconfont"></i>
               <h2 class="sub-title">农机服务</h2>
            </div>
            <div class="desc">依法经营生产销售企业或厂家授权经销代理，有经营许可。</div>
            <div class="btn" @click="toShopmsg(3)">立即入住</div>
        </li>
         <li class="item">
            <div class="list-banner">
                <img class="list-img" alt="">
            </div>
            <div class="item-title">
                <i class="iconfont"></i>
               <h2 class="sub-title">农机服务</h2>
            </div>
            <div class="desc">依法经营生产销售企业或厂家授权经销代理，有经营许可。</div>
            <div class="btn" @click="toShopmsg(4)">立即入住</div>
        </li>
        <li class="item">
            <div class="list-banner">
                <img class="list-img" alt="">
            </div>
            <div class="item-title">
                <i class="iconfont"></i>
               <h2 class="sub-title">农机服务</h2>
            </div>
            <div class="desc">依法经营生产销售企业或厂家授权经销代理，有经营许可。</div>
            <div class="btn" @click="toShopmsg(5)">立即入住</div>
        </li>
    </div>
</div>
</template>




<script>
export default {
  name: "shop",
  data() {
    return {};
  },
  methods:{
        toShopmsg:function(id){
           this.$router.push({name: 'shop-msg-page',params:{id:id}});
    }
   
  }
};
</script>
<style lang="scss">
.shop-page {
  width: 100%;
  margin: 0 auto;
  background: #ffffff;
  .banner {
    // margin-top: 18px;
    width: 100%;
    height: 276px;
    background: #ff00ff;
  }
  .on-title {
    background: #ff0;
    height: 90px;
    margin-top: 0;
    margin-bottom: 0;
    line-height: 90px;
    width: 92.2%;
    margin: 0 auto;
  }

  .kind-list {
    width: 92.2%;
    height: 450px;
    background-color: #ffffff;
    border-radius: 8px;
    // border: solid 1px rgba(204, 204, 204, 0.9);
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    // text-align: center;
    margin: 0 auto;
    .item {
      // width: 50%;
      border-radius: 8px;
      border: solid 1px rgba(204, 204, 204, 0.9);
      margin-top: 22px;
      width: 328px;
      padding-bottom: 14px;
      .list-banner {
        width: 330px;
        height: 200px;

        .list-img {
          width: 330px;
          height: 200px;
          background-color: #ffffff;
          border-radius: 8px 8px 0px 0px;
        }
      }
      .item-title {
        position: relative;
        .iconfont {
          position: absolute;
          top: -24px;
          left: 22px;
          width: 74px;
          height: 74px;
          background: #ff0;
          display: block;
        }
        .sub-title {
          font-size: 30px;

          color: #333333;
          padding-top: 14px;
          margin-bottom: 0;
          margin-top: 0;
          text-align: center;
        }
      }
      .desc {
        padding-top: 22px;
        font-size: 24px;
        // background: #000;

        color: #666666;
        width: 84%;
        margin: 0 auto;
      }
      .btn {
        width: 280px;
        height: 64px;
        text-align: center;
        font-size: 30px;

        line-height: 64px;
        margin: 0 auto;
        margin-top: 18px;
        color: #ffffff;

        background-color: #2dbb55;
      }
    }
  }
}
</style>