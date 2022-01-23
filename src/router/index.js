import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home/Home.vue'
import Registration from '@/components/Registration/Registration.vue'
import Authorization from '@/components/Authorization/Authorization.vue'
import GeneralMain from '@/components/GeneralMain/GeneralMain.vue'
import Profile from '@/components/Profile/Profile.vue'
import Statistics from '@/components/Statistics/Statistics.vue'
import Tasks from '@/components/Tasks/Tasks.vue'
import Training from '@/components/Training/Training.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Authorization',
    name: 'Authorization',
    component: Authorization
  },
  {
    path: '/Registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/Main',
    name: 'GeneralMain',
    component: GeneralMain
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/Statistics',
    name: 'Statistics',
    component: Statistics
  },
  {
    path: '/Tasks',
    name: 'Tasks',
    component: Tasks
  },
  {
    path: '/Training',
    name: 'Training',
    component: Training
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
