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
    searchAndGetDetails(foodName) {
    fetch(`${url}/searchAndGetDetails/${foodName}`)
      .then(response => response.json())
      .then(data => {
          console.log(data);
      })
      .catch(error => {
          console.error('Error:', error);
      });
}
}


