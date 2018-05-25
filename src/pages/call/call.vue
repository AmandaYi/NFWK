<template>
    <div> 呼叫服务 页面正常工作

        <div @click="toCallCompanyDetail()">点我跳转到下一页</div>
    </div>
</template>
<script>
    export default {
        name : "call-page",
        methods:{
            toCallCompanyDetail(){
                this.$router.push({name:"call-company-detail-page"})
            }
        }
    }
</script>

