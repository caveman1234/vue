<template>
  <div>
    <div>tow</div>
    <input type="text" v-model="inp">
    <div>{{inpValue}}</div>
  </div>
  
</template>
<script>
export default {
  data(){
    return {
      inpValue:''
    }
  },
  computed:{
    inp:{
      get(){
        return this.inpValue
      },
      set(v){
        this.inpValue = v;
        return v
      }
    }
  },
  mounted(){

  }

}
</script>
