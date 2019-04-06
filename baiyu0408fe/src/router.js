import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
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
