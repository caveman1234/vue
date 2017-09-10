<template>
  <div id="app">
    <div class="box">
      <div class="item">
        <router-link to="/">one</router-link>
      </div>
      <div class="item">
        <router-link to="/Tow">tow</router-link>
      </div>
      <div class="item">
        <router-link to="/Three">three</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'Vuex';
export default {
  methods: {},
  computed: {
    ...mapState({
      arrOne(state){return state.oneModule.arr}
    })
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.box {
  display: flex;
}

.item {
  flex: 1;
  text-align: center;
  border: 1px solid red;
  line-height: 30px;
  font-size: 20px;
}
</style>
