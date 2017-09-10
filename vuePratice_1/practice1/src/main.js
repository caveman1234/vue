// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import util from './util/util';
import Vuex from 'vuex';

// import { store } from '@/store/store';
import store from '@/store/store1';
Vue.use(ElementUI);
Vue.use(util);



Vue.config.productionTip = false;






new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
});