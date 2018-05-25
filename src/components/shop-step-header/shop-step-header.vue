<template>
    <div class="shop-step-header">
      <div class="item">
          <span class="iconfont">1</span>
          <p class="desc">填写信息</p>
      </div>
      <div class="item">
           <span class="iconfont">2</span>
          <p class="desc">上传资质</p>
      </div>
      <div class="item">
           <span class="iconfont">3</span>
          <p class="desc">经营范围</p>
      </div>
    </div>
</template>
<script>
export default {
  name: "shop-step-header",
  props: {}
};
</script>
<style lang="scss" scoped>
.shop-step-header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: row;
  text-align: center;
  .item {
    width: 33%;
    text-align: center;
    .iconfont {
      display: block;
      width: 64px;
      height: 64px;
      margin: 0 auto;
      line-height: 64px;
      background-color: #2dbb55;
      border-radius: 50%;
      font-size: 36px;
      color: #fefefe;

    }
    .desc {
      margin-top: 22px;
   
	font-size: 28px;
 
 
	letter-spacing: 0px;
	color: #2dbb55;
 
    }
  }
}
</style>
