import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Форма'
      }
    },
    {
      path: '/preview',
      name: 'preview',
      component: () => import('../views/PreviewView.vue'),
      meta: {
        title: 'Превью'
      }
    }
  ]
})

router.beforeEach((to) => {
  document.title = (to.meta.title as string) || 'Alef Test'
})

export default router
