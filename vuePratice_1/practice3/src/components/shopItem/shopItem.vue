<template>
    <div>
        <div>{{myProps}}</div>
        <div v-for="(item,i) in shopItem" :key="item.name" class="container">
            <div class="title">
                <input @change="selectItemAll(i)" type="checkbox" v-model="item.selected">
                <span class="caoshi">天猫超市</span>
                <span>店铺：</span>
                <span>{{item.name}}</span>
            </div>
            <div class="details">
                <div v-for="(item1,index1) in item.details" :key="item1.imgUrl" class="detailsContent" :class="{backColor:item1.selected}">
                    <div class="check">
                        <input @change="selectItemChange" type="checkbox" v-model="item1.selected">
                    </div>
                    <div class="goods">
                        <div class="img">
                            <a :href="item1.imgUrl">
                                <img :src="item1.imgUrl" alt="">
                            </a>
                        </div>
                        <div class="text">
                            <a href="#">
                                {{item1.name}}
                            </a>
                        </div>
                    </div>
                    <div class="hook"></div>
                    <div class="price">¥{{item1.price}}</div>
                    <div class="count">

                        <div class="top">
                            <span @click="minus(i,index1)" class="minus" :class="{fff0e7:item1.limitCount<1000}">-</span>
                            <input type="text" v-model="item1.count">
                            <span @click="plus(i,index1)" class="plus" :class="{fff0e7:item1.limitCount<1000}">+</span>
                        </div>
                        <div class="bottom" :class="{fff0e7:item1.limitCount<1000}" v-if="item1.limitCount<1000">限购{{item1.limitCount}}件</div>

                    </div>
                    <div class="total">
                        <div class="top">¥{{item1.price*item1.count|tofixed}}</div>
                        <div class="bottom">({{item1.weight}}kg)</div>
                    </div>
                    <div class="handle">
                        <div>加入收藏夹</div>
                        <div @click="del(i,index1)">删除</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
export default {
    props:['myProps'],
    data() {
        return {}
    },
    methods: {
        minus(index, index1) {
            this.MINUS({ index, index1 })
        },
        plus(index, index1) {
            this.PLUS({ index, index1 });
        },
        selectItemAll(index) {
            this.SELECT_ITEM_ALL(index)
        },
        selectItemChange() {
            this.SELECT_ITEM_CHANGE();
        },
        del(index,index1){
            this.DEL({index,index1})
        },
        ...mapMutations({
            SELECT_ITEM_ALL: "shopCar/SELECT_ITEM_ALL",
            SELECT_ITEM_CHANGE: "shopCar/SELECT_ITEM_CHANGE",
            MINUS: "shopCar/MINUS",
            PLUS: "shopCar/PLUS",
            DEL: "shopCar/DEL"
        })
    },
    computed: {
        ...mapState({
            shopItem(state, rootGetters) {
                return state.shopCar.items
            },
            shopItemCopy(state, rootGetters) {
                return state.shopCar.itemsCopy
            }
        })

    },
    mounted() {

    },
    filters: {
        tofixed(value) {
            return value.toFixed(2);
        }
    }
}
</script>
<style lang="scss" scoped>
@import './shopItem';
</style>
