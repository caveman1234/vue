import Vue from 'vue'
import Router from 'vue-router'
import One from '@/components/One';
import Tow from '@/components/Tow';
import Three from '@/components/Three';


Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'One',
        component: One
    }, {
        path: '/Tow',
        name: 'Tow',
        component: Tow
    }, {
        path: '/Three',
        name: 'Three',
        component: Three
    }]
})