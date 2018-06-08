 import Vue from 'vue';
 import Vuex from 'vuex';

 Vue.use(Vuex);
 const state = {
   //  服务商的简陋信息
   marker: {

   },
   // 服务的类别
   subscribeCat: null,

   // 购物车列表
   cartList: null

 }
 const mutations = {
   // 对marker进行设置,为了传递参数
   updateMarker(state, marker) {
     console.log(marker);
     state.marker = marker;
   },

   // 对选中的服务类型id进行设置
   updateSubscribeCat(state, subscribeCat) {
     console.log(subscribeCat);
     state.subscribeCat = subscribeCat;
   },

   // 保存购物车的数据
   updateCartList(state, cartList) {
     console.log(cartList);
     state.cartList = cartList;
   }
 }
 export default new Vuex.Store({
   state,
   mutations
 })
