<template>
  <!-- v-bind:class="{ active: isActive, 'text-danger': hasError }"> -->
    <div class="app-tabs">
    <div class="tabs">
        <li class="item"  ref="tab0"  @click="toggle(0)">
            <i class='iconfont icon-shouye-1'></i>
            <p class="desc">首页</p>
        </li> 
          <li class="item" ref="tab1"   @click="toggle(1)">
            <i class="iconfont icon-jiameng-1" ></i>
            <p class="desc">服务商入驻</p>
        </li>
          <li class="item call-item" ref="tab2"  @click="toggle(2)">
            <i class="iconfont call"  ></i>
            <p class="desc">呼叫服务</p>
        </li>
          <li class="item" ref="tab3"  @click="toggle(3)">
            <i class="iconfont icon-gongqiu-1" ></i>
            <p class="desc">供求</p>
        </li>
          <li class="item" ref="tab4" @click="toggle(4)">
            <i class="iconfont icon-personal"  ></i>
            <p class="desc">我的</p>
        </li>
    </div>
    </div>
</template>
<script>
export default {
  name: "app-tabs",
  data() {
    return {};
  },

  methods: {
    toggle(id) {
      let tab0 = this.$refs.tab0;
      let tab1 = this.$refs.tab1;
      let tab2 = this.$refs.tab2;
      let tab3 = this.$refs.tab3;
      let tab4 = this.$refs.tab4;
      switch (id) {
        case 0:
         this.$router.push({name:"home-page"})
          tab0.firstChild.className = "iconfont icon-home current";
          tab0.lastChild.className = "desc current";

          tab1.firstChild.className = "iconfont icon-jiameng-1";
          tab1.lastChild.className = "desc";

        //   tab2.firstChild.className = "call";
        //   tab2.lastChild.className = "desc";

          tab3.firstChild.className = "iconfont icon-gongqiu-1";
          tab3.lastChild.className = "desc";

          tab4.firstChild.className = "iconfont icon-personal";
          tab4.lastChild.className = "desc";
         
          break;
        case 1:
         this.$router.push({name:"shop-page"})
          tab0.firstChild.className = "iconfont  icon-shouye-1";
          tab0.lastChild.className = "desc";

          tab1.firstChild.className = "iconfont icon-jiameng current";
          tab1.lastChild.className = "desc current";

        //   tab2.firstChild.className = "call";
        //   tab2.lastChild.className = "desc";

          tab3.firstChild.className = "iconfont icon-gongqiu-1";
          tab3.lastChild.className = "desc";

          tab4.firstChild.className = "iconfont icon-personal";
          tab4.lastChild.className = "desc";
          break;
        case 2:
         this.$router.push({name:"call-page"})
          tab0.firstChild.className = "iconfont  icon-shouye-1";
          tab0.lastChild.className = "desc";

          tab1.firstChild.className = "iconfont icon-jiameng-1";
          tab1.lastChild.className = "desc";

        //   tab2.firstChild.className = "iconfont call";
        //   tab2.lastChild.className = "desc current";
        //  console.log(tab2.firstChild.style.backgroundImage='../../assets/imgs/farm-item1.png')
    //    tab2.firstChild.style.backgroundImage='../../assets/imgs/farm-item1.png';
          tab3.firstChild.className = "iconfont icon-gongqiu-1";
          tab3.lastChild.className = "desc";

          tab4.firstChild.className = "iconfont icon-personal";
          tab4.lastChild.className = "desc";
          break;
        case 3:
               this.$router.push({name:"supply-demand-page"})
       
          tab0.firstChild.className = "iconfont icon-shouye-1";
          tab0.lastChild.className = "desc";

          tab1.firstChild.className = "iconfont icon-jiameng-1";
          tab1.lastChild.className = "desc";

        //   tab2.firstChild.className = "call";
        //   tab2.lastChild.className = "desc";
   
          tab3.firstChild.className = "iconfont icon-gongqiu current";
          tab3.lastChild.className = "desc";

          tab4.firstChild.className = "iconfont icon-personal";
          tab4.lastChild.className = "desc";
          break;
        case 4:

           this.$router.push({name:"personal-page"})
          tab0.firstChild.className = "iconfont icon-shouye-1";
          tab0.lastChild.className = "desc";

          tab1.firstChild.className = "iconfont icon-jiameng-1";
          tab1.lastChild.className = "desc";

        //   tab2.firstChild.className = "call";
        //   tab2.lastChild.className = "desc";

          tab3.firstChild.className = "iconfont icon-gongqiu-1";
          tab3.lastChild.className = "desc";

          tab4.firstChild.className = "iconfont icon-wo current";
          tab4.lastChild.className = "desc current";
        
          break;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
// @import "@/assets/iconfont/iconfont.css";
@import "../../assets/iconfont/iconfont.css";
@import "~@/assets/scss/varibles.scss";
.app-tabs {
  width: 100%;
  height: 100px;
  .tabs {
    position: fixed;
    bottom: 0;
    display: flex;
    height: 100px;
    justify-content: space-around;

    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    background: #ffffff;
    .item {
      text-align: center;
      .iconfont {
        display: block;
        margin-top: 8px;
        font-size: 48px;
        color: $color;
      }
      .desc {
        margin-top: 6px;
        margin-bottom: 4px;
      }
      .current {
        color: $currentlv;
      }
      .call {
        // font-size: 100px;
        // margin-top: 50px;
        //  overflow: visible;
 
      width: 80px;
      height:80px;
         background-color: #cccccc;
         margin: 0 auto;
      background-image: url("../../assets/imgs/call.png");
      background-size: 80px 80px;
    //   background-position: center;
    //   background-repeat: no-repeat;
    //   position: relative;
    //   top: -35px;
 
      border-radius: 50%;
    margin-top: -26px;
    margin-bottom: 16px;
    }
     
    }
     .call-item{
            
     }
  }
}
</style>
