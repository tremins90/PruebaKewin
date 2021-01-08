import Vue from 'vue'
import VueRouter from 'vue-router'
import Principal from "@/views/Principal";
import Albumes from "@/views/Albumes";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Principal',
    component: Principal
  },
  {
    path: '/Albumes',
    name: 'Albumes',
    component:Albumes
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
