<template>
  <div>
    <div>One</div>
    <div @click="func">action dispatch ADDA</div>
    <div>arrone-{{arrOne}}</div>
    <div v-aa>arrtow-{{arrTow}}</div>
    <div>{{mixinO}}</div>
    <div>{{mixinD}}</div>

  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'Vuex';
let mixin = {
  data(){
    return {
      mixinD:'mixinD'
    }
  },
  mounted(){
    console.log('==========================');
  }
}
export default {
  mixins:[mixin],
  data(){
    return{
      mixinO:'mixinO'
    }
  },
  methods: {
    func() {
      this.ADDA(10)
    },
    ...mapMutations({
      ADD: "oneModule/ADD"
    }),
    ...mapActions({
      ADDA: "oneModule/ADDA"
    })
  },
  computed: {
    ...mapState({
      arrOne(state,rootGetters) {
        return state.oneModule.arr
      },
      arrTow(state,rootGetters) {
        return state.towModule.arr
      }
    }),
    ...mapGetters({
      oddOne: "oneModule/even"
    })
  }
}
</script>



