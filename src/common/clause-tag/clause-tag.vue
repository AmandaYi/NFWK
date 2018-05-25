<template>
  <div class="clause-tag">
     <p class="item">点击“下一步”即表示您同意协议：</p>
     <p class="user">用户服务协议</p>
  </div>
</template>

<script>
export default {
  name: "clause-btn"
};
</script>

<style scoped lang="scss">
.clause-tag {
  font-size: 24px;
  color: #2d2d2d;
  letter-spacing: 0px;
  text-align: center;
  margin: 0 auto;
  .item{
      margin: 0 auto;
  }
  .user {
    margin: 10px auto;
    color: #2dbb55;
    text-decoration: underline;
    padding-bottom: 2px;
  }
}
</style>