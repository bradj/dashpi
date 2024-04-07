import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/services/:id',
      name: 'service',
      component: () => import('../views/ServiceView.vue')
    },
    {
      path: '/:pathMatch(.*)*', // 404
      redirect: to => {
        // the function receives the target route as the argument
        // we return a redirect path/location here.
        return {
          name: 'home',
          query: { q: to.path }
        }
      },
    }
  ]
})

export default router
