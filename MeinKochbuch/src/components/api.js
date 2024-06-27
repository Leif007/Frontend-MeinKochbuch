import axios from 'axios'

const url = import.meta.env.VITE_APP_BACKEND_BASE_URL

const apiClient = axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/json'
    }
})



export default {
    getRoot() {
        return apiClient.get('/')
    },

    newRecipe(newRecipe) {
        return apiClient.post('/recipe', {newRecipe})
    },

    allRecipes() {
        return apiClient.get('/recipes')
    },
    searchAndGetDetails(foodNames) {
        return apiClient.get(`/searchAndGetDetails/${foodNames}`)
          .then(response => response.json())
          .catch(error => {
              console.error('Error:', error);
              return []; // Return an empty list if the request fails
          });
    }
}


