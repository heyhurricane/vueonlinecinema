import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartView from '../views/CartView.vue'
import MovieView from '../views/MovieView.vue'

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/cart',
    component: CartView
  },
  {
    path: '/movie',
    component: MovieView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
