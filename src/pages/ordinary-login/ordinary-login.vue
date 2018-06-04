 <template>
    <div class="login-page">
    <back-header></back-header>
        <div class="title clearfix">
            <li  v-bind:class="{ item: true, 'current': toggleTab==true }"  v-on:click="toggleWay(0)">账号密码登录</li>
            <li v-bind:class="{ item: true, 'tel-login':true,'current': toggleTab==false }"  v-on:click="toggleWay(1)">手机号快捷登录</li>
        </div>
        <div class="form-block" v-if="toggleTab==true">
            <p class="item">账号<input v-model="username"  class="ipt" type="text" placeholder="手机号/用户名">
            </p>
              <p class="item">密码<input v-model="password" class="ipt" type="text" placeholder="请输入密码">
            </p>
        </div>
         <div class="form-block"  v-if="toggleTab==false">
             <p class="item">手机号<input v-model="telPhone"  class="ipt" type="text" placeholder="请输入手机号">
         
            </p>
              <p class="item">验证码<input v-model="smsCode"  class="ipt" type="text" placeholder="请输入收到的验证码">
            </p>
            <div class="send-sms" @click="sendSms">发送验证码</div>
        </div>
        <div  @click="send()" >
        <push-btn class="btn" :text="btnText"></push-btn>    </div>
        <div class="tag clearfix">
            <li class="item register" @click="toRegister()">新用户注册</li>
            <li class="item forget">忘记密码？</li>
        </div>

        <!-- <loading  v-show="isLoading"></loading> -->
    </div>
</template>
<script>
import PushBtn from "@/common/push-btn/push-btn";
// 加载窗
import Loading from "@/common/loading/loading";
// 头部返回条
import BackHeader from "@/components/back-header/back-header";
import ApiService from "@/services/api-service/api-service";
// import AppHeader from "@/components/app-header/app-header";
// import HttpService from "@/services/http-service/http-service.js";
// import axios from "axios";
// import { SERVICE_URL } from "@/services/constants/constants.js";
export default {
  name: "ordinary-login-page",
  data() {
    return {
      isLoading: false,
      apiService: new ApiService(),
      toggleTab: true,
      btnText: "登录",
      username: "",
      password: "",
      telPhone: "",
      smsCode: ""
    };
  },
  computed: {
    usernameNew: () => {
      console.log(this.username);
      return this.username;
    }
  },
  methods: {
    toggleWay(tab) {
      if (tab == 0) {
        this.toggleTab = true;
      } else if (tab == 1) {
        this.toggleTab = false;
      }
    },
    // 发送验证码
    sendSms() {
      let that = this;
      that.apiService.postSendLoginSms(that.telPhone).then(res => {
        console.log(res);

        localStorage.setItem("tamp", res.data.data.tamp);
        localStorage.setItem("hash", res.data.data.hash);
      });
    },
    // 进行登录
    send() {
      // debugger;
      let ways = this.toggleTab;
      let that = this;
      switch (ways) {
        case true:
          let username = this.username;
          let password = this.password;
          //  发送请求
        console.log(1)
          that.apiService
            .postLogin(username, password)
            .then(response => {
              console.log(response);
            })
            .catch(error => {
              console.log(error);
            });

          break;
        // 登录方式2 验证码登录
        case false:
          that.apiService
            .postSmsLogin(
              that.telPhone,
              that.smsCode,
              localStorage.getItem("tamp"),
              localStorage.getItem("hash")
            )
            .then(r => {
              console.log(r);
            });
          break;
      }
    },
    toRegister() {
      this.$router.push({ name: "ordinary-register-page" });
    }
  },
  components: {
    PushBtn,Loading,BackHeader
    // AppHeader
  }
};
</script>

<style lang="scss" scoped>
// @import "@/assets/scss/varibles.scss";
.login-page {
  width: 92.2%;
  margin: 0 auto;
  .title {
    height: 90px;
    line-height: 90px;
    background: #ffffff;
    font-size: 32px;
    font-weight: normal;
    font-stretch: normal;

    letter-spacing: 0px;

    .item {
      float: left;
    }
    .tel-login {
      color: #333333;
      margin-left: 40px;
    }
    .current {
      color: #00af00;
      border-bottom: 4px #00af00 solid;
    }
  }
  .form-block {
    position: relative;
    margin-top: 10px;
    .item {
      height: 128px;
      //   width: 100%;
      line-height: 165px;
      background: #ffffff;
      color: #333333;
      margin: 0 auto;

      // background: #ff0;
      text-align: left;
      font-size: 30px;
      //    padding-bottom: 30px;
      border-bottom: 1px solid #cccccc;

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
      color: #00af00;
    }
    .forget {
      float: right;
      font-weight: normal;
      font-stretch: normal;

      letter-spacing: 0px;
      color: #666666;
    }
  }
}
</style>
