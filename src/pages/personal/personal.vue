<template>
    <div>
        <div class="">
            <div @click="login">登录</div>
            
        </div>
        <app-tabs></app-tabs>
    </div>
</template>
<script>
import AppTabs from "components/app-tabs/app-tabs";
    export default {
        name: "personal-page",
        data(){
            return{}
        },
        components:{
            AppTabs
        },
        methods:{
            login(){
                this.$router.push({name:"login-page"})
            }
        }
    }
</script>
<style lang="scss" scoped>

</style>
