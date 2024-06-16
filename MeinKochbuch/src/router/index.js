import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ShoppingListView from '../views/ShoppingListView.vue'



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
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/recipe',
      name: 'recipe',
      component: () => import('../components/recipe.vue') // Verwenden Sie die RecipeView-Komponente für diese Route
    },
    {
      path: '/shopping-list/:shoppingList',
      name: 'ShoppingList',
      component: ShoppingListView,
      props: true
    }

  ]
})

export default router
