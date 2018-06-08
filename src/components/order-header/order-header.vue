<template>
    <div class="order-header">
    <i class="iconfont icon-fanhui" @click="back()"></i>
    <h2 class="title">{{title}}</h2>
    <div class="diy-iconfont">
        <slot></slot>
    </div>
    </div>
</template>
<script>
export default {
  name: "order-header",
  props: ["title"],
  methods: {
    back() {
      this.$router.back(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
.order-header {
  width: 100%;
  height: 88px;

  background-color: #ffffff;
  position: relative;
  .icon-fanhui {
    position: absolute;
    top: 28px;
    left: 28px;
    font-size: 30px;
    font-weight: 700;
    color: #333333;
  }
  .title {
    height: 88px;
    line-height: 88px;
    margin-top: 0;
    margin-bottom: 0;
    text-align: center;
  }
  .diy-iconfont {
    position: absolute;
    top: 28px;
    right: 28px;
    font-size: 30px;
    font-weight: 700;
    color: #333333;
  }
}
</style>
