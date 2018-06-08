<template>
      <keep-alive>  <div class="project-detail">
        <order-header :title="title">
          <i class="iconfont"></i>
        </order-header>
        <div class="banenr">
            <img src="@/assets/imgs/project-detail.png" alt="" class="img">
        </div>
        <div class="content">
            <div class="project-title">
                 <h2 class="text-title">{{subscribeCat.productName}}</h2>
                <p class="price clearfix"> <span class="red">&yen;{{subscribeCat.productPrice}}/次</span><span class="done">已售{{subscribeCat.saleAmount}}</span></p>

            </div>
        <div class="select">
            <!-- <p class="item">
                服务地点
                <input type="text" class="ipt" placeholder="请填写"  v-model="serviceArea">
            </p>
             <p class="item">
                 服务时间
                <input type="text" class="ipt" placeholder="请填写" v-model="serviceTime">
            </p> -->
             <p class="item">
                 服务面积(亩)
                <input type="number" class="ipt" placeholder="请填写" v-model="num" max="10000">
            </p>
        </div>
        
            <div class="project-desc" v-html="productDesc">
             
            </div>

        <div class="company-about">
            <h2 class="item">此服务由 <span class="ren">{{companyDetail.companyName}}</span> 提供</h2>
        </div>

        <!-- 点评 -->
        <div class="comment">
               <div class="comment-title clearfix"><span class="text">用户点评</span> <span class="more">{{comments.size}}条评论</span></div>
              <comment :comments="comments.data"></comment>   
        </div>


            <!-- 订购须知 -->
            <div class="important-about">
                    <div class="important-title"><h2 class="text">订购须知</h2></div>
 
                        <ul class="important-desc">
                            <li class="desc-list">
                                1.商家将在您下单后30分钟内确认是否接单；
                            </li>
                                <li class="desc-list">
                                2.订单确认后，修改订单或退款需提前2小时通知；         
                            </li>
                                <li class="desc-list">
                                 3.如商家接单后爽约将全额退款并向您全额退款；
                            </li>
                                <li class="desc-list">
                                  4.为保障您的权益，所有费用请通过呱呱农服平台支付
                            </li>
                        </ul>
            </div>


      </div>
      <div class="order clearfix">
     <div class="left">小计: &nbsp; &yen;{{sumPrice}}</div>
            <div class="right clearfix">
                <div class="apply-cart" @click="pushCart()">加入购物车</div>
                <div class="apply-pay" @click="pay()">立即下单</div>
            </div>
      </div>
        <!-- <div class="order clearfix">
            <div class="left">共<span class="sum-num">5</span>件，合计： <span class="sum-price">&yen;100050.11</span></div>
            <div class="right">提交订单</div>
        </div> -->
        </div>
    
        
        </keep-alive>
</template>
<script>
import Comment from "@/components/comment/comment";
import OrderHeader from "@/components/order-header/order-header";
import ApiService from "@/services/api-service/api-service";
export default {
  name: "project-detail-page",
  data() {
    return {
      apiService: new ApiService(),
      title: "服务详情",
      // 服务类别
      subscribeCat: this.$store.state.subscribeCat,

      // 公司
      companyDetail: this.$store.state.marker,

      // 产品描述
      productDesc: null,
      // 评论
      comments: {},

      // 双向绑定的model
      serviceArea: null,
      serviceTime: null,
      // 多少亩地
      num: null
    };
  },
  components: {
    Comment,
    OrderHeader
  },
  // 计算属性
  computed: {
    sumPrice() {
      return (this.subscribeCat.productPrice * this.num).toFixed(2);
    }
  },
  created() {
    // localStorage.setItem("gysDetailId", this.$store.state.gysDetail.id);
    this.getProjectDetail();
    console.log(this.subscribeCat);
    console.log(this.companyDetail);
  },
  methods: {
    // 获取这个页面的服务内容和评论
    getProjectDetail() {
      let that = this;
      that.apiService.getProduct(that.subscribeCat.id).then(res => {
        console.log(res);
        // 把公司的描述拿出来放到 this.companyDetail里面
        that.productDesc = res.data.productDesc;
        // 评论的数量
        that.comments.size = res.data.commentSize;
        // 评论的内容
        // 对评论的内容进行处理手机号码
        for (let i = 0; i < res.data.comments.length; i++) {
          res.data.comments[i].user.username = res.data.comments[
            i
          ].user.username.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
        }
        that.comments.data = res.data.comments;
      });

      // this.apiService.getProduct(1).then(res => {
      //   if (res.errno == 200) {
      //     console.log(res.data);
      //     that.projectDetail = res.data;

      //     //  获取公司名字
      //     that.companyName = res.data.gysName;
      //     // debugger;
      //     // 获取评论的数量
      //     that.commentSize = res.data.commentSize;
      //     // 获取全部的评论
      //     let tmp = res.data.comments;

      //     for (let i = 0; i < tmp.length; i++) {
      //       console.log(tmp[i]);
      //       tmp[i].user.username = tmp[i].user.username.replace(
      //         /(\d{3})\d{4}(\d{4})/,
      //         "$1****$2"
      //       );
      //     }
      //     console.log(tmp);
      //     that.comments = tmp;
      //   }
      // });
    },
    pushCart() {
      console.log(this.$store.state.subscribeCat.id);
      if (this.num == "" || this.num == null || this.num == undefined) {
        alert("请输入亩数");
        return false;
      }
      // 发送一个ajax请求用来把购物车的数据保存
      this.apiService
        .postAddCart(1, this.$store.state.subscribeCat.id, this.num)
        .then(res => {
          console.log(res);
          if (res.data.errno == 0 && res.data.errmsg == "成功") {
            console.log(2);
            this.$router.push({
              name: "cart-page"
            });
          }
        });
      // this.apiService
      //   .postAddCart(
      //     // 1,
      //     // this.$store.state.gysDetail.id,
      //     // this.serviceArea,
      //     // this.serviceTime,
      //     // this.sumNum
      //   )
      //   .then(res => {
      //     console.log(res);
      //   });
    },

    pay() {
      this.$router.push({
        name: "pay-order-page"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.project-detail {
  margin: 0 auto;
  .banenr {
    width: 100%;
    height: 377px;
    background-color: #ded235;

    .img {
      width: 100%;
      height: 377px;
      background-color: #ded235;
    }
  }
  .content {
    box-sizing: border-box;

    margin: 0 auto;

    .project-title {
      padding-right: 28px;
      padding-left: 28px;
      padding-bottom: 34px;
      width: 100%;
      height: 160px;
      background-color: #ffffff;
      border: solid 1px rgba(238, 238, 238, 0.9);
      box-sizing: border-box;
      .text-title {
        margin-top: 30px;
        margin-bottom: 0;

        font-size: 32px;

        color: #323232;
      }
      .price {
        margin-top: 30px;
        margin-bottom: 0;

        font-size: 28px;
        .red {
          color: #ff6600;
          font-weight: 700;
        }
        .done {
          float: right;

          font-size: 28px;

          color: #999999;
        }
      }
    }
    .select {
      margin-top: 20px;
      width: 100%;
      //   height: 88px;
      background-color: #ffffff;
      .item {
        box-sizing: border-box;
        padding-left: 28px;
        padding-right: 28px;
        width: 100%;
        height: 88px;
        background-color: #ffffff;
        margin-top: 0;
        margin-bottom: 0;
        line-height: 88px;
        font-size: 30px;

        color: #333333;
        .ipt {
          float: right;
          //   background: #ff0;
          width: 50%;
          margin-top: 30px;
          font-size: 28px;
          color: #999999;
          text-align: right;
          &::placeholder {
          }
        }
      }
    }

    .project-desc {
      margin-top: 20px;
      padding-top: 34px;
      box-sizing: border-box;
      padding-left: 28px;
      padding-right: 28px;
      color: #333333;
      font-size: 28px;
      // background: #000;
      div {
        // background: #000;
        // margin-top: 20px;
        // margin-bottom: 0;
        // line-height: 40px;
      }
    }

    .company-about {
      height: 88px;
      background-color: #ffffff;

      box-sizing: border-box;
      padding-left: 28px;
      padding-right: 28px;
      .item {
        font-size: 30px;

        color: #333333;
        margin-top: 0;
        margin-bottom: 0;
        line-height: 88px;
        .ren {
          color: #ff6600;
        }
      }
    }

    .comment {
      .comment-title {
        box-sizing: border-box;
        padding-left: 28px;
        padding-right: 28px;
        .text {
          margin-top: 0;
          margin-bottom: 0;
          font-size: 30px;
          font-weight: 700;
          color: #333333;
        }
        .more {
          font-size: 26px;
          color: #666666;
          float: right;
        }
      }
      margin-top: 20px;
    }
    .important-about {
      margin-top: 22px;
      box-sizing: border-box;
      padding-left: 28px;
      padding-right: 28px;
      .important-title {
        font-size: 30px;
        color: #333333;
        line-height: 88px;
        line-height: 88px;

        .text {
          margin-top: 0;
          margin-bottom: 0;
          font-size: 30px;
          font-weight: 700;
        }
      }
      .important-desc {
        padding-left: 0;
        padding-right: 0;
        .desc-list {
          font-size: 28px;
          color: #333333;
          font-stretch: normal;
          line-height: 50px;
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
    font-size: 28px;
    .left {
      float: left;
      font-size: 28px;
    }

    .right {
      float: right;
      width: 210px;

      font-size: 30px;

      color: #ffffff;
      text-align: center;
      width: 370px;
      .apply-cart {
        float: left;
        margin-top: 10px;
        width: 50%;
        height: 80px;
        line-height: 80px;
        background-color: #00af00;
        border-radius: 37px 0px 0px 37px;
      }
      .apply-pay {
        margin-top: 10px;
        float: left;
        width: 50%;
        height: 80px;
        line-height: 80px;
        background-color: #ff6c00;
        border-radius: 0px 37px 37px 0px;
      }
    }
  }
  //   .order {
  //     padding-left: 28px;

  //     box-sizing: border-box;

  //     width: 100%;
  //     height: 100px;
  //     background-color: #ffffff;
  //     line-height: 100px;
  //     background: #ff0;
  //     .left {
  //       float: left;
  //       	font-size: 28px;
  //       .sum-num {
  //           margin-left: 6px;
  //           margin-right: 6px;
  //       }
  //       .sum-price {	color: #ff6600;
  //       font-weight: 700;
  //       }
  //     }

  //     .right {
  //       float: right;
  // 	width: 210px;
  // 	height: 100px;
  // 	background-color: #ff6c00;

  // 	font-size: 30px;

  // 	color: #ffffff;
  //     text-align: center;
  //     }
  //   }
}
</style>
