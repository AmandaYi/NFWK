<template>
    
    <div class="cart-page">
        <order-header :title="title">
          <span>编辑</span>
        </order-header>
       <!-- 主题内容 -->
        <div class="content">
            <li class="order-item" :key="warpIndex" v-for="(warpItem,warpIndex) of cartList">
                    <div class="order-company clearfix">
                        <!-- <i class="iconfont icon-yuanxuanze" @click="selectItemAll($event,warpIndex)"></i> -->
                    
                        <input type="checkbox" class="iconfont icon-yuanxuanze">
                        <i class="iconfont icon-jiameng-1"></i>
                        <span class="company-name"> {{warpItem["gysName"]}}</span>
                        <i class="iconfont icon-jiantou"></i>
                    </div>
          <!-- :key="index2"  v-for="(item,index2) of warpItem["dataList"] -->
                    <ul class="order-detail">
                        <li class="list-detail clearfix" v-for="(item,index) of warpItem['dataList']"  :key="index">
                            <div class="select-icon"  @click="currentItem($event,index,warpItem['dataList'].length)" ref="currentItemParent">
                               <i class="iconfont icon-yuanxuanze"></i>                          
                            </div>
                            <div class="list-content clearfix">
                              <div class="left">
                                <img   class="img" alt="" :src="item.productUrl">
                              </div>
                              <div class="right">
                                <h2 class="title">{{item.productName}}</h2>
                                <p class="desc">{{item.summary}}<p>
                                <div class="price clearfix">
                                  <!-- 单价 -->
                                  <span class="unit">&yen;{{item.price}}</span>
                                  <!-- 数量 -->
                                  <span class="sum-num">{{item.amount}}亩</span>
                                  </div>
                              </div>
                            </div>
                        </li>            
                </ul>
            </li>
          
                <!-- <i class="iconfont icon-fanhui"></i> -->
        </div>
            <div class="order clearfix">
            <div class="left"><span class="iconfont"></span>全选&nbsp;合计： <span class="sum-price">&yen;100050.11</span></div>
            <div class="right" @click="payOrder()">去结算(10)</div>
        </div>
    </div>
</template>
<script>
import OrderHeader from "@/components/order-header/order-header";
import ApiService from "@/services/api-service/api-service";
// 变量
import { SERVICE_SHOP_IMAGES_URL } from "@/services/contants/contants";
export default {
  name: "car-page",
  data() {
    return {
      apiService: new ApiService(),

      title: "购物车",
      cartList: this.$store.state.cartList,

      // 小范围的选中和不选中,默认是选中的
      currentItemIndex: 0
    };
  },
  components: {
    OrderHeader
  },
  created() {
    this.getCart(1);
  },
  methods: {
    currentItem(e, index,itemLength) {
  //       return false;
  //     let that = this;
 
  //     // 获取点击的子元素
  //     let currentItem = that.$refs.currentItemParent[index].children[0];
  //     // 对子元素进行改变类名

  //     if (currentItem.className == "iconfont noselect") {
  //       currentItem.className = "iconfont icon-yuanxuanze";
  //     } else if (currentItem.className == "iconfont icon-yuanxuanze") {
  //       currentItem.className = "iconfont noselect";
  //     }
  //     let n = 0;
  //     for(let i = 0 ; i < itemLength ; i++){
  //         // 判断全部是否已经选中
  //         if(   that.$refs.currentItemParent[i].children[0].className == "iconfont icon-yuanxuanze"){
  //             // 对一个值进行加减
  //             n++;
  //         }
  //     }
  //     // 获取同一个服务商里面的标题元素
  //  let companyTitle =  that.$refs.currentItemParent[index].parentNode.parentNode.parentNode.firstChild   || that.$refs.currentItemParent[index].parentNode.parentNode.parentNode.firstElementChild  
  // //  获取同一个服务商里面的标题元素的子元素
  // let currentTitle =companyTitle.firstChild ||   companyTitle.firstElementChild  
  //     // 判断是否全部的都选中了
  //     if(n == itemLength){
  //       currentTitle.className ="iconfont icon-yuanxuanze" 
  //       console.log( currentTitle.className   )

  //     }else{
  //       currentTitle.className ="iconfont noselect" 
  //     }
  //     // console.log(that.$refs.currentItemParent[index].children[0].className);
  //     // 获取这个列表的长度
  //     console.log(itemLength);
    },
    // 点击一个服务商的全部服务
    selectItemAll(e,index){
        // return false;
      
        // let that = this;
        // // 获取点击的元素的
    },
    // 查询购物车
    getCart(userId) {
      this.apiService.getUserCart(userId).then(res => {
      
        let cart = res;
        for (let i = 0; i < cart.data.length; i++) {
          console.log(cart.data[i]);
          for (let j = 0; j < cart.data[i].dataList.length; j++) {
           
             cart.data[i].dataList[j].productUrl = SERVICE_SHOP_IMAGES_URL + cart.data[i].dataList[j].productUrl
           
          }
        }
        this.$store.commit("updateCartList", cart.data);
        // console.log("11111111111111111111111111111");
        console.log(cart);
        // console.log(this.$store.state.cartList);
      });
    },

    payOrder() {
      this.$router.push({
        name: "pay-order-page"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.cart-page {
  .content {
    .order-item {
      margin-top: 20px;
      // 公司的名字订单
      .order-company {
        padding-left: 28px;
        padding-right: 28px;
        box-sizing: border-box;
        padding-top: 22px;
        // position: relative;
        // background: #ff0;
        height: 78px;
        border: solid 1px rgba(238, 238, 238, 0.9);
        width: 100%;
        // line-height: 78px;
        .iconfont {
           float:left;   display: block;
              // box-sizing: border-box;          
          font-size: 30px;

        }
        .company-name {
           float:left;   display: block;
          margin-left: 8px;
          font-size: 30px;
        }
        .icon-yuanxuanze {
           float:left;   display: block;
          font-size: 36px;
          color: #ff6600;
        }

        .icon-jiameng-1 {
           float:left;   display: block;
          margin-left: 20px;
        }
        .icon-jiantou {
          margin-left: 10px;  
           float:left;   display: block;
        }
        .noselect{
          
                  float:left;
               display: block;
           
              width: 36px;
              border-radius: 50%;
              height: 36px;
              border: 1px solid #ccc;
              box-sizing: border-box;
              // background: #000;
        }
      }
      // 对应的订单的详情列表
      .order-detail {
        padding-left: 0;
        box-sizing: border-box;
        margin: 0 auto;
        .list-detail {
          border-bottom: solid 1px #cccccc;
          padding-top: 20px;
          box-sizing: border-box;

          // background: #ff0;
          padding-left: 28px;
          padding-right: 28px;
          padding-bottom: 30px;
          .select-icon {
            float: left;
            width: 6%;
            .icon-yuanxuanze {
              font-size: 36px;
              color: #ff6600;
            }
            .noselect {
              display: block;
              width: 36px;
              border-radius: 50%;
              height: 36px;
              border: 1px solid #ccc;
              box-sizing: border-box;
              // background: #000;
            }
          }
          .list-content {
            float: left;
            width: 94%;
            padding-left: 18px;
            box-sizing: border-box;
            .left {
              float: left;
              width: 24%;
              .img {
                width: 144px;
                height: 144px;
              }
            }
            .right {
              float: left;
              width: 74%;
              box-sizing: border-box;
              padding-left: 20px;
              .title {
                margin-top: 0;
                margin-bottom: 0;
                font-size: 30px;
                color: #323232;
                font-weight: 700;
              }
              .desc {
                margin-top: 0;
                margin-bottom: 0;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                font-size: 26px;

                color: #666666;
              }
              .price {
                margin-top: 26px;
                font-size: 30px;
                .unit {
                  color: #ff6600;
                  font-weight: 700;
                }
                .sum-num {
                  font-size: 30px;
                  color: #333333;
                  float: right;
                }
              }
            }
          }
        }
      }
    }
  }
  .order {
    padding-left: 28px;

    box-sizing: border-box;

    width: 100%;
    height: 100px;
    background-color: #ffffff;
    line-height: 100px;
    // background: #ff0;
    .left {
      float: left;

      .iconfont {
        width: 36px;
        height: 36px;
        float: left;
        margin-top: 34px;
        background-color: #ffffff;
        border: solid 1px #cccccc;
        border-radius: 50%;
        //  padding-left: 6px;
        margin-right: 10px;
      }
      .sum-price {
        color: #333333;
        font-size: 30px;
        font-weight: 500;
      }
    }

    .right {
      float: right;
      width: 210px;
      height: 100px;
      background-color: #ff6c00;

      font-size: 30px;

      color: #ffffff;
      text-align: center;
    }
  }
}
</style>

