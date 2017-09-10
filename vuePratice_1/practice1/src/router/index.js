import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import App from '@/App'

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            name: '',
            component: resolve => require(['@/components/Test1'], resolve)
        },
        {
            path: '/Test1',
            name: 'Test1',
            component: resolve => require(['@/components/Test1'], resolve),
        },
        {
            path: '/Test2',
            name: 'Test2',
            component: resolve => require(['@/components/Test2'], resolve),
            children: [{
                    path: '/test2_1',
                    name: 'test2_1',
                    component: resolve => require(['@/components/Test2_1'], resolve)
                },
                {
                    path: '/test2_2',
                    name: 'test2_2',
                    component: resolve => require(['@/components/Test2_2'], resolve),
                }
            ]
        },
        {
            path: '/Test3',
            name: 'Test3',
            component: resolve => require(['@/components/Test3'], resolve)
        },
        {
            path: '/Test4',
            name: 'Test4',
            component: resolve => require(['@/components/Test4'], resolve)
        },
        {
            path: '/Test5',
            name: 'Test5',
            component: resolve => require(['@/components/Test5'], resolve)
        },
        {
            path: '/Test6',
            name: 'Test6',
            component: resolve => require(['@/components/Test6'], resolve)
        }
    ]
})