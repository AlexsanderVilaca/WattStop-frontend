import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/DashboardView.vue'
import LoginView from '../views/LoginView.vue'
import AboutView from '../views/AboutView.vue'
import MapView from '../views/MapView.vue'
import AdmView from '../views/AdmView.vue'
import PageNotFoundView from '../views/PageNotFoundView.vue'

const router = createRouter({
  history: createWebHistory(/*import.meta.env.BASE_URL*/),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView,
      children: 
      [
        {
          path: '/mapa',
          name: 'mapa',
          component: MapView
        },
        {
          path: '/adm',
          name: 'adm',
          component: AdmView
        },
        {
          path: '/about',
          name: 'about',
          component: AboutView
        },
        {
          path: '/:catchAll(.*)*',
          name: "PageNotFound",
          component: PageNotFoundView
        },
      ]
    },
    // {
    //   path: '/:catchAll(.*)*',
    //   name: "PageNotFound",
    //   component: PageNotFoundView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: AboutView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
  ]
})

export default router
