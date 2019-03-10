import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import CompContainer from '@/components/CompContainer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
      children:[
        {
          path:"",
          name:"CompContainer",
          component:CompContainer
        }
      ]
    }
  ]
})
