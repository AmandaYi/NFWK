<template>
    <div class="login-page">
        <div class="title clearfix">
            <li  v-bind:class="{ item: true, 'current': toggleTab==true }"  v-on:click="toggleWay(0)">账号密码登录</li>
            <li v-bind:class="{ item: true, 'tel-login':true,'current': toggleTab==false }"  v-on:click="toggleWay(1)">手机号快捷登录</li>
        </div>
        <div class="form-block" v-if="toggleTab==true">
            <p class="item">账号<input class="ipt" type="text" placeholder="手机号/用户名">
            </p>
              <p class="item">密码<input class="ipt" type="text" placeholder="请输入密码">
            </p>
        </div>
         <div class="form-block"  v-if="toggleTab==false">
             <p class="item">手机号<input class="ipt" type="text" placeholder="请输入手机号">
         
            </p>
              <p class="item">验证码<input class="ipt" type="text" placeholder="请输入收到的验证码">
            </p>
            <div class="send-sms">发送验证码</div>
        </div>
        <push-btn  class="btn" :text="btnText"></push-btn>    
        <div class="tag clearfix">
            <li class="item register">新用户注册</li>
            <li class="item forget">忘记密码？</li>
        </div>
    </div>
</template>
<script>
import PushBtn from "../../common/push-btn/push-btn";
export default {
  name: "login-page",
  data() {
    return {
      toggleTab: true,
      btnText: "登录"
    };
  },
  methods: {
    toggleWay(tab) {
      if (tab == 0) {
        this.toggleTab = true;
      } else if (tab == 1) {
        this.toggleTab = false;
      }
    }
  },
  components: {
    PushBtn
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/varibles.scss";
.login-page {
  width: 92.2%;
  margin: 0 auto;
  .title {
    height: 90px;
    line-height: 90px;
    background: $warpperbg;
    font-size: 32px;
    font-weight: normal;
    font-stretch: normal;

    letter-spacing: 0px;

    .item {
      float: left;
    }
    .tel-login {
      color: $color;
      margin-left: 40px;
    }
    .current {
      color: $currentlv;
      border-bottom: 4px $currentlv solid;
    }
  }
  .form-block {
    position: relative;
    margin-top: 10px;
    .item {
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
    .send-sms {
      position: absolute;
      top: 55px;
      right: 0;

      width: 158px;
      height: 50px;
      background-color: #e0e0e0;
      border-radius: 23px;
      line-height: 50px;
      text-align: center;
    }
  }
  .btn {
    margin-top: 60px;
  }
  .tag {
    margin-top: 20px;
    text-align: left;
    .item {
      float: left;
      font-size: 28px;
    }
    .register {
      letter-spacing: 0px;
      color: $currentlv;
    }
    .forget {
      float: right;
      font-weight: normal;
      font-stretch: normal;

      letter-spacing: 0px;
      color: $hui66;
    }
  }
}
</style>
