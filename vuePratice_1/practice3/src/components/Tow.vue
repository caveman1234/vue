<template>
  <div>
      <div>
          {{towArr}}
      </div>
      <div @click="func">click</div>
  </div>
</template>
<script>
export default {
    props:['towArr','threeArr'],
  data(){
      return{
          
      }
  },
  methods:{
      func(){
          this.threeArr.push(9);
      }
  }
}
</script>