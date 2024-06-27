import axios from 'axios'

const url = import.meta.env.VITE_BACKEND_URL

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
        const backendUrl = 'https://meinkochbuch-backend.onrender.com';
        console.log(`Fetching details for: ${foodNames}`);
        return fetch(`${backendUrl}/searchAndGetDetails/${foodNames}`)
          .then(response => {
              if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
              }
              return response.json();
          })
          .then(data => {
              console.log(`Received data: ${JSON.stringify(data)}`);
              console.log(data);
              return data;
          })
          .catch(error => {
              console.error('Error:', error);
          });
    }

}


