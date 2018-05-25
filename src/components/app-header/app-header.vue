<template>
<div class="app-header">
    <i class="iconfont icon-fanhui" @click="back()"></i>
</div>
</template>

<script>
    export default {
        name: 'app-header',
        methods:{
            back(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/varibles.scss";

.app-header{
  width: 100%;
	height: 88px;
	// background-color: #ff0;
 
    .iconfont{
        display: block;
        height: 88px;
        width: 88px;
        line-height: 88px;
        font-size: 34px;
        color:  #000;
    }

}
</style>
