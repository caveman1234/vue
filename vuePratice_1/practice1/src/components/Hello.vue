<template>
    <div>
        {{msg}}
        <Test1 :prop1="msg[0].split('').filter(v=>v!=='H').reverse()"></Test1>


        <div style="color:red;">----------------------router test1-------------------</div>

        <router-view></router-view>
    </div>
</template>

<script>
    import Test1 from '@/components/Test1';


    export default {
        components:{Test1},
        data () {
            return {
                msg: ['Hello']
            }
        }
    }
</script>

<style scoped>

</style>
