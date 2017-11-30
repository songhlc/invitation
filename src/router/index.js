import Vue from 'vue'
import Router from 'vue-router'
import p1 from '@/components/p1'
import p2 from '@/components/p2'
import p3 from '@/components/p3'
import p4 from '@/components/p4'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'p1',
      component: p1
    },{
      path: '/p2',
      name: 'p2',
      component: p2
    },{
      path: '/p3',
      name: 'p3',
      component: p3
    },{
      path: '/p4',
      name: 'p4',
      component: p4
    }
  ]
})
