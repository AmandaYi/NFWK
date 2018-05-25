<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
     methods: {
      setComponent: function (component) {
        curComponent = component;
      }
    },
};
window["receiveMsgFromNative"] = function(msg) {
  curComponent.receiveMsgFromParent(msg);
};
</script>

<style>
#app {
}
</style>
