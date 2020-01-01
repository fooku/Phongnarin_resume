import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/PageHome.vue'
import PageEducation from '../views/PageEducation.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/education',
    name: 'education',
    component: PageEducation
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
