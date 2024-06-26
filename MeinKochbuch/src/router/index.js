import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/addRecipe',
      name: 'AddRecipe',
      component: () => import('../views/AddRecipeView.vue')
    },
    {
      path: '/recipes',
      name: 'AllRecipes',
      component: () => import('../views/RecipesView.vue')
    },
    {
      path: '/shoppinglist',
      name: 'ShoppingList',
      component: () => import('../views/ShoppingListView.vue')
    },

  ]
})

export default router
