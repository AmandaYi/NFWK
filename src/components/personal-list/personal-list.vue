<template>
    <div class="personal-list"  @click="hideModal($event)">
        <div class="content">
            <div class="avatar" @click="userController()">
                    <img class="img" alt="">
                    <div class="phone">15839521352</div>
            </div>
            <ul class="nav">
                <li class="item"> <i class="iconfont icon-gouwuche" @click="pushCart()"></i> 购物车</li>
                <li class="item"> <i class="iconfont icon-wancheng"></i>我的订单</li>
                <li class="item"> <i class="iconfont icon-qianbao"></i>我的钱包</li>
                <li class="item"> <i class="iconfont icon-shezhi"></i>设置</li>
            </ul> 
            <div class="apply">
            <li class="item">
               <i class="iconfont icon-hezuo"></i> 服务商入住
            </li>
        </div>
        </div>
            <!-- <div class="modal" ></div> -->
    </div>
</template>

<script>
export default {
  name: "personal-list",
  methods:{
      hideModal(){
          this.$emit("hideLeftList")
      },
    //   用户中心
    userController(){
        // 对登录进行判断
        // 判断token的值,如果找不到token的值, 直接弹出登录窗,否则不弹出登录窗
        alert("判断token的值,如果找不到token的值, 直接弹出登录窗,否则不弹出登录窗");
    }

  }

};
</script>
<style lang="scss" scoped>
.personal-list {
  height: 100%;
  width: 100%;
  background: #ff0;
background-color:  rgba(102, 102, 102, 0.5);
  .content {
      width: 440px;
      height: 100%;
      background: #ffffff;
    .avatar {
        text-align: center;
            padding-top: 90px;
      .img {
      
        border-radius: 50%;
        width: 110px;
        height: 110px;
        background-color: #cccccc;
      }
      .phone {
          margin-top: 20px;
        font-size: 30px;

        letter-spacing: 0px;
        color: #333333;
      }
    }

    .nav{
        margin-top: 120px;
        padding-left: 0;
        .item{
            padding-left: 50px;font-size: 30px;	color: #505050;
            height: 80px;
            line-height: 80px;
            .iconfont{
                font-size: 32px;
                margin-right: 26px;
            }
        }
    }
    .apply{
        position: absolute;
        bottom: 110px;

        .item{
            	font-size: 30px;
  padding-left: 50px;font-size: 30px;
	color: #505050;
            .iconfont{
    font-size: 32px;
                margin-right: 26px;
            }
        }
    }


  }
//   .modal{
//         height: 100%;
//   width:41%;
  
//   background: #ff0;
// // background-color:  rgba(102, 102, 102, 0.5);
//   }
}
</style>
