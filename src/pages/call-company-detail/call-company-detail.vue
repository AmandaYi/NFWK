<template>
    <div> 公司详情页面正常工作


                <div @click="toSubsrcibe()">点我跳转到下一页</div>
 
    </div>
</template>
<script>
    export default {
        name : "call-company-detail-page",
         methods:{
            toSubsrcibe(){
                this.$router.push({name:"call-subscribe-page"})
            }
        }
    }
</script>
