<template>
    <div class="marker-page">
        <div class="head clearfix">
            <div class="left">
                <img class="img" :src="marker.imgUrl" alt="">
            </div>
            <div class="right">
                <h2 class="title">{{marker.companyName}}</h2>
                <p class="star">★★★</p>
            </div>
        </div>
        <p class="desc">{{marker.companyDesc}}</p>
        <!-- 底部按钮和更多信息详情 -->
        <div class="contact clearfix" v-if="hide !== true">
            <div class="left" @click="companyDetail()"><i class="iconfont icon-liebiao"></i><span class="text">公司详情</span></div>
            <div class="right clearfix">
                <p class="btn tel"><a :href="marker.telPhone"></a> 电话咨询</p>
                <p class="btn tip" @click="subscribe()">现在预约</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "marker-page",
  props: ["marker", "hide"],
  methods: {
    // 去订阅页面,参数为服务商的id
    subscribe() {
      console.log(this.marker);
      this.$router.push({
        name: "subscribe-page",
        params: {
          gysId: this.marker.id
        }
      });
    },
    // 去公司详情
    companyDetail() {
      this.$router.push({
        name: "company-detail-page",
        params: {
          gysId: this.marker.id
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.marker-page {
  width: 750px;
  // height: 376px;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 0 30px;
  box-sizing: border-box;
  // 头部
  .head {
    background-color: #ffffff;
    padding-top: 50px;
    .left {
      float: left;

      width: 68px;
      height: 68px;
      background-color: #666666;
      border: solid 1px rgba(204, 204, 204, 0.9);
      border-radius: 50%;
      overflow: hidden;

      .img {
        border: solid 1px rgba(204, 204, 204, 0.9);
        width: 116px;
        height: 116px;
        border-radius: 50%;
        display: block;
        margin-left: -24px;
        margin-top: -22px;
      }
    }
    .right {
      float: left;
      margin-left: 22px;
      .title {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 34px;
        color: #000000;
      }
      .star {
        margin-top: 12px;
        margin-bottom: 0;
      }
    }
  }
  .desc {
    background-color: #ffffff;

    // padding: 30px 0;
    margin: 30px auto;
    border-bottom: 1px solid #eeeeee;

    font-size: 30px;
    color: #2a2e2d;
    letter-spacing: 0px;
    text-indent: 2em;
    // height: 74px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    // line-height: 40px;
  }
  .contact {
    height: 124px;
    background-color: #ffffff;
    // margin-top: 30px;
    box-sizing: border-box;

    .left {
      margin-top: 44px;
      float: left;
      .iconfont {
        font-size: 32px;
      }
      .text {
        font-size: 30px;
        color: #333333;
        margin-left: 10px;
      }
    }
    .right {
      float: right;
      font-size: 30px;
      margin-top: 24px;
      .btn {
        float: left;
        box-sizing: border-box;
        margin-top: 0;
        margin-bottom: 0;
        padding: 20px 36px;
        margin-left: 20px;
        // padding-left: 36px;
        // padding-right: 36px;

        // height: 70px;
        // line-height: 70px;
        background: #ffffff;
        border-radius: 35px;
      }
      .tel {
        border: solid 1px rgba(153, 153, 153, 0.9);
      }
      .tip {
        background-color: #00af00;
        color: #ffffff;
        font-weight: 500;
      }
    }
  }
}
</style>

