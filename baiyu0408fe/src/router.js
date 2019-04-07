import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/saytoby',
      component: () => import('./views/SayToBy.vue')
    },
    {
      path: '/list',
      component: () => import('./views/List.vue')
    }
  ]
})
