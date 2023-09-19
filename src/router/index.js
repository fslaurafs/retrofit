import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import IdeiaView from '../views/IdeiaView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {title: "Retrofit"}
  },
  {
    path: '/retrofit-ideia',
    name: 'Retrofit - Ideia',
    component: IdeiaView,
    meta: {title: "Retrofit - Ideia"}
  },
  {
    path: '/retrofit-about',
    name: 'Retrofit - About',
    component: AboutView,
    meta: {title: "Retrofit - Sobre"}
  },
  // {
  //   path: '/iot',
  //   name: 'about',
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  //   }
  // }
]

const router = new VueRouter({
  mode: 'history',
  // base: proccess.env.BASE_URL,
  routes,
  scrollBehavior() { return { x: 0, y: 0 } }
})

export default router
