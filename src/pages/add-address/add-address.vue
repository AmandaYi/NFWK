<template>
    <div class="add-address">
        <div class="order-header">
            <order-header :title="title">

            </order-header>
        </div>
        <div class="form-block">
            <label class="label" for="username">
                <span class="text">联系人</span>
                <input class="ipt" type="text" id="username"  placeholder="请输入" >     
            </label>
            <label class="label" for="phone">
                <span class="text">联系电话</span>
                <input class="ipt" type="text" id="phone"  placeholder="请输入" >     
            </label>
            <label class="label" for="area">
                <span class="text">服务地址</span>
                <input class="ipt" type="text" id="area"  placeholder="请选择" >     
            </label>
            <label class="label" for="addDetail">
                <span class="text">详细地址</span>
                <input class="ipt" type="text" id="addDetail"  placeholder="请输入详细地址信息" >     
            </label>
            <!-- <p class="item">联系人<input type="text" placeholder="请输入" class="ipt"></p>
            <p class="item">联系电话<input type="text" placeholder="请输入" class="ipt"></p>
            <p class="item">服务地址<input type="text" placeholder="请选择 >" class="ipt"></p>
            <p class="item">详细地址<input placeholder="请输入详细地址信息" type="text" class="ipt"></p> -->
         
        </div>
        <div class="default">
            <span class="title">设置默认地址</span>
                    <div v-bind:class="{'toggle-btn':true,'clearfix':true,'current-btn':circleBtn == true}" @click="toggleDetail()">
                        <div v-bind:class="{'circle':true,'current':circleBtn == true}"></div>
                    </div>
        </div>
        <div class="save-btn">保存</div>
    </div>
</template>
<script>
import OrderHeader from "@/components/order-header/order-header";
export default {
  name: "add-address-page",
  data() {
    return {
      title: "新增服务地址",
      circleBtn:false
    };
  },
  methods:{
      toggleDetail(){
        
this.circleBtn = !this.circleBtn
 
      }
  },
  components: {
    OrderHeader
  }
};
</script>
<style lang="scss" scoped>
.add-address {
  .form-block {
    width: 100%;

    background-color: #ffffff;
    box-sizing: border-box;
    padding-left: 28px;
    padding-right: 28px;
    .label {
      display: block;
      position: relative;
      height: 88px;
      line-height: 88px;
      width: 100%;
      .text {
        position: absolute;

        font-size: 32px;

        color: #333333;
      }
      .ipt {
        text-align: right;
        display: block;
        // background: #ff0;
        width: 100%;
        height: 88px;
        line-height: 88px;
        padding-left: 50%;
        padding-right: 6px;
        box-sizing: border-box;
        font-size: 32px;

        color: #999999;
      }
    }

    // .item{

    // // 	width: 100%;
    // // 	height: 88px;
    // //         padding-left: 28px;
    // //     padding-right: 28px;
    // // margin-top: 0;
    // // margin-bottom: 0;
    // //     box-sizing: border-box;
    // // 	background-color: #ffffff;
    // // 	border: solid 1px rgba(238, 238, 238, 0.9);
    // //     line-height: 88px;

    // // 	font-size: 32px;

    // // 	color: #333333;

    // }
  }
  .default {
      margin-top: 22px;
    padding-left: 28px;
    box-sizing: border-box;
    width: 100%;
    height: 88px;
    line-height: 88px;
    background-color: #ffffff;
    border: solid 1px rgba(238, 238, 238, 0.9);
    font-size: 32px;
    color: #333333;
    .toggle-btn {
      float: right;
      margin-top: 10px;
      margin-right: 28px;
      width: 118px;
      height: 66px;
      background-color: #ffffff;
      border-radius: 33px;
      border: solid 1px rgba(204, 204, 204, 0.9);
      .circle {
        width: 66px;
        height: 66px;
        background-color: #ffffff;
        box-shadow: 0px 4px 8px 0px rgba(4, 0, 0, 0.3);
        border-radius: 50%;
 
      }
      .current{
         float: right;
        background-color: #ff6c00;
         
      }
    }
    .current-btn{
        background-color: #ffffff;
        
    }
  }

  .save-btn {

    width: 92.2%;
    margin: 0 auto;
    margin-top: 80px;
    height: 80px;
    line-height: 80px;
    font-size: 30px;
    background-color: #ff6c00;
    border-radius: 40px;
    color: #ffffff;
    text-align: center;
  }
}
</style>

