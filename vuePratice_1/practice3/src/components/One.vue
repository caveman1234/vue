<template>
  <div>
      <div>
          <h2>One</h2>
          <Tow :towArr='towArr' :threeArr='threeArr'></Tow>
          <Three :threeArr='threeArr'></Three>
      </div>
  </div>
</template>
<script>
import Tow from '@/components/Tow';
import Three from '@/components/Three';
export default {
    components:{Tow,Three},
  data(){
      return{
          towArr:[1,2,3,4],
          threeArr:[5,6,7,8]

      }
  }
}
</script>

