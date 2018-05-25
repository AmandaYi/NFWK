<template>
  <div>
    <input type="text" ref="search-box" class="search-box" :placeholder="value">
    <!--<div class="icon"><img :src="iconUrl" alt=""></div>-->
  </div>
</template>

<script>
export default {
  name: 'search-box',
  data() {
    return {
      // iconUrl: '@/assets/imgs/search.png'
    }
  },
  props: {
    value: {
      type: String,
      default : '搜索你要找的商品'
    },
    isFocus: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .search-box{
    width: 458px;
    height: 64px;
    line-height: 64px;
    border-radius: 30px;
    background-color: #eee;
    padding-left: 52px;
  }
</style>
