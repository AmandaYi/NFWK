<template>
    <div class="register-page">
      <back-header></back-header>
      <div class="title-tab">
           <h2 class="title">新用户注册</h2>
        <p class="desc">输入手机号，创建账户</p>
          </div> 
          <p class="form-block">手机号
              <input class="ipt" v-model="telPhone"   type="text" placeholder="请输入手机号">
          </p>
          <div @click="toRegisterSms()">
             <push-btn class="btn" :text="btnText"></push-btn>
          </div>
    
          
          <!-- <clause-tag class="tag"></clause-tag> -->
    </div>
</template>
<script>
import PushBtn from "@/common/push-btn/push-btn";
import BackHeader from "@/components/back-header/back-header";
import ApiService from "@/services/api-service/api-service";
// import ClauseTag from "../../common/clause-tag/clause-tag";
// import AppHeader from "../../components/app-header/app-header";
// import Axios from 'axios';
export default {
  name: "ordinary-register-page",
  data() {
    return {
      apiService: new ApiService(),
      btnText: "下一步",
      telPhone: ""
    };
  },
  components: {
    PushBtn,
    BackHeader
    // ClauseTag,AppHeader
  },
  methods: {
    toRegisterSms() {
      let that = this;
      that.apiService.postRegisterSendSms(that.telPhone).then(res => {
        console.log(res);
        if (res.data.errno == 0) {
          localStorage.getItem("hash", res.data.data.hash);
          localStorage.getItem("tamp", res.data.data.tamp);
          setTimeout(() => {
            this.$router.push({
              name: "ordinary-reg-sms-page",
              params: {
                telPhone: that.telPhone
              }
            });
          }, 200);
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/varibles.scss";
.register-page {
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
    margin: 0 auto;
    margin-top: 50px;
  }
  .tag {
    margin-top: 22px;
  }
}
</style>
