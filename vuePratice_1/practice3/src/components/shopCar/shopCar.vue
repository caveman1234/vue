<template>
  <div class="shopCar">
    <div class="thead">
      <div @change="selectAll" class="check"><input v-model="selected" type="checkbox" id="inp">
        <label for="inp">全选</label>
      </div>
      <div class="goods">商品信息</div>
      <div class="hook"></div>
      <div class="price">单价</div>
      <div class="count">数量</div>
      <div class="total">金额</div>
      <div class="handle">操作</div>
    </div>
    <shopitem myProps="mypropssssss"></shopitem>
    <div class="total">
      {{total}}
    </div>
  </div>
</template>

<script>
import shopitem from '@/components/shopItem/shopItem';
import { mapMutations, mapState,mapGetters } from 'vuex';
export default {
  components: { shopitem },
  data() {
    return {
      selected: false
    }
  },
  methods: {
    selectAll() {
      this.SELECT_ALL_CHANGE(this.selected);
      this.SELECT_ALL();
    },
    ...mapMutations({
      SELECT_ALL: "shopCar/SELECT_ALL",
      SELECT_ALL_CHANGE: "shopCar/SELECT_ALL_CHANGE"
    })
  },
  computed: {
    ...mapState({
      selected1(state) {
        return state.selectAll;
      }
    }),
    ...mapGetters({
      total:"shopCar/total"
    })
  },
  mounted() {
    
  }
}
</script>


<style lang="scss" scoped>
@import './shopCar'
</style>

