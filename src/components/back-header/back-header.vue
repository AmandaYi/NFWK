<template>
    <div class="back-header">
            <i @click="back()" class="iconfont icon-fanhui"> </i>

    </div>
    
</template>
<script>
export default {
  name: "back-header",
  data() {
    return {};
  },
  methods:{
      back(){
          this.$router.go(-1);
        // router.back()
      }
  }
};
</script>

<style lang="scss" scoped>
.back-header {
  width: 100%;
  height: 88px;
  background-color: #ffffff;
  .iconfont {
    display: block;
    font-size: 32px;
    color: #7e7e7e;
    line-height: 88px;
    height: 88px;
    width: 50px;
    // background: #ff0;
  }
}
</style>
