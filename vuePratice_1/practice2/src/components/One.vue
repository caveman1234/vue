<template>
  <div>
    <div>One</div>
    <div @click="func">action dispatch ADDA</div>
    <div>arrone-{{arrOne}}</div>
    <div>arrtow-{{arrTow}}</div>

  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'Vuex';
export default {
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



