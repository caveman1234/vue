<template>
	<div>
      <div @click="func">click</div>
      <div>{{odd}}</div>
      <div>{{even}}</div>


	</div>
</template>

<script>
import { mapGetters,mapMutations ,mapActions} from 'vuex'
    export default{
        data(){
            return {
                test5Msg:'test5555'
            }
        },
        methods: {
            func(){
                this.$store.state.msg += '-';
                this.$store.dispatch('ADDA',9);
            },
            mapMutations:({
                "ADD":"ADD"
            }),
            mapActions:([
                "ADDA"
            ])
        },
        computed:{
            ...mapGetters([
                "odd",
                "even"
            ])
        }
    }

</script>

<style scoped>


</style>
