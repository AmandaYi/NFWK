<template>
  <div>
    <div class="search-wrapper"><img v-if="isFocus" src="@/assets/imgs/search.png" alt="" class="search"><search-box :isFocus="isFocus"></search-box></div>
    <div class="tab">
      <div class="tab-item">
        <router-link tag="a" to="/nongji-type">
            <span class="pic"></span>
            <h2 class="title">深松</h2>
          <div></div>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link tag="a" to="/nongji1">
            <span class="pic back-img"></span>
            <h2 class="title">收割</h2>
          <div></div>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link tag="a" to="/nongji2">
            <span class="pic back-img1"></span>
            <h2 class="title">播种</h2>
            <div></div>
        </router-link>
      </div>
    </div>
    <div class="bar"></div>
    <!-- <div class="nongji-type-wrapper">
      <nongji-type></nongji-type>
    </div> -->
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
  </div>
</template>

<script>
  import axios from 'axios'
  import SearchBox from '@/common/search-box/search-box'
 
export default {
  name: 'home-detail',
  data() {
    return {
      isActive: true,
      isFocus: true,
      list: {}
    }
  },
  computed: {
    toggleActive() {
      return this.isActive = !this.isActive
    }
  },
  components: {
    SearchBox
  },
  created() {
      console.log(this.$route.params.id)
    const _this = this
    axios.get('http://192.168.1.13:8080/api/gysInfo/getGysInfos?gysTypeId=1&lng=133.252260&lat=34.252600',  {
    }).then((res) => {
      if (res.status === 200) {
        _this.list = res.data.dataList
        for (let i = 0; i < _this.list.length; i++) {
          const logoUrl = 'http://192.168.1.13:8080/images/' + _this.list[i].logoUrl
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
  a{
    color: #323232;
    text-decoration:none;
  }
  ul,li, p{
      margin: 0;
      padding: 0;
    }
  .search-wrapper{
    position: relative;
    width: 480px;
    margin: 0 auto;
    padding: 10px 0;
    .search{
      position: absolute;
      top:30px;
      left:16px;
      width: 30px;
      height: 30px;
    }
  }
  .tab{
    display: flex;
    width: 100%;
    height: 149px;
    border-top: #eee 1px solid;
    margin-bottom: 5px;
    .tab-item{
      flex: 1;
      text-align: center;
      padding: 28px 0;
      .pic{
        display: inline-block;
        width: 90px;
        height: 54px;
        background:url("../../assets/imgs/nongji_06.png") no-repeat center center;
        background-size: 90px 60px;
        margin-bottom: 16px;
      }
      .back-img{
        background:url("../../assets/imgs/nongji_03.png") no-repeat center center;
        background-size: 90px 60px;
      }
      .back-img1{
        background:url("../../assets/imgs/nongji_08.png") no-repeat center center;
        background-size: 90px 60px;
      }
      h2.title{
        margin: 0;
        height: 26px;
        color: #323232;
        font-size: 26px;
        font-weight: normal;
        margin-bottom: 20px;
      }
      .inner{
        width: 90px;
        margin: 0 auto;
        border-bottom: #2dbb55 6px solid;
        border-radius: 30px;
      }
    }
  }
  .bar{
    width: 100%;
    height: 20px;
    background-color: #f1f2f6;
  }
  .nongji-type-wrapper{
    width: 100%;
  }
  .main{
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
          width: 225px;
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
            margin-top: 16px;
            margin-bottom: 10px;
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
          .addr{
            height: 60px;
          }
          .juli{
            margin-top: 10px;
          }
          .count{
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
  }

</style>
