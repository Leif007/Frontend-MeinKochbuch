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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },{
      path: '/recipe', // Definieren Sie den Pfad für die RecipeView-Komponente
      name: 'recipe', // Geben Sie der Route einen Namen
      // route level code-splitting
      // this generates a separate chunk (recipe.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/recipe.vue') // Verwenden Sie die RecipeView-Komponente für diese Route
    }

  ]
})

export default router
