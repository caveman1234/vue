import Vuex from 'vuex';
import Vue from 'vue';
import one from './one/index';
import tow from './tow/index';
import three from './three/index';
Vue.use(Vuex);
export let store = new Vuex.Store({
    modules: {
        oneModule: one,
        towModule: tow,
        threeModule: three
    }
});