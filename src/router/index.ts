import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import LoginView from '../views/LoginView.vue'
import AboutView from '../views/AboutView.vue'
import MapView from '../views/MapView.vue'
import AdmView from '../views/AdmView.vue'
import AccountView from '../views/AccountView.vue'
import PageNotFoundView from '../views/PageNotFoundView.vue'

const router = createRouter({
  history: createWebHistory(/*import.meta.env.BASE_URL*/),
  scrollBehavior() {
    return {
      top: 0,
      behavior: "smooth",
    }
  },
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/dashboard',
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
          path: '/conta',
          name: 'conta',
          component: AccountView
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
    }
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

// router.beforeEach((to, from, next) => {
//   if(isAuthenticated()) {
//     next()
//   } else {
//     router.push('login')
//   }
// })

export default router
