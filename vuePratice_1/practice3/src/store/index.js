import Vue from 'vue';
import Vuex from 'vuex';
import shopCar from './shopCar/index';
Vue.use(Vuex);
let store = new Vuex.Store({
    modules: {
        shopCar: shopCar
    }
});
export default store;