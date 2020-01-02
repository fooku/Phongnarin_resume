import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/PageHome.vue'
import PageEducation from '@/views/PageEducation.vue'
import PageWorkExperience from '@/views/PageWorkExperience.vue'
import PageSkills from '@/views/PageSkills.vue'
import PageCertification from '@/views/PageCertification.vue'

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
  },
  {
    path: '/skills',
    name: 'skills',
    component: PageSkills
  },
  {
    path: '/certification',
    name: 'certification',
    component: PageCertification
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
