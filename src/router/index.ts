import { authRoute } from '@/pages/auth/auth.route'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...authRoute],
})

export default router
