<template>
	<div>
      <div>test2-1</div>
      <el-button @click="func">test2-1btn-click</el-button>


	</div>
</template>

<script>
    export default{
        data(){
            return {}
        },
        methods: {
            func(){
                this.$router.push({name:'test2_2',params:{msg:'test2-2-params'}})

            }
        }
    }

</script>

<style scoped>


</style>
