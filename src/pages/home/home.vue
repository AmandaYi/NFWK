<template>
    <div class="home-page">
        <div class="home-list">
            <li class="item" @click="toHomeDetail(0)">
                <i class="iconfont"></i>
                <p class="name">农机服务</p>
            </li>
            <li class="item" @click="toHomeDetail(1)">
                <i class="iconfont"></i>
                <p class="name">农机服务</p>
            </li>
            <li class="item" @click="toHomeDetail(2)">
                <i class="iconfont"></i>
                <p class="name">农机服务</p>
            </li>
            <li class="item" @click="toHomeDetail(3)">
                <i class="iconfont"></i>
                <p class="name">农机服务</p>
            </li>
            <li class="item" @click="toHomeDetail(4)">
                <i class="iconfont"></i>
                <p class="name">农机服务</p>
            </li>
            <li class="item" @click="toHomeDetail(5)">
                <i class="iconfont"></i>
                <p class="name">农机服务</p>
            </li>
            <li class="item" @click="toHomeDetail(6)">
                <i class="iconfont"></i>
                <p class="name">农机服务</p>
            </li>
            <li class="item" @click="toHomeDetail(7)">
                <i class="iconfont"></i>
                <p class="name">农机服务</p>
            </li>

        </div>
        <div class="home-banner">
            <img class="banner-img" alt="">
        </div>
           
        <div class="product-itme">
            <!-- <subnav-title :text="title0" :link="link0"></subnav-title> -->
            <div class="subnav-title clearfix">
                <div class="title">农资活动</div>
                <div class="more" v-on:click="more(1111)">查看更多></div>
            </div>
            <div class="farm-show">
                  <div class="top clearfix">
                    <div class="shop-b">
                        <img class="img" src="@/assets/imgs/farm-show0.png" alt="">
                        <h2 class="desc">调理土壤 提高肥效</h2>
                    </div>
                    <div class="shop-t">
                    <h2 class="title">颗粒控释肥</h2>
                    <p class="desc">智能供养</p>
                    <img class="img" alt="" src="@/assets/imgs/farm-show1.png">
                    </div>
                 </div>
                 <div class="bottom">
                     <li class="item clearfix">
                         <div class="item-b">
                                <h2 class="title">颗粒控释肥</h2>
                                <p class="desc">智能供养</p>
                                <p class="price">¥140.00</p>
                         </div>
                         <div class="item-t">
                             <img class="img" alt="" src="@/assets/imgs/farm-item0.png">
                         </div>
                     
                     </li>
                           <li class="item clearfix">
                         <div class="item-b">
                                <h2 class="title">颗粒控释肥</h2>
                                <p class="desc">智能供养</p>
                                <p class="price">¥140.00</p>
                         </div>
                         <div class="item-t">
                             <img class="img" alt="" src="@/assets/imgs/farm-item1.png">
                         </div>
                     
                     </li>
                           <li class="item clearfix">
                         <div class="item-b">
                                <h2 class="title">颗粒控释肥</h2>
                                <p class="desc">智能供养</p>
                                <p class="price">¥140.00</p>
                         </div>
                         <div class="item-t">
                             <img class="img" alt="" src="@/assets/imgs/farm-item2.png">
                         </div>
                     
                     </li>
                           <li class="item clearfix">
                         <div class="item-b">
                                <h2 class="title">颗粒控释肥</h2>
                                <p class="desc">智能供养</p>
                                <p class="price">¥140.00</p>
                         </div>
                         <div class="item-t">
                             <img class="img" alt="" src="@/assets/imgs/farm-item3.png">
                         </div>
                     
                     </li>
                 </div>
            </div>
 
        </div>








         
        <div class="product-itme">
            <!-- <subnav-title :text="title0" :link="link0"></subnav-title> -->
            <div class="subnav-title shop-good-title clearfix">
                <div class="title">优质服务商</div>
                <div class="more">查看更多></div>
            </div>
        <shop-list class="shop-good"></shop-list>

        </div>
        <div class="product-itme">
            <!-- <subnav-title :text="title0" :link="link0"></subnav-title> -->
            <div class="subnav-title farm-list-title clearfix">
                <div class="title">农特产推荐</div>
                <div class="more">查看更多></div>
            </div>
            <!-- 农产品 -->
            <div class="farm-list">
                <div class="item">
                        <div class="img">
                            <img alt="" class="img-detail" src="@/assets/imgs/farm_list0.png">
                            <div class="badge">新密</div>                           
                         </div>
                        <h2 class="title">米脂小米</h2>
                        <div class="price"><span class="now">¥26</span><span class="drop">¥39</span></div>
                </div>
                   <div class="item">
                        <div class="img">
                            <img alt="" class="img-detail" src="@/assets/imgs/farm_list1.png">
                            <div class="badge">西峡</div>                           
                         </div>
                        <h2 class="title">源于大山的纯朴</h2>
                        <div class="price"><span class="now">¥75</span><span class="drop">¥39</span></div>
                </div>
                   <div class="item">
                        <div class="img"> 
                            <img alt="" class="img-detail" src="@/assets/imgs/farm_list2.png">
                            <div class="badge">灵宝</div>                           
                         </div>
                        <h2 class="title">当季鲜甜</h2>
                        <div class="price"><span class="now">¥26</span><span class="drop">¥39</span></div>
                </div>   <div class="item">
                        <div class="img">
                            <img alt="" class="img-detail" src="@/assets/imgs/farm_list3.png">
                            <div class="badge">新密</div>                           
                         </div>
                        <h2 class="title">麻辣猪蹄</h2>
                        <div class="price"><span class="now">¥26</span><span class="drop">¥39</span></div>
                </div>  
                 <div class="item">
                        <div class="img">
                            <img alt="" class="img-detail" src="@/assets/imgs/farm_list4.png">
                            <div class="badge">西峡</div>                           
                         </div>
                        <h2 class="title">莆田大桂圆</h2>
                        <div class="price"><span class="now">¥26</span><span class="drop">¥39</span></div>
                </div>  
                 <div class="item">
                        <div class="img">
                            <img alt="" class="img-detail" src="@/assets/imgs/farm_list5.png">
                            <div class="badge">灵宝</div>                           
                         </div>
                        <h2 class="title">临安山核桃仁</h2>
                        <div class="price"><span class="now">¥26</span><span class="drop">¥39</span></div>
                </div>
            </div>
        </div>
        <div class="product-itme">
            <!-- <subnav-title :text="title0" :link="link0"></subnav-title> -->
            <div class="subnav-title news-list-title clearfix">
                <div class="title">精选活动</div>
                <div class="more">查看更多></div>
            </div>
           
            <div class="news-list">
                <li class="item">
                     <div class="title">
                        全店特惠！好礼不停！折扣不停！特别添加能量1号水溶性好
                    </div>
                    <div class="img-block">
                        <img class="img" alt="" src="@/assets/imgs/shop0.png">
                    </div>
                  
                </li>
                <li class="item">
                     <div class="title">
                        全店特惠！好礼不停！折扣不停！特别添加能量1号水溶性好
                    </div>
                    <div class="img-block">
                        <img class="img" alt="" src="@/assets/imgs/shop1.png">
                    </div>
                  
                </li>
                <li class="item">
                     <div class="title">
                        全店特惠！好礼不停！折扣不停！特别添加能量1号水溶性好
                    </div>
                    <div class="img-block">
                        <img class="img" alt="" src="@/assets/imgs/shop2.png">
                    </div>
                  
                </li>
            </div>
        </div>
          <!-- <div class="product-itme">
            <subnav-title :text="title0" :link="baidu.com"></subnav-title>
        </div>
          <div class="product-itme">
            <subnav-title :text="title0" :link="baidu.com"></subnav-title>
        </div> -->
    </div>
</template>

<script>
// import SubnavTitle from "../../common/subnav-title/subnav-title";

import ShopList from "../../common/shop-list/shop-list";
export default {
  name: "home-page",
  data() {
    return {
      title0: "服务商入住",
      title1: "农特产推荐",
      title2: "精选活动",
      link0: "baidu.com",
      link1: "baidu.com",
      link2: "baidu.com"
    };
  },
  created() {},
  methods: {
    more() {
      console.log(1);
    },
    toHomeDetail:function(id){
           this.$router.push({name: 'home-detail-page',params:{id:id}});
    }
  },
  components: {
    // SubnavTitle
    ShopList
  }
};
</script>


<style lang="scss">
@import "~@/assets/scss/varibles.scss";
.home-page {
  background: #f1f2f6;
  //  <div class="home-list">
  //             <li class="item">
  //                 <i class="iconfont"></i>
  //                 <p class="name">农机服务</p>
  //             </li>
  //         </div>
  .home-list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    .item {
      width: 25%;
        padding-top: 43px;
      .iconfont {
        
        display: block;
        width: 100px;
        height: 100px;

        border-radius: 40px;
        background: #ff0;
        margin:0 auto;
      }
      .name {
          margin-top: 22px;
          margin-bottom: 0;
        font-size: 26px;

        letter-spacing: 0px;
        color: #323232;
      }
    }
  }
  .home-banner {
    width: 100%;
    height: 203px;
    .banner-img {
      display: block;
      width: 632px;
      margin: 38px auto;
      height: 132px;
      border-radius: 66px;

      // background: #ff0;
    }
  }
  .product-itme {
    width: 100%;
    margin: 0 auto;
    .subnav-title {
      height: 80px;
      background: #ffffff;
      width: 100%;
      display: block;

      margin: 0 auto;
      line-height: 80px;

      height: 80px;
      .title {
        font-size: 32px;

        float: left;
        color: #242424;
        font-weight: bold;
        margin-left: 28px;
      }
      .more {
        font-size: 26px;
        float: right;
        margin-right: 28px;
        color: #999999;
      }
    }

    //农资活动
    .farm-show {
      margin: 0 auto;
      width: 92.2%;
      box-shadow: 0 4px 10px 10px rgba(0, 0, 0, 0.05);

      .top {
        .shop-b {
          float: left;
          position: relative;
          width: 466px;
          height: 241px;

          background-blend-mode: normal, normal;

          .img {
            width: 466px;
            height: 241px;
            // background: #f00;
            border-radius: 6px 0px 0px 0px;
          }
          .desc {
            color: #ffffff;
            position: absolute;
            bottom: 25px;
            left: 37px;
            margin-top: 0;
            margin-bottom: 0;
            padding: 12px 40px;
            font-weight: normal;
            background-color: rgba(69, 69, 69, 0.6);
            border-radius: 24px;
            // opacity: 0.6;
          }
        }
        .shop-t {
          float: left;
          margin-top: 30px;
          margin-left: 45px;

          .title {
            font-size: 28px;

            letter-spacing: 0px;
            color: #333333;
            margin-top: 0px;
            margin-bottom: 0px;
          }
          .desc {
            margin-top: 4px;
            margin-left: 28px;
          }
          .img {
            width: 169px;
            height: 130px;
          }
        }
      }

      .bottom {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        .item {
          background: #ffffff;
          width: 49%;
          height: 200px;
          //   background-color: #f000ff;
          border-bottom: 1px solid #cccccc;
          //    padding-right: 20px;
          &:nth-child(1),
          &:nth-child(3) {
            border-right: 1px solid #cccccc;
          }
          &:nth-child(3),
          &:nth-child(4) {
            border-bottom: 0 none;
          }
          .item-b {
            float: left;
            padding-left: 25px;

            .title {
              font-size: 28px;
              margin-top: 28px;
              margin-bottom: 0;
              color: #333333;
            }
            .desc {
              margin-top: 6px;
              margin-bottom: 0;
              font-size: 24px;
              color: #999999;
            }
            .price {
              margin-top: 28px;
              margin-bottom: 0;

              font-size: 30px;

              color: #ff6600;
            }
          }
          .item-t {
            float: right;
            .img {
              //   width: 158px;
              margin-top: 34px;
              height: 160px;
              background: #f000;
              margin-right: 20px;
            }
          }
        }
      }
    }

    // 优秀服务商
    .shop-good-title {
      // box-shadow: 0 20px 10px 10px #ff8c1a;
      // padding-top: 14px;

      margin-top: 56px;

      width: 100%;
    }
    .shop-good {
      background: #fefefe;
      width: 100%;
      margin: 0 auto;
      //   padding-left: 28px;
      //   margin-bottom: 20px;
    }
    // 农特产产品
    .farm-list-title {
      margin-top: 20px;
    }
    .farm-list {
      width: 92.2%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      align-items: center;
      margin-left: 28px;
      background: #ffffff;
      //   padding-top: 20px;
      box-shadow: 0 4px 10px 10px rgba(0, 0, 0, 0.05);
      .item {
        border-right: 1px solid #cccccc;
        width: 33%;
        border-bottom: 1px solid #cccccc;
        height: 268px;
        background-color: #ffffff;
        border-radius: 6px 0px 0px 0px;
        margin-top: 2px;

        text-align: center;
        padding-top: 12px;
        padding-bottom: 14px;

        .img {
          margin: 0 auto;
          position: relative;
          width: 184px;
          height: 153px;

          .img-detail {
            width: 184px;
            height: 153px;
          }
          .badge {
            position: absolute;
            top: 4px;
            left: 2px;
            width: 80px;
            height: 30px;
            background-color: rgba(102, 102, 102, 0.8);
            border-radius: 15px;
            opacity: 0.8;

            font-size: 24px;

            line-height: 30px;
            text-align: center;
            color: #ffffff;
          }
        }
        .title {
          text-align: left;
          margin-top: 20px;
          font-size: 28px;

          padding-left: 20px;

          color: #333333;
        }
        .price {
          padding-left: 20px;
          text-align: left;

          margin-top: 14px;
          .now {
            color: #ff6600;
            font-size: 30px;
          }
          .drop {
            font-size: 24px;
            margin-left: 6px;
            color: #999999;
          }
        }
        &:nth-child(3),
        &:nth-child(6) {
          border-right: 0 none;
        }
        &:nth-child(4),
        &:nth-child(5),
        &:nth-child(6) {
          border-bottom: 0 none;
        }
      }
    }
    .news-list-title {
      margin-top: 22px;
    }
    .news-list {
      background: #ffffff;
      //   padding-left: 28px;
      //   padding-right: 28px;

      .item {
        margin: 0 auto;
        width: 92.2%;
        .title {
          font-size: 30px;

          color: #333333;
        }
        .img-block {
          margin-top: 26px;
          padding-bottom: 40px;
          border-bottom: 2px solid #eeeeee;
          margin-bottom: 40px;
          &:last-child {
            border-bottom: 0;
          }
          .img {
            width: 694px;
            height: 214px;
            // background-color: #000000;
          }
        }
      }
    }
  }
}
</style>
