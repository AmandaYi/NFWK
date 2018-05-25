<template>
  <div class="push-btn">
     <div class="item">{{text}}</div>
  </div>
</template>

<script>
export default {
  name: "push-btn",
  props:["text"]
 
};
</script>

<style scoped lang="scss">
 
.push-btn{
	width: 659px;
	height: 90px;
	background-color: #2dbb55;
    border-radius: 45px;
 
	font-size: 34px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 90px;
	letter-spacing: 0px;
    color: #ffffff;
    text-align: center;
 
}
</style>