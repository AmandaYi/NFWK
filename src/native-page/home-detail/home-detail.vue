<template>
  <div class="main">
    <ul class="top-nav">
      <li class="nav-item active">综合</li>
      <li class="nav-item">距离</li>
      <li class="nav-item">销量</li>
      <li class="nav-item">价格</li>
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
</template>

<script>
import axios from 'axios';
// import {export const SERVICE_URL ="http://192.168.1.13:8080/api/";
// export const IMAGES_URL ="http://192.168.1.13:8080/images/";}
import {
    SERVICE_URL,IMAGES_URL
} from "services/constants/constants";
export default {
  name: 'native-home-detail',
  data() {
    return {
      list: {}
    }
  },
  created() {
      console.log(SERVICE_URL);
    const _this = this
    axios.get( SERVICE_URL+'/gysInfo/getGysInfos?gysTypeId=1&lng=133.252260&lat=34.252600',  {
    }).then((res) => {
      if (res.status === 200) {
        _this.list = res.data.dataList
        for (let i = 0; i < _this.list.length; i++) {
          const logoUrl = IMAGES_URL + _this.list[i].logoUrl
          _this.list[i].logoUrl = logoUrl
        }
      }
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "~@/assets/scss/varibles.scss";
  ul,li, p{
    margin: 0;
    padding: 0;
  }
  .top-nav{
    display: flex;
    border-bottom: #eee 1px solid;
    .nav-item{
      flex: 1;
      box-sizing: border-box;
      height: 88px;
      line-height: 88px;
      width: 30%;
      text-align: center;
      font-size: 30px;
      color: $hui66;
      &.active{
        color: #2dbb55;
      }
    }
  }
  .nongji{
    .nongji-item{
      position: relative;
      display: flex;
      border-bottom: #eee 1px solid;
      padding: 0 28px;
      .left{
        width: 226px;
        box-sizing: border-box;
        padding: 26px 20px 20px 20px;
        .logo{
          width: 200px;
          height: 200px;
        }
      }
      .right{
        flex: 1;
        margin-left: 40px;
        font-size: 26px;
        color: #999;
        .text{
          margin-left: 10px;
        }
        .title1{
          margin-top: 26px;
          margin-bottom: 20px;
          font-size: 30px;
          line-height: 50px;
          color: $color32;
        }
        .juli,.count,.addr{
          line-height: 40px;
          box-sizing: border-box;
          img{
            width: 19px;
            height: 23px;
          }
        }
        .juli{
          margin: 32px 0 16px 0;
        }
        .count{
          margin-bottom: 46px;
        }
      }
      .jiage{
        position: absolute;
        top: 170px;
        right: 28px;
        display: inline-block;
        font-size: 30px;
        color: #ff6600;
      }
    }
  }
</style>
