<template>
    <div class="sms-page">
      <div class="title-tab">
           <h2 class="title">新用户注册</h2>
        <p class="desc">验证码已发送至手机：15622223333</p>
          </div> 
          <p class="form-block">
              <input class="ipt" type="number" maxlength="4" >
          </p>
          <push-btn class="btn" :text="btnText"></push-btn>
       
    </div>
</template>
<script>
import PushBtn from "../../common/push-btn/push-btn";
export default {
  name: "forget-sms-page",
  data() {
    return {
      btnText: "45秒重发"
    };
  },
  components: {
    PushBtn
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/varibles.scss";
.sms-page {
  width: 92.2%;
  margin: 0 auto;

  .title-tab {
    text-align: left;

    color: $color32;
    .title {
      margin-top: 30px;
      font-size: 44px;
    }
    .desc {
      margin-top: 12px;
      font-size: 30px;
      color: $color;
    }
  }
  .form-block {
    height: 128px;
    //   width: 100%;
    line-height: 165px;
    background: $warpperbg;
    color: $color;
    margin: 0 auto;

    // background: #ff0;
    text-align: left;
    font-size: 30px;
    //    padding-bottom: 30px;
    border-bottom: 1px solid $huicc;

    .ipt {
      // margin: 0;
      // margin-top: 70px;
      // height: 128px;
      margin-left: 44px;
      font-size: 30px;
    }
  }
  .btn {
    margin-top: 50px;
  }
  .tag {
    margin-top: 22px;
  }
}
</style>
