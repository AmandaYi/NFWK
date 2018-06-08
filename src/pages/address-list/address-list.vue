<template>
    <div class="address-list-page">
        <div class="order-header">
            <order-header :title="title">

            </order-header>
        </div>



        <ul class="address-block">
            <li class="address-content">
                        <!-- 收货人 -->
            <div class="consignee">
                <p class="item user-info"><span class="name">强美静</span><span class="phone">156****2561</span></p>

                <p class="item address-detail"  ><i class="iconfont icon-zuobiao"></i>河南省郑州市金水区 花园路纬五路<i class="iconfont icon-jiantou"></i></p>
                <!-- <p class="item time"><i class="iconfont icon-shijian-tianchong"></i> 作业时间:2018-6-5</p> -->
            </div>
            <div class="default-nav clearfix">     <i class="iconfont icon-yuanxuanze"></i>设为默认
                <div class="right-nav">
                    <span class="edit-address">编辑</span>
                    <span class="delete-address">删除</span>
                </div>
            </div>
            </li>

            <li class="address-content">
                        <!-- 收货人 -->
            <div class="consignee">
                <p class="item user-info"><span class="name">强美静</span><span class="phone">156****2561</span></p>

                <p class="item address-detail"  ><i class="iconfont icon-zuobiao"></i>河南省郑州市金水区 花园路纬五路<i class="iconfont icon-jiantou"></i></p>
                <!-- <p class="item time"><i class="iconfont icon-shijian-tianchong"></i> 作业时间:2018-6-5</p> -->
            </div>
                <div class="default-nav clearfix">     <i class="iconfont icon-yuanxuanze"></i>设为默认
                <div class="right-nav">
                    <span class="edit-address">编辑</span>
                    <span class="delete-address">删除</span>
                </div>
            </div>
            </li>

             <li class="address-content">
                        <!-- 收货人 -->
            <div class="consignee">
                <p class="item user-info"><span class="name">强美静</span><span class="phone">156****2561</span></p>

                <p class="item address-detail"  ><i class="iconfont icon-zuobiao"></i>河南省郑州市金水区 花园路纬五路<i class="iconfont icon-jiantou"></i></p>
                <!-- <p class="item time"><i class="iconfont icon-shijian-tianchong"></i> 作业时间:2018-6-5</p> -->
            </div>
                <div class="default-nav clearfix">     <i class="iconfont icon-yuanxuanze"></i>设为默认
                <div class="right-nav">
                    <span class="edit-address">编辑</span>
                    <span class="delete-address">删除</span>
                </div>
            </div>
            </li>
        </ul>
       
        <div class="save-btn" @click="address()">新增服务地址</div>
    </div>
</template>
<script>
import OrderHeader from "@/components/order-header/order-header";
export default {
  name: "address-list-page",
  data() {
    return {
      title: "选择服务地址"
    };
  },
  methods: {
      address(){
          this.$router.push({
              name:"add-address-page"
          })
      }
  },
  components: {
    OrderHeader
  }
};
</script>
<style lang="scss" scoped>
.address-list-page {
  .address-block {
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
    .address-content {
      margin-bottom: 20px;
      background: #ffffff;
      .consignee {
        padding-top: 26px;
        padding-bottom: 26px;
        box-sizing: border-box;
        border-top: 2px solid #cccccc;

        .item {
          margin-top: 0;
          margin-bottom: 0;
          font-size: 28px;
          font-size: 28px;
          color: #666666;
          box-sizing: border-box;
          margin-top: 26px;
        }
        .iconfont {
          margin-right: 6px;
          font-size: 28px;
        }
        .user-info {
          font-size: 30px;
          color: #333333;
          font-weight: 700;
          padding-left: 70px;
        }
        .address-detail {
          padding-left: 28px;
        }
        .time {
          padding-left: 28px;
          .iconfont {
            font-size: 24px;
            margin-left: 2px;
            margin-right: 6px;
          }
        }
      }
      .default-nav {
        width: 100%;
        line-height: 80px;
        height: 80px;
        padding-left: 28px;
        padding-right: 28px;
        font-size: 28px;
        box-sizing: border-box;
        color: #333333;
        .icon-yuanxuanze {
          font-size: 36px;
          color: #ff6600;
          margin-right: 18px;
        }
        .right-nav {
          float: right;
          font-size: 28px;
          font-weight: 700;
          color: #333333;
          .delete-address {
            margin-left: 36px;
          }
        }
      }
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

