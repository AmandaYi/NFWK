<template>
        
       <div class="subscribe-page">
          <order-header :title="title">
                       
            </order-header>

                <div class="company-about">
                    <marker-detail :marker="this.$store.state.marker" :hide="hide">
              
                    </marker-detail>
                </div>
            <div class="service-project">
                <h2 class="project-title">服务项目</h2>

                <li @click="pushProjectDetail(index)" class="item clearfix" :key="index" v-for="(item,index) of gysDetail">
                    <div class="left">
                        <img  :src="item.productUrl" class="img">
                    </div>
                    <div class="right">
                        <h2 class="detail-title">{{item.productName}}</h2>
                        <p class="desc">{{item.summary}}</p>
                        <div class="detail-about clearfix">
                            <span class="price"><span class="red">	&yen;{{item.productPrice}}</span>/次</span> <span class="done">已售{{item.saleAmount}}</span>
                        </div>
                    </div> 
                </li>                
            </div>
        </div>    
</template>
<script>
// 导入公司详情
import MarkerDetail from "@/components/marker-detail/marker-detail";

// 头部
import OrderHeader from "@/components/order-header/order-header";

import ApiService from "@/services/api-service/api-service";

import { SERVICE_SHOP_IMAGES_URL } from "@/services/contants/contants";

import store from "@/vuex/store";
export default {
  name: "subscribe-page",
  data() {
    return {
      hide: true,

      apiService: new ApiService(),
      title: "现在预约",
      //   marker: {},
      gysDetail: []
    };
  },

  mounted() {
    let that = this;
    // that.getParams();
    // console.log(this.$store.state.gysId)
    // that.getList(this.$store.state.gysId);
    this.getList(this.$route.params.gysId);
  },

  methods: {
    // getParams() {

    // //   this.$store.state.marker = this.$route.params.marker;

    // //   this.$store.state.marker.hide = true;
    //   this.$store.commit("",this.$route.params.gysId)

    //   // localStorage.setItem("gysId",gysId);
    // },
    //   获取供应商的服务类别
    getList(gysId) {
      let that = this;
      this.apiService.getGysProducts(gysId).then(res => {
        console.log(res);
        // 组装一遍数据
        // for(let key of res.data){
        //       SERVICE_IMAGES_URL+   res[key].data.productUrl
        // }
        let tmp = res.data;

        for (let i = 0; i < tmp.length; i++) {
          tmp[i].productUrl = SERVICE_SHOP_IMAGES_URL + tmp[i].productUrl;
          that.gysDetail.push(tmp[i]);
        }
        console.log(that.gysDetail);
      });
    },
    pushProjectDetail(index) {
      console.log(this.gysDetail[index]);
      // 把点击的类别保存到vuex里面
      this.$store.commit("updateSubscribeCat", this.gysDetail[index]);
      // 路由跳转
      this.$router.push({
        name: "project-detail-page"
        });
      // 我不存
      // 我单单的存一个服务类别的id

      // 把点击的gys放到对应的vuex对象里面
      // console.log(this.gysDetail)
      // this.$store.commit("updateGysDetail",)

      // console.log(this.$store.state.gysDetail)
    }
  },
  components: {
    MarkerDetail,
    OrderHeader
  }
};
</script>
<style lang="scss" scoped>
.subscribe-page {
  margin: 0 auto;

  .service-project {
    .project-title {
      width: 100%;

      height: 80px;
      background-color: #ffffff;
      border: solid 1px rgba(238, 238, 238, 0.9);
      margin-top: 0;
      margin-bottom: 0;
      line-height: 80px;
      font-size: 32px;
      color: #666666;
      padding-left: 28px;
      padding-right: 28px;
      box-sizing: border-box;
    }
    .item {
      box-sizing: border-box;
      width: 100%;
      height: 220px;
      padding-left: 28px;
      padding-right: 28px;
      padding-top: 30px;
      //   background-color: #ff0;
      border-bottom: solid 1px #cccccc;
      //   左边的
      .left {
        float: left;
        width: 20%;
        height: 144px;
        //   图片
        .img {
          display: block;
          width: 144px;
          height: 144px;
          background: #000;
        }
      }
      .right {
        float: left;
        width: 80%;
        padding-left: 20px;
        box-sizing: border-box;
        .detail-title {
          margin-top: 0;
          margin-bottom: 0;

          font-size: 30px;

          letter-spacing: 0px;
          color: #323232;
        }
        .desc {
          margin-top: 20px;
          margin-bottom: 0;
          font-size: 26px;
          height: 60px;
          width: 100%;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .detail-about {
          margin-top: 16px;
          .price {
            font-size: 28px;

            letter-spacing: 0px;

            .red {
              color: #ff6600;
              font-weight: 500;
            }
          }
          .done {
            font-size: 28px;
            float: right;
            letter-spacing: 0px;
            color: #999999;
          }
        }
      }

      //   右边的
    }
  }
}
</style>
