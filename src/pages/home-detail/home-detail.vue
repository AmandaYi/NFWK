<template>
<!-- 李庆杰 -->
  <div  class="home-detail-page">
    <div class="search-detail">
       <div class="search-box">
      <div class="box clearfix">
        <div class="position" @click="back()"><i class="iconfont icon-fanhui"></i></div>
        <div class="content">
          <i class="iconfont icon-sousuo"></i>
          <input type="text" class="ipt" placeholder="智能搜索">
        </div>
        <!-- <div class="chat-icon"><i class="iconfont icon-liaotian"></i></div> -->
      </div>
  </div>
 
    </div>
    <div class="detail-list" ref="detailItem">
      <li class="item"  @click="toDetailItem(0)">
        <span class="pic back-img0"></span>
        <p class="name">深松</p>
        <span class="current" :class="{ 'active': toggleTab===true }"></span>
      </li>
      <li class="item" @click="toDetailItem(1)">
        <span class="pic back-img"></span>
        <p class="name">收割</p>
        <span class="current"  :class="{ 'active': toggleTab1===true }"></span>
      </li>
      <li class="item item-hook" @click="toDetailItem(2)">
        <span class="pic back-img1"></span>
        <p class="name">播种</p>
        <span class="current" :class="{ 'active': toggleTab2===true }"></span>
      </li>
    </div>
    <div class="bar"></div>
    <div class="main" v-show="toggleTab">
      <ul class="top-nav">
        <li class="nav-item active" @click="itemOrder(0)">综合</li>
        <li class="nav-item" @click="itemOrder(1)">区域</li>
        <li class="nav-item" @click="itemOrder(2)">销量</li>
      </ul>
      <ul class="nongji">
        <li class="nongji-item" :key="index" v-for="(item, index) in this.list">
          <div class="left"><img :src="item.logoUrl" height="200" width="200" class="logo"/>
          </div>
          <div class="right">
            <p class="title1">{{ item.companyName }}</p>
            <p class="addr">地址：{{ item.addr }}</p>
            <p class="juli">
              <img src="@/assets/imgs/addr.png" alt="">
              <span class="text">{{ item.distance }}km</span>
            </p>
            <p class="count"><img src="@/assets/imgs/wo2-01.png" alt="">
              <span class="text">{{ item.serverNum }}人已提供服务</span></p>
          </div>
        </li>
      </ul>
    </div>
    <!-- 其他页 -->
    <div v-show="toggleTab1"><ul class="top-nav">
        <li class="nav-item active" @click="itemOrder(0)">综合</li>
        <li class="nav-item" @click="itemOrder(1)">区域</li>
        <li class="nav-item" @click="itemOrder(2)">销量</li>
      </ul>
      <ul class="nongji">
        <li class="nongji-item" :key="index" v-for="(item, index) in this.list">
          <div class="left"><img :src="item.logoUrl" height="200" width="200" class="logo"/>
          </div>
          <div class="right">
            <p class="title1">{{ item.companyName }}</p>
            <p class="addr">地址：{{ item.addr }}</p>
            <p class="juli">
              <img src="@/assets/imgs/addr.png" alt="">
              <span class="text">{{ item.distance }}km</span>
            </p>
            <p class="count"><img src="@/assets/imgs/wo2-01.png" alt="">
              <span class="text">{{ item.serverNum }}人已提供服务</span></p>
          </div>
        </li>
      </ul></div>
    <div v-show="toggleTab2"><ul class="top-nav">
        <li class="nav-item active" @click="itemOrder(0)">综合</li>
        <li class="nav-item" @click="itemOrder(1)">区域</li>
        <li class="nav-item" @click="itemOrder(2)">销量</li>
      </ul>
      <ul class="nongji">
        <li class="nongji-item" :key="index" v-for="(item, index) in this.list">
          <div class="left"><img :src="item.logoUrl" height="200" width="200" class="logo"/>
          </div>
          <div class="right">
            <p class="title1">{{ item.companyName }}</p>
            <p class="addr">地址：{{ item.addr }}</p>
            <p class="juli">
              <img src="@/assets/imgs/addr.png" alt="">
              <span class="text">{{ item.distance }}km</span>
            </p>
            <p class="count"><img src="@/assets/imgs/wo2-01.png" alt="">
              <span class="text">{{ item.serverNum }}人已提供服务</span></p>
          </div>
        </li>
      </ul></div>
  </div>
</template>

<script>
  import {SERVICE_URL_SHOP,SERVICE_IMAGES_URL} from 'services/constants/constants'
  import SearchBox from '@/common/search-box/search-box'

import axios from "axios"
  export default {
    name: 'providers-page',
    data() {
      return {
        toggleTab:true,
        toggleTab1:false,
        toggleTab2:false,
        isFocus: true,
        list: {}
      }
    },
    components: {
      SearchBox
    },
    created() {
      this.getList()
    },
    methods: {
      back(){
        this.$router.go(-1)
      },
      getList() {
        const _this = this;
        axios.get(SERVICE_URL_SHOP+'gysInfo/getGysInfos?gysTypeId=1&lng=133.252260&lat=34.252600', {}).then((res) => {
          if (res.status === 200) {
            _this.list = res.data.dataList
            for (let i = 0; i < _this.list.length; i++) {
              const logoUrl = SERVICE_IMAGES_URL + _this.list[i].logoUrl
              _this.list[i].logoUrl = logoUrl
            }
          }
        }).catch((err) => {
          console.log(err)
        })
      },
      toDetailItem:function(id){
        if( id == 0 ){
          this.toggleTab = true
          this.toggleTab1 =false
          this.toggleTab2 = false
        } else if ( id == 1) {
          this.toggleTab1 = true
          this.toggleTab =false
          this.toggleTab2 = false
        } else if (id == 2){
          this.toggleTab2 = true
          this.toggleTab1 =false
          this.toggleTab = false
        }
      },
      itemOrder(id) {
        let juli = this.list.slice()
        if (id == 1) {
          for (let i = 0; i < this.list.length - 1; i++) {
            if (this.list[i].distance >= this.list[i+1].distance) {
              var temp = juli[i]
              juli[i] = juli[i+1]
              juli[i+1] = temp
            }
          }
          this.list = juli
        } else if ( id == 2 ) {
          for (let i = 0; i < this.list.length - 1; i++) {
            if (this.list[i].serverNum >= this.list[i+1].serverNum) {
              var temp = juli[i]
              juli[i] = juli[i+1]
              juli[i+1] = temp
            }
          }
          this.list = juli
        } else if (id == 0) {
          this.getList()
        }
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "~@/assets/scss/varibles.scss";
  @import "../../assets/iconfont/iconfont.css";
.search-detail{
  .search-box {
  width: 100%;
  height: 64px;
     margin-top:20px;
  //  background: #f00;
  .box {
    position: relative;
   .icon-fanhui{
     float:left;
     margin-top: 14px;
     margin-left: 28px;
   }
    .content {
      position: absolute;
      width: 480px;
      height: 64px;
      left: 136px;

      .icon-sousuo {
        position: absolute;
        top: 16px;
        color: #333333;
        left: 20px;
      }
      .ipt {
        display: block;
        box-sizing: border-box;
        width: 480px;
        height: 64px;
        padding-left: 60px;
        background-color: #eeeeee;
     
        border-radius: 30px;
        font-size: 28px;
      }
    }
    
  }
}
}
  a {
    color: #323232;
    text-decoration: none;
  }

  ul, li, p {
    margin: 0;
    padding: 0;
  }

  .search-wrapper {
    position: relative;
    width: 480px;
    margin: 0 auto;
    padding: 10px 0;
    .search {
      position: absolute;
      top: 30px;
      left: 16px;
      width: 30px;
      height: 30px;
    }
  }
.home-detail-page {
  .detail-list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    padding: 20px 0 0 0;
    .item {
      /*flex: 1;*/
      width: 33%;
      /*padding-top: 43px;*/
      .pic {
        display: inline-block;
        width: 100px;
        height: 100px;
        margin: 0 auto;
      }
      .back-img0 {
        background: url("~@/assets/imgs/nongji_06.png") no-repeat center center;
        background-size: 90px 60px;
      }
      .back-img {
        background: url("~@/assets/imgs/nongji_03.png") no-repeat center center;
        background-size: 90px 60px;
      }
      .back-img1 {
        background: url("~@/assets/imgs/nongji_08.png") no-repeat center center;
        background-size: 90px 60px;
      }
      .name {
        margin-bottom: 0;
        font-size: 26px;
        letter-spacing: 0px;
        color: #323232;
      }
      .current {
        display: inline-block;
        width: 50%;
        height: 6px;
        border-radius: 20px;
        margin: 0 auto;
        margin-bottom: -6px;
      }
      .active {
        background-color: $currentlv;

      }
    }
  }
  .bar {
    width: 100%;
    height: 20px;
    background-color: #f1f2f6;
  }

  .nongji-type-wrapper {
    width: 100%;
  }

  // .main {
    .top-nav {
      display: flex;
      border-bottom: #eee 1px solid;
      .nav-item {
        flex: 1;
        box-sizing: border-box;
        height: 88px;
        line-height: 88px;
        width: 30%;
        text-align: center;
        font-size: 30px;
        color: $hui66;
        &.active {
          color: #2dbb55;
        }
      }
    }
    .nongji {
      .nongji-item {
        position: relative;
        display: flex;
        border-bottom: #eee 1px solid;
        padding: 0 28px;
        .left {
          width: 225px;
          box-sizing: border-box;
          padding: 26px 20px 20px 20px;
          .logo {
            width: 200px;
            height: 200px;
          }
        }
        .right {
          flex: 1;
          margin-left: 40px;
          font-size: 26px;
          color: #999;
          .text {
            margin-left: 10px;
          }
          .title1 {
            margin-top: 16px;
            margin-bottom: 10px;
            font-size: 30px;
            line-height: 50px;
            color: $color32;
          }
          .juli, .count, .addr {
            line-height: 40px;
            box-sizing: border-box;
            img {
              width: 19px;
              height: 23px;
            }
          }
          .addr {
            height: 60px;
          }
          .juli {
            margin-top: 10px;
          }
          .count {
          }
        }
        .jiage {
          position: absolute;
          top: 170px;
          right: 28px;
          display: inline-block;
          font-size: 30px;
          color: #ff6600;
        }
      }
    }
  // }
}

</style>
