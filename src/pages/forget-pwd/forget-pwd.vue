<template>
    <div class="forget-pwd-page">
      <div class="title-tab">
           <h2 class="title">输入手机号</h2>
      </div> 
 
   
       <div class="form-block">
            <p class="item">手机号
            <input class="ipt" type="text" placeholder="请输入您的手机号">
            </p>       
        </div>
     
       <push-btn class="btn" :text="btnText"></push-btn>
    </div>
</template>
<script>
import PushBtn from "../../common/push-btn/push-btn";
export default {
  name: "forget-pwd-page",
  data(){
   return{
      btnText:"下一步"
   }
  },
  components: {
    PushBtn
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/varibles.scss";
.forget-pwd-page {
  width: 92.2%;
  margin: 0 auto;
  .title-tab {
    color: $color32;
    text-align: left;
    .title {
      font-size: 44px;
    }
  }
  .desc {
    font-size: 30px;
    color: $color;
  }
  .form-block {
    position: relative;
    margin-top: 10px;
    .item {
      position: relative;
      height: 128px;
      line-height: 165px;
      background: $warpperbg;
      color: $color;
      margin: 0 auto;
      text-align: left;
      font-size: 30px;
      border-bottom: 1px solid $huicc;

      .ipt {
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
  .btn{
      margin-top: 60px;
  }
}
</style>
