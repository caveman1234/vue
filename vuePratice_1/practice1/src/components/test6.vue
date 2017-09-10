<template>
  <div>
    <div @click="func">test6</div>
    <div>{{oddA}}--{{evenA}}</div>
    <div>{{oddB}}--{{evenB}}</div>
    <div>{{oddC}}--{{evenC}}</div>
    <div>{{moduleAArr1}}</div>

  </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions, mapState } from 'Vuex';
export default {
  data() {
    return {

    }
  },
  methods: {
    func() {
      // this.$store.commit('moduleA/ADDA', 10);
      // this.$store.commit('ADDB', 11);
      // this.$store.commit('ADDC', 12);
      // this.$store.dispatch('moduleA/ADDAMODULE');
      this.ADDA(2);
      this.ADDB(3);
      this.ADDC(4);
      this.ADDAMODULE()
    },

    ...mapMutations({
      ADDA: "moduleA/ADDA",
      ADDB: "ADDB",
      ADDC: "ADDC"
    }),
    ...mapActions({
      "ADDAMODULE": "moduleA/ADDAMODULE"
    })
  },
  computed: {
    ...mapState({
      moduleAArr1: state => state.moduleA.moduleAArr
    }),
    ...mapGetters({
      "oddA": "moduleA/oddA",
      "evenA": "moduleA/evenA",
      "oddB": "oddB",
      "evenB": "evenB",
      "oddC": "oddC",
      "evenC": "evenC"
    })
  },
  mounted() {
    window.test6 = this;
  }
}
</script>
