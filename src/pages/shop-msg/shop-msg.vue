<template>
    <div class="shop-msg-page">
        <div class="nav-title">
        <shop-step-header></shop-step-header>
        </div>
        <p>公司名称
            <input type="text" placeholder="请输入公司名称">
        </p>
        <p>联系电话
            <input type="text" placeholder="请输入联系电话">
        </p>
        <p>法人姓名
            <input type="text" placeholder="请输入法人姓名">
        </p>
        <p>法人电话
            <input type="text" placeholder="请输入法人电话">
        </p>
        <p>所在区域
            <input type="text" placeholder="河南省鹤壁市浚县">
        </p>
        <p>详细地址
            <input type="text" placeholder="请输入公司名称">
        </p>
        <p>公司名称
            <input type="text" placeholder="请输入详细地址">
        </p>

    </div>
</template>
<script>
  
    import ShopStepHeader from "../../components/shop-step-header/shop-step-header";
    export default {
        name: 'shop-msg-page',
        components:{
            ShopStepHeader
        }
    }
</script>

<style lang="scss" scoped>
  @import "~@/assets/scss/varibles.scss";

.shop-msg-page{

}


  
</style>

