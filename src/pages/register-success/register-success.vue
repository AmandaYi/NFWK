<template>
    <div class="reg-success-page">
      <div class="title-tab">
           <h2 class="title"><i class="icon-btn-success iconfont"></i> 注册成功！</h2>
      </div> 
      <p class="desc">完善账户信息</p>
   
       <div class="form-block">
            <p class="item">昵称<span class="desc-text">设置账户昵称</span>
            <input class="ipt" type="text" placeholder="">
            </p>
              <p class="item">密码
                 <span class="desc-text">设置登录密码（长度至少6位）</span> 
                  <input id="password" class="ipt" type="text" > 
            </p>
        </div>
     
       <push-btn class="btn" :text="btnText"></push-btn>
    </div>
</template>
<script>
import PushBtn from "../../common/push-btn/push-btn";
export default {
  name: "reg-success-page",
data(){
   return{
        btnText:"确定"
   }
},
  components: {
    PushBtn
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/varibles.scss";
.reg-success-page {
  width: 92.2%;
  margin: 0 auto;
  .title-tab {
    color: $color32;
    text-align: center;
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
      .desc-text{
          position: absolute;
          top: 0;
          left: 100px;
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
