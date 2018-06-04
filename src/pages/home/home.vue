<template> 
    <div class="home-page">
        <app-header :city="headerCity" class="app-header"></app-header>
        <div class="nav clearfix">
            <div class="nav-title">
                <div class="left clearfix"  @click="toggleNavTitle($event)" ref="navTitle">
                     <li class="left-item current"><i class="iconfont icon-feifang-tab"></i>飞防</li>
                     <li class="left-item"><i class="iconfont icon-nongji-tab"></i>农机</li>
                     <li class="left-item"><i class="iconfont icon-nongzi-tab"></i>农资</li>
                     <li class="left-item"><i class="iconfont icon-zhuangjia-tab"></i>专家</li>
                </div>
                <!-- 隐藏 -->
                <div style="display:none;" class="right">
                    <i class="right-icon iconfont icon-leibie"></i>
                </div>
                <!-- 隐藏 -->

            </div>

            <div class="sub-nav clearfix" @click="toggleSubNav($event)" ref="subNav">
                <li :class="{'sub-item':true,'current':index==0}" :key="index" v-for="(item,index) of subNav">{{item.title}}</li>
            </div>
        </div>
        <div class="map" id="map" ref="map">
            <i class="iconfont icon-zuobiao"></i>
        </div> 
        <transition name="markerToggle">
        <div class="marker-detail" v-show="isShowMarker" ref="markerBlock" @touchstart="hideStart($event)" @touchmove="hideMove($event)" @touchend="hideEnd($event)">
            <marker-page :marker="marker"></marker-page>
        </div>
        </transition>
    </div>
</template>
<script>
// 引入头部
import AppHeader from "components/app-header/app-header";
import MarkerPage from "components/marker-detail/marker-detail";
// 引入vuex,将此页面的map填充进去,PS先实现功能
// import store from '@/store/store';

// import  {mapState} from 'vuex';

import AMap from "AMap";

// 引入图片服务器地址
import { SERVICE_IMAGES_URL } from "../../services/contants/contants";

// 导入api
import ApiService from "../../services/api-service/api-service";
// let map;
// let markers = [];
// 处理底部的隐藏
// import
export default {
  name: "home-page",
  data() {
    return {
      // 头部的城市定位
      headerCity:"郑州市",
      map: "",
      markers: [],
      apiService: new ApiService(),
      // 一级导航选中状态的id值
      currentNavId: 0,
      // 是否显示
      isShowMarker: false,
      // 偏移对象
      touch: {
        XStart: 0,
        YStart: 0,
        XMove: 0,
        YMove: 0,
        move: 0
      },
      nav: [
        //  农机 1 有三个范围         深松 9  播种  11  收割 10
        //  农资 3 有四个范围         种子12 化肥13 农药14 农膜15
        {
          id: 0,
          typeId: 2,
          title: "飞防"
        },
        {
          id: 1,
          typeId: 1,
          title: "农机",
          sub: [
            {
              id: 0,
              scopedId: 9,
              title: "深松"
            },
            {
              id: 1,
              scopedId: 11,
              title: "播种"
            },
            {
              id: 2,
              scopedId: 10,
              title: "收割"
            }
          ]
        },
        {
          id: 2,
          typeId: 3,
          title: "农资",
          sub: [
            {
              id: 0,
              scopedId: 12,
              title: "种子"
            },
            {
              id: 1,
              scopedId: 13,
              title: "化肥"
            },
            {
              id: 2,
              scopedId: 14,
              title: "农药"
            },
            {
              id: 3,
              scopedId: 15,
              title: "农膜"
            }
          ]
        },
        {
          id: 3,
          typeId: 4,
          title: "专家"
        }
      ],
      subNav: [],
      //  marker传入的额数据
      marker: {
        id: 0,
        title: "北京翼农飞防植保联盟",
        rating: 5,
        desc:
          "北京翼农是一家集农业植保高科技器械产 品研究开发、生产、销售、服务于一体的专业化公司",
        telPhone: "15839521352"
      }
    };
  },
  created() {
    this.subNav = this.nav[0].sub;
  },
  mounted() {
    this.init();
    // 得到全部数据
  },
  methods: {
    initMap() {
      let that = this;
      return new Promise(resolve => {
        that.map = new AMap.Map("map", {
          zoom: 15,
          resizeEnable: true,
          center: [113, 34]
        });

        //   输出地图
        resolve(that.map);
      });
    },
    onSuccess(e) {
      let that = this;
      if (e) {
        console.log(e);
        console.log("geo is save");
        // 定位成功以后给地图添加事件
        // 移动的时候隐藏底部的框
        AMap.event.addListener(that.map, "touchstart", function(e) {
          // console.log(11111111111111)
          that.isShowMarker = false;
        });
        let res = e.position;
        let gysTypeId = gysTypeId || 1;
        let lng = res.lng;
        let lat = res.lat;
        localStorage.setItem("cityLng", lng);
        localStorage.setItem("cityLat", lat);

        // 成功之后 进行查询地理定位
        that.setCurrentCity(lng, lat);

        // 首次进入的时候,传的id是1, 范围是9
        this.apiService.getDistanceGysInfos(gysTypeId, lng, lat, 9).then(r => {
          console.log(r.data);
          let res = r.data;
          for (let i = 0; i < res.length; i++) {
            let newLng = new AMap.LngLat(res[i].longitude, res[i].lat);
            let imgUrl = SERVICE_IMAGES_URL + res[i].gysType.imgUrl;
            console.log(res[i]);

            let marker = new AMap.Marker({
              map: that.map,
              position: newLng,
              icon: imgUrl,
              offset: { x: -8, y: -34 } //相对于基点的位置
            });
            marker.on("click", () => {
              // that.showDeatil(res[i]);
              console.log("我什么都不做");
            });
            that.markers.push(marker); //在地图上添加点
          }
        });
      } else {
        console.error("报错了");
        return false;
      }
    },
    init() {
      let that = this;

      that.initMap(map).then(
        map => {
          map.plugin("AMap.Geolocation", () => {
            let geolocation = new AMap.Geolocation({
              enableHighAccuracy: true, //是否使用高精度定位，默认:true
              timeout: 10000, //超过10秒后停止定位，默认：无穷大
              maximumAge: 0, //定位结果缓存0毫秒，默认：0
              convert: true, //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
              showButton: true, //显示定位按钮，默认：true

              buttonPosition: "RB", //定位按钮停靠位置，默认：'LB'，左下角
              buttonOffset: new AMap.Pixel(16, 220), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
              showMarker: false, //定位成功后在定位到的位置显示点标记，默认：true
              showCircle: true, //定位成功后用圆圈表示定位精度范围，默认：true
              panToLocation: true, //定位成功后将定位到的位置作为地图中心点，默认：true
              zoomToAccuracy: true //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            });
            map.addControl(geolocation);
            geolocation.getCurrentPosition();
            AMap.event.addListener(geolocation, "complete", that.onSuccess); //返回定位信息
            AMap.event.addListener(geolocation, "error", err => {
              console.log(err);
            }); //返回定位出错信息
          });
        },
        e => {
          console.log("BUG! YOU ARE NOT HAVE GPS" + e);
        }
      );
    },
    // 根据当前地理定位进行首页显示地理位置,
    setCurrentCity(lng, lat) {
      // debugger;   
      let that = this;
      // 因为高德传入的是字符参数,这里获取的是int类型,所以转下码
      lng = "" + lng;
      lat = "" + lat;
      that.apiService.getRegeo(lng, lat).then(res => {
 
        that.headerCity = res.data.regeocode.addressComponent.city

      });
    },
    // 点击一级导航的时候获取点标记
    getTabMarker(currentId, currentSubId) {
      let that = this;
      // 拿到导航数据
      let nav = that.nav;
      // 获取得到的一级类别,
      // 类别分别是
      // 农机 1  飞防 2 农资 3 专家 4
      // ->
      // 选中的类别id
      let gysTypeId = "";
      // 获取得到的经营范围类别,如果不传递经营范围的话,那么最后的值是空字符串
      // 经营范围是
      //  农机 1 有三个范围         深松 9  播种  11  收割 10
      //  农资 3 有四个范围         种子12 化肥13 农药14 农膜15
      let busScopeId = "";

      // 选中的一级id之后开始渲染数据
      for (let i = 0; i < nav.length; i++) {
        if (nav[i].id == currentId) {
          // console.log(nav[i]);
          gysTypeId = nav[i].typeId;
          if (Array.isArray(nav[i].sub) == true) {
            busScopeId = nav[i].sub[0].scopedId;
          }
          break;
        }
      }
      console.log(gysTypeId + "么么哒" + busScopeId);
      // 当前的可视中心点
      let clientCenter = that.map.getCenter();
      // 当前移动的点标记的中心点
      // 经度,
      let lng = clientCenter.lng;
      // 维度
      let lat = clientCenter.lat;
      // debugger
      // 开始再次查询数据,
      this.apiService
        .getDistanceGysInfos(gysTypeId, lng, lat, busScopeId)
        .then(r => {
          console.log(r);
          // 渲染之前,清除全部的点标记
          that.map.clearMap();
          // 然后开始渲染点标记只需要复制一遍for循环的逻辑就可以了
          let res = r.data;
          for (let i = 0; i < res.length; i++) {
            let newLng = new AMap.LngLat(res[i].longitude, res[i].lat);
            let imgUrl = SERVICE_IMAGES_URL + res[i].gysType.imgUrl;
            // console.log(res[i]);

            let marker = new AMap.Marker({
              map: that.map,
              position: newLng,
              icon: imgUrl,
              offset: { x: -8, y: -34 } //相对于基点的位置
            });
            marker.on("click", () => {
              that.markerDeatil(res[i]);
              console.log("我什么都不做");
            });
            that.markers.push(marker); //在地图上添加点
          }
        });
    },
    // 点击二级导航的时候获取点标记
    getSubMarker(subId) {
      let that = this;
      console.log("没错,我就是一级导航的状态" + that.currentNavId);
      // console.log("么么哒"+subId);
      // 一级导航,
      let gysTypeId = null;
      // 通过一级导航获取一级导航对应的id
      gysTypeId = that.nav[that.currentNavId].typeId;
      // 通过一级导航获得二级范围sub
      let busScopeId = null;
      let tmpSub = that.nav[that.currentNavId].sub;
      console.log(tmpSub);
      // 通过二级范围获得对应的二级范围scopedId,然后清除地图数据,开始渲染数据
      for (let i = 0; i < tmpSub.length; i++) {
        if (tmpSub[i].id == subId) {
          // console.log(tmpSub[i])
          // 把获取到的范围scopedId放到数组里面
          busScopeId = tmpSub[i].scopedId;
          break;
        }
      }

      console.log("我是一级导航,范围的id" + gysTypeId);
      console.log("我是二级导航,范围的id" + busScopeId);
      // 当前的可视中心点
      let clientCenter = that.map.getCenter();
      // 当前移动的点标记的中心点
      // 经度,
      let lng = clientCenter.lng;
      // 维度
      let lat = clientCenter.lat;
      // 开始清除整个地图的渲染,然后增加点数据
      this.apiService
        .getDistanceGysInfos(gysTypeId, lng, lat, busScopeId)
        .then(r => {
          console.log(r);
          // 渲染之前,清除全部的点标记
          that.map.clearMap();
          // 然后开始渲染点标记只需要复制一遍for循环的逻辑就可以了
          let res = r.data;
          for (let i = 0; i < res.length; i++) {
            let newLng = new AMap.LngLat(res[i].longitude, res[i].lat);
            let imgUrl = SERVICE_IMAGES_URL + res[i].gysType.imgUrl;
            // console.log(res[i]);

            let marker = new AMap.Marker({
              map: that.map,
              position: newLng,
              icon: imgUrl,
              offset: { x: -8, y: -34 } //相对于基点的位置
            });
            marker.on("click", () => {
              that.markerDeatil(res[i]);
              console.log("我什么都不做");
            });
            that.markers.push(marker); //在地图上添加点
          }
        });
    },

    // 点击切换一级导航栏
    toggleNavTitle(e) {
      let that = this;
      // 激活的li
      let current_i = 0;
      // 获取e
      let ev = e || window.event;
      // 获取点击的元素代理
      let target = ev.target || ev.srcElement;
      // 获取子元素,为了for
      let children = this.$refs.navTitle.children;
      console.log(children);

      if (target.nodeName.toLowerCase() == "li") {
        // console.log();
        if (target == undefined || target == null || target == "") {
          return false;
        }
        target.className = "left-item current";

        // 清除全部元素的样式
        console.log(target);

        for (let i = 0; i < children.length; i++) {
          if (children[i] === target) {
            console.log(i);
            current_i = i;
            continue;
          } else {
            children[i].className = "left-item";
          }
        }
        // 把二级菜单的数据数据改变
        that.changeSubNav(current_i);
        // 点击的是一级菜单,所以呢,改变之后需要默认一个值出来,默认值放到下面的 getTabMarker函数里面进行调整判断
        that.getTabMarker(current_i);
        // 保存一级导航的索引状态
        that.currentNavId = current_i;
      } else if (target.nodeName.toLowerCase() == "i") {
        console.log(target);
        if (target == undefined || target == null || target == "") {
          return false;
        }
        // 把获取到的父元素找出来
        let target = target.parentNode.className;

        // console.log();
        target.className = "left-item current";

        // 清除全部元素的样式
        console.log(target);
        for (let i = 0; i < children.length; i++) {
          if (children[i] === target) {
            console.log(i);
            current_i = i;
            continue;
          } else {
            children[i].className = "left-item";
          }
        }
        // 把二级菜单的数据数据改变
        that.changeSubNav(current_i);
        // 点击的是一级菜单,所以呢,改变之后需要默认一个值出来,默认值放到下面的 getTabMarker函数里面进行调整判断
        that.getTabMarker(current_i);
        // 保存一级导航的索引状态
        that.currentNavId = current_i;
      }

      console.log(that.subNav);
      return true;
    },
    // 点击切换二级导航
    toggleSubNav(e) {
      // 获取e
      let ev = e || window.event;
      // 获取点击的元素代理
      let target = ev.target || ev.srcElement;
      // 获取子元素,为了for
      let children = this.$refs.subNav.children;

      // 选中的二级范围导航的索引
      let subId = null;
      if (target.nodeName.toLowerCase() == "li") {
        // console.log();
        target.className = "sub-item current";

        // 清除全部元素的样式
        console.log(target);
        for (let i = 0; i < children.length; i++) {
          if (children[i] === target) {
            console.log(i);
            subId = i;
            continue;
          } else {
            children[i].className = "sub-item";
          }
        }

        // 改变完毕之后,开始对数据进行请求,请求之后开始渲染地图数据
        this.getSubMarker(subId);
      }
    },
    // 改变二级菜单的数据结构
    changeSubNav(current_i) {
      let that = this;
      that.subNav = that.nav[current_i].sub;
      // 同时改变二级范围的样式,同时选中第一个样式
      let children = that.$refs.subNav.children;
      // console.log(children)
      // 如果没有二级菜单,那么直接return
      if (children.length == 0) {
        return false;
      }
      for (let i = 0; i < children.length; i++) {
        children[i].className = "sub-item";
      }
      // if()
      children[0].className = "sub-item current";
    },

    // 展示底部的详情框
    markerDeatil(markerItem) {
      let that = this;
      // 传入组件之前首先先对数据进行重组
      // let imgUrl = SERVICE_IMAGES_URL + res[i].gysType.imgUrl;
      let newMarker = {};
      for (let key in markerItem) {
        newMarker[key] = markerItem[key];
      }

      // let imgUrl = SERVICE_IMAGES_URL + markerItem.gysType.imgUrl;
      //   console.log(imgUrl);
      newMarker.imgUrl = SERVICE_IMAGES_URL + markerItem.gysType.imgUrl;
      newMarker.telPhone = "tel:" + markerItem.telPhone;

      that.marker = newMarker;

      // console.log(newMarker);
      that.isShowMarker = true;
    },
    // 隐藏底部的详情框
    hideStart(e) {
      let that = this;
      that.isShowMarker = true;
      let ev = e || window.event;

      // 获取当前的x和y的坐标
      that.touch.XStart = ev.touches[0].pageX;
      that.touch.YStart = ev.touches[0].pageY;
      // ev.to
      //  let  ev = e || window.event;
      // console.log(that.touche.XStart,that.touch.YStart)

      // 首先对是否显示进行判断,如果没有显示则直接return
      // 其次,
      // 开始获取x和y 滑动的值
      // 判断如果x大于y证明是在往水平滑动,因此return 掉
      // 然后开始设置取到的block的值, 设置他的动画设置到最后之后，直接display：none或者设置 that.isShowMarker = false
    },
    hideMove(e) {
      let that = this;
      let ev = e || window.event;

      console.log(ev);
      // 获取偏移量
      that.touch.XMove = ev.touches[0].pageX - that.touch.XStart;
      that.touch.YMove = ev.touches[0].pageY - that.touch.YStart;

      if (Math.abs(that.touch.XMove) > Math.abs(that.touch.YMove)) {
        return false;
      }
      if (that.touch.YMove < 0) {
        return false;
      }
      that.touch.move = Math.abs(that.touch.YMove);
      //  console.log(XMove)
      //   console.log(YMove )
      //   console.log(that.$refs.markerBlock.style["transform"])
      console.log(that.$refs.markerBlock.style["height"]);
      that.$refs.markerBlock.style["transform"] = `translate(0,${
        that.touch.YMove
      }px)`;
      that.isShowMarker = false;
      //  setTimeout(()=>{
      //   that.isShowMarker = false
      //  },200)

      // console.log(

      // );
      // that.$refs.markerBlock.style["transform"]=`translate(0,0)`;
      // setTimeout(()=>{
      //    that.$refs.markerBlock.style["transform"]=`translate(0,0)`;
      // },0)
      // let clientHeight = that.$refs.markerBlock.target.clientHeight;
      // console.log(ev.target.clientHeight)
      // console.log(clientHeight)
    },
    hideEnd(e) {
      let that = this;
      that.$refs.markerBlock.style["transform"] = `translate(0,0)`;
      that.isShowMarker = false;
      //  that.$refs.markerBlock.style["transform"]=`translate(0,0)`;
      //  console.log(that.$refs.markerBlock.style["height"]);
      // let that = this;
      // let ev = e || window.event;
      // that.touch.XStart = 0;
      // that.touch.YStart = 0;
      // console.log(that.$refs.markerBlock.clientHeight);
      // if (that.touch.move < 15) {
      //   that.$refs.markerBlock.style["bottom"] = `${that.touch.move}px`;
      // } else {

      //   let i = 500;
      //   setInterval(() => {
      //     that.$refs.markerBlock.style["bottom"] = `-${i}px`;
      //     i++
      //   }, 500);
      // let i = 100;
      //  let timer = null;
      //  if(timer!=null){
      //    return false;
      //  }
      //  clearInterval(timer);
      //  timer =  setInterval(()=>{
      //   that.$refs.markerBlock.style["bottom"]=`-${i}px`;
      //   i++;
      //   if(that.$refs.markerBlock.clientHeight=0){
      //     clearInterval(timer);
      //   }
      // },500)
      // }
      //  let  ev = e || window.event;
      // console.log(ev)

      // 首先对是否显示进行判断,如果没有显示则直接return
      // 其次,
      // 开始获取x和y 滑动的值
      // 判断如果x大于y证明是在往水平滑动,因此return 掉
      // 然后开始设置取到的block的值, 设置他的动画设置到最后之后，直接display：none或者设置 that.isShowMarker = false
    }
  },
  components: {
    AppHeader,
    MarkerPage
  }
};
</script>
<style lang="scss" scoped>
.home-page {
  height: 100%;
  width: 100%;
  position: relative;
  .app-header {
    position: relative;
    z-index: 900;
  }
  .nav {
    position: relative;
    z-index: 950;
    .nav-title {
      height: 70px;
      width: 100%;
      background-color: #ffffff;
      // line-height: 70px;
      position: relative;
      z-index: 980;
      .left {
        font-size: 28px;
        // display: flex;
        // width: 500px;
        height: 70px;
        // justify-content: space-around;
        // align-items: center;
        color: #666666;
        text-align: center;
        .left-item {
          margin-left: 10px;
          margin-top: 12px;

          // width: 130px;
          padding-left: 18px;
          padding-right: 18px;

          line-height: 48px;
          height: 48px;
          float: left;
          background-color: #ffffff;
          border-radius: 24px;
          color: #666666;

          .iconfont {
            font-size: 28px;
            color: #ffffff;
            margin-right: 10px;
          }
          -webkit-transition: all 0.4s ease-in-out 0s;
          -moz-transition: all 0.4s ease-in-out 0s;
          -o-transition: all 0.4s ease-in-out 0s;
          -ms-transition: all 0.4s ease-in-out 0s;
          transition: all 0.4s ease-in-out 0s;
        }
        //   激活状态
        .current {
          background-color: #00af00;
          color: #ffffff;
        }
      }
      .right {
        position: absolute;
        right: 28px;
        top: 18px;
        z-index: 1000;
        // float: right;
        .right-icon {
          font-size: 30px;
          color: #999999;
        }
      }
    }
    // 二级导航
    .sub-nav {
      box-sizing: border-box;
      float: left;
      margin-left: 28px;
      margin-top: 20px;
      //   width: 370px;
      height: 74px;
      background-color: #ffffff;
      border-radius: 6px;
      padding: 6px;

      .sub-item {
        box-sizing: content-box;
        float: left;
        padding: 14px 34px;
        font-size: 28px;
        color: #666666;
        -webkit-transition: all 0.4s ease-in-out 0s;
        -moz-transition: all 0.4s ease-in-out 0s;
        -o-transition: all 0.4s ease-in-out 0s;
        -ms-transition: all 0.4s ease-in-out 0s;
        transition: all 0.4s ease-in-out 0s;
        border: solid 1px #ffffff;
      }
      .current {
        border: solid 1px rgba(0, 175, 0, 0.9);
      }
    }
  }
  //   地图
  .map {
    position: absolute;
    z-index: 18;
    background: #00ff11;

    height: 100%;
    width: 100%;
    top: 0;
    .iconfont {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 20;
      color: #00af00;
      font-size: 44px;
      margin-top: -22px;
      margin-left: -22px;
    }
  }
  // 详情
  .marker-detail {
    position: absolute;
    z-index: 900;
    bottom: 0;
  }
  .markerToggle-enter-active,
  .markerToggle-leave-active {
    transition: opacity 0.1s;
  }
  .markerToggle-enter, .markerToggle-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
</style>

