<template>
  <div class="subnav-title">
     <div class="item">
         <div class="title">{{title}}</div>
         <!-- <router-link class="link" :to="link"></router-link> -->
         <div class="link" :to="link"></div>
     </div>
  </div>
</template>

<script>
export default {
  name: "subnav-title",
  props: ["title", "link"]
};
</script>

<style scoped lang="scss">
.subnav-title {
  height: 80px;
  width: 100%;
  display: block;
  .item {
    .title {
      font-size: 32px;

      line-height: 80px;

      color: #242424;
    }
    .link {
      font-size: 26px;

      line-height: 80px;

      color: #999999;
    }
  }
}
</style>