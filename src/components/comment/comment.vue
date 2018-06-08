<template>
    <div class="comment clearfix">
        <li class="item clearfix" :key="index" v-for="(item,index) of comments">
            <div class="avatar">
                    <img class="img" src="@/assets/imgs/avatar.png" alt="">
            </div>
                <div class="userinfo">
                    <p class="item name">{{item.user.username}}</p>
                    <p class="item say">
                       {{item.content}}
                    </p>
                </div>
            </li> 
          
   
            </div>
</template>
<script>
export default {
  name: "comment",
  props: ["comments"]
};
</script>

<style lang="scss" scoped>
.comment {
  width: 100%;
  padding-left: 28px;
  padding-right: 28px;
  box-sizing: border-box;
  .item {
    margin-top: 26px;
    .avatar {
      width: 20%;
      float: left;
      width: 64px;
      height: 64px;
      .img {
        border-radius: 50%;
        width: 64px;
        height: 64px;
        background-color: #666666;
      }
    }

    .userinfo {
      float: left;

      width: 80%;
      box-sizing: border-box;
      padding-left: 28px;
      .item {
        margin-top: 0;
        margin-bottom: 0;
      }
      .name {
        margin-top: 22px;
      }
      .say {
        margin-top: 30px;
      }
    }
  }
}
</style>
