import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import A from '@/components/A'
import A1 from '@/components/A1'
import A2 from '@/components/A2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/A',
      name: 'A',
      component: A,
      children:[
        { path:'/',name:'A',component:A},
        { path:'A1',name:'A1',component:A1},
        { path:'A2',name:'A2',component:A2}

      ]
    }
  ]
})
