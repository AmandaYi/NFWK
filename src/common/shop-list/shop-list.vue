<template>
  <!-- <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
 
    </div>
     
  </div> -->

<div class="warpper" ref="warpper"> 
       <div class="shop-list" ref="shopList">
      
        <li class="item" ref="itemList">
            <div class="banner">
                <img class="img"   alt=""   src="@/assets/imgs/good_shop0.png">
            </div>
            <div class="shop-detail">
                <div class="top">
                    <div class="shop-icon">
                        <img class="icon"  alt="" src="@/assets/imgs/good_icon0.png">   
                        
                    </div>
                    <div class="title-desc">
                        <h2 class="title">北京益农飞防植保联盟</h2>
                        <div class="star">
                            ★★★★★
                        </div>
                    </div>


                </div>
                <div class="bottom">
                    <li class="item item0">
                        <i class="iconfont"></i>
                        <span class="text">呱呱认证</span>
                    </li>
                     <li class="item item1">
                        <i class="iconfont"></i>
                        <span class="text">8项产品/服务</span>
                    </li>
                     <li class="item item2">
                        <i class="iconfont"></i>
                        <span class="text">16成交</span>
                    </li>
                </div>
            </div>
        </li>


         <li class="item">
            <div class="banner">
                <img class="img"   alt="" src="@/assets/imgs/good_shop1.png">
            </div>
            <div class="shop-detail">
                <div class="top">
                    <div class="shop-icon">
                        <img class="icon"  alt=""  src="@/assets/imgs/good_icon1.png">   
                        
                    </div>
                    <div class="title-desc">
                        <h2 class="title">北京益农飞防植保联盟</h2>
                        <div class="star">
                            ★★★★★
                        </div>
                    </div>


                </div>
                <div class="bottom">
                    <li class="item item0">
                        <i class="iconfont"></i>
                        <span class="text">呱呱认证</span>
                    </li>
                     <li class="item item1">
                        <i class="iconfont"></i>
                        <span class="text">8项产品/服务</span>
                    </li>
                     <li class="item item2">
                        <i class="iconfont"></i>
                        <span class="text">16成交</span>
                    </li>
                </div>
            </div>
        </li>
             </div>
        </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "shop-list",
  props: {

  },
  created() {
    setTimeout(() => {
      this.setWarpperWidth();
      this.initBetter();
    }, 20);
  },
  methods: {
    setWarpperWidth() {
      let children = this.$refs.shopList.children;
    //   console.log(children);
      let width = 0;
    // console.log(children[0].clientWidth);

    // console.log(this.$refs.shopList.clientWidth)

    for(let i=0; i< children.length; i ++){
        let child = children[i];
        child.style.width = children[0].clientWidth + "px";
        width +=children[0].clientWidth;
    }
      this.$refs.shopList.style.width = width + "px";
    //   console.log(this.$refs.shopList.style.width);
    },
    initBetter() {
    //   console.log(1);
      let warpper = this.$refs.warpper;
      new BScroll(this.$refs.warpper, {
        scrollX: true,
        scrollY: false,
        click: true
      });
    }
  }
};
</script>

<style lang="scss">
// .服务商优秀的
.warpper {
  width: 100%;
//   height: 290px;
    overflow: hidden;
}
.shop-list {
  position: relative;
  overflow: hidden;
//   height: 290px;
  //   width: 100%;
  //   background-color: #ff0;
 box-shadow: 0 10px 24px 24px rgba(30, 30, 30, 0.1);
  border-radius: 14px;
  //   overflow-y: auto;
  padding-bottom: 20px;
  display: flex;
  justify-content: row;
  flex-wrap: nowrap;

//   overflow: hidden;
  //   overflow-x: visible;
  //   overflow-y: hidden;

  .item {
    margin-left: 20px;
    width: 492px;
    // float: left;
    // display: inline-block;
    .banner {
      img {
        width: 492px;
        height: 144px;
        background-color: #bcbcbc;
        border-radius: 14px 14px 0px 0px;
      }
    }
    .shop-detail {
      position: relative;
      .top {
        height: 80px;
        .shop-icon {
          position: absolute;
          top: -20px;
          left: 20px;

          .icon {
            width: 90px;
            height: 90px;
            background-color: #ffffff;
            border-radius: 20px;
            border: solid 1px #cccccc;
          }
        }

        .title-desc {
          position: absolute;
          left: 124px;
          top: 14px;
          .title {
            margin-top: 0;
            margin-bottom: 0;

            font-size: 30px;

            color: #333333;
          }
          .star {
            color: #ff6600;
            margin-top: 2px;
          }
        }
      }
      .bottom {
        margin-top: 30px;
        display: flex;
        justify-content: space-around;
    align-items: center;
    text-align: center;
        .item {
          padding: 4px;
          height: 30px;

          font-size: 22px;
          font-weight: bold;

          line-height: 30px;
          letter-spacing: 0px;
//  padding-bottom: 24px;
          .iconfont {
          }
          .text {
          }
        }
        .item0 {
          color: #28a6ff;
          background-color: #eff9ff;
        }
        .item1 {
          color: #2eb6aa;
          background-color: #eff9f8;
        }
        .item2 {
          color: #f7b55e;

          background-color: #fef8ef;
        }
      }
    }
  }
}
</style>

