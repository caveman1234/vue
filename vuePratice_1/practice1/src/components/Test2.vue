<template>
   <div>
      <el-button @click="func" size="small" type="primary">click me</el-button>
      <el-button></el-button>
      <router-view></router-view>
      <test5></test5>


   </div>
</template>


<script>
//   const test5 = ()=>({
//      component:import('@/components/Test5'),
//      delay:100,
//      timeout:7000
//   });
   export default{
      props: ['prop'],
      components: {
//          test5:()=>import('@/components/test5')
         test5: resolve => require(['@/components/Test5'], resolve),
//         test5
      },
      data(){
         return {}
      },
      methods: {
         func(){
            this.$router.push({name: 'test2_1', params: {aa: 222}})
         }
      },
      mounted(){

      }
   }

</script>

<style scoped>


</style>
