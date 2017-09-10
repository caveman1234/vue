<template>
   <div>
      <h3 @click="func">myinput</h3>
      <slot name="one" text="hello from child"></slot>
      <slot name="two" v-for="(item,index) in inpData" :$name="item.name" :index="index"></slot>


   </div>
</template>

<script>
   export default{
      props:['inpData'],
      data(){
         return {
            slotArr: [{name: 'slot1', value: 1}, {name: 'slot2', value: 2}, {name: 'slot3', value: 3},]

         }
      },
      methods: {
         func(){
             this.$emit('inpClick','haha')

         }

      }
   }

</script>

<style scoped>


</style>
