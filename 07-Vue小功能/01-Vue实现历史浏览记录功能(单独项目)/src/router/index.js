import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../views/List.vue'
import History from '../views/History.vue'
import Detail from '../views/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/list'
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/list/:id',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/history',
    name: 'History',
    component: History
  },
]

const router = new VueRouter({
  routes
})

export default router
