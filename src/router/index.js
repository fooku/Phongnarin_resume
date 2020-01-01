import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/PageHome.vue'
import PageEducation from '@/views/PageEducation.vue'
import PageWorkExperience from '@/views/PageWorkExperience.vue'
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
  },
  {
    path: '/work-experience',
    name: 'work-experience',
    component: PageWorkExperience
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
