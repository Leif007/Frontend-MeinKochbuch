import { reactive } from 'vue';
import axios from 'axios';

export function loadThings() {
    const endpoint = "https://meinkochbuch-backend.onrender.com/kochbuch";
    axios.get(endpoint)
      .then(response => {
          response.data.forEach(thing => {
              this.items.push(thing);
          });
      })
      .catch(error => console.log('error', error));
}

