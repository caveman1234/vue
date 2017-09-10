<template>
    <div>
        <div>{{msg}}</div>
    </div>
</template>

<script>
    import Test1 from '@/components/Test1';


    export default {
        components:{Test1},
        data () {
            return {
                msg: ['Main']
            }
        }
    }
</script>

<style scoped>

</style>
