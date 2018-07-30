<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <a href="./index1.html" target="_blank">to index1.html</a>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name:"App",
  data(){
    return{

    }
  },
  mounted(){
  }
}
</script>

<style lang="less">

</style>
