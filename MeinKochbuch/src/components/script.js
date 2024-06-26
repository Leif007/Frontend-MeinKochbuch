import { reactive } from 'vue';
import axios from 'axios';

export function loadThings() {
    const endpoint = "https://meinkochbuch-backend.onrender.com/";
    axios.get(endpoint)
      .then(response => {
          response.data.forEach(thing => {
              this.items.push(thing);
          });
      })
      .catch(error => console.log('error', error));
}
export async function createRecipe(recipe) {
    const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL // 'http://localhost:8080' in dev mode
    const endpoint = baseUrl + '/recipes'
    const response = await axios.post(endpoint, recipe);
    return response.data;
}
