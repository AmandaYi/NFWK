<template>
    <div class="sms-page">
      <div class="title-tab">
           <h2 class="title">新用户注册</h2>
        <p class="desc">验证码已发送至手机：<span class="telphone">{{telPhone}}</span></p>
          </div> 
          <p class="form-block">
              <input class="ipt" type="number" maxlength="4" @blur="sendSmsCode()">
          </p>
          <push-btn class="btn" :text="btnText" @click="resumeSms()"></push-btn>
       
    </div>
</template>
<script>
import PushBtn from "../../common/push-btn/push-btn";
import ApiService from "@/services/api-service/api-service";
export default {
  name: "ordinary-reg-sms-page",
  data() {
    return {
      apiService: new ApiService(),
      secondComplete: false,
      btnText: "60秒重发",
      telPhone: "1"
    };
  },
  components: {
    PushBtn
  },
  created() {
    this.telPhone = this.$route.params.telPhone;
    console.log(this.$route);
    console.log(this.telPhone);
    // debugger
    this.secondChange();
  },
  methods: {
    // 一秒改变一次
    secondChange() {
      let that = this;
      // that.btnText
      let i = 4;
      let timer = setInterval(() => {
        that.btnText = `${i}秒重发`;
        i--;
        if (i == 0) {
          clearInterval(timer);
          that.btnText = `重新发送验证码`;
          // that.secondComplete = true;
        }
      }, 1000);
    },
    // 重新发送验证码
    resumeSms() {
      let that = this;
      // if (that.secondComplete == true) {
      //   return false;
      // }
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
    },
    // 判断验证码
    sendSmsCode(){
      let that = this; 
      if(that.$refs.ipt.values.length == 4){
        that.apiService.postRegisterSendSms()
        
      }
    }
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
      .telphone {
        color: #00af00;
      }
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
