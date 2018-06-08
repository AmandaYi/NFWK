<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    this.test();
  },
  methods: {
    test() {
      console.log("没错,我就是赵哲云!");
    }
  }
};
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  .amap-icon {
    height: 90px !important;
    // background-color: #ff0;
    img {
      height: 90px !important;
      // background-color: #ff0;
      width: 90px !important;
    }
  }
}
</style>
