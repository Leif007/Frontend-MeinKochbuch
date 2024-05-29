<script setup>
import {loadThings} from "@/components/script.js";
import { ref } from 'vue';
let showRecipeName = true;
let showForm = ref(false);
let recipes = [
  {
    name: "Spaghetti Carbonara",
    preparationTime: "20 Minuten",
    cookingTime: "15 Minuten",
    description: "Spaghetti Carbonara ist ein klassisches italienisches Nudelgericht, das in der Regel aus Spaghetti, Guanciale, Ei, Pecorino Romano und Pfeffer zubereitet wird. Die Zutaten werden in einer Pfanne gemischt, bis sie eine cremige Konsistenz haben. Das Gericht wird oft mit zusätzlichem Pecorino Romano und Pfeffer garniert.",
    ingredients: [
      "400g Spaghetti",
      "200g Guanciale",
      "4 Eier",
      "100g Pecorino Romano",
      "Pfeffer"
    ],
    instructions: [
      "Die Spaghetti in einem großen Topf mit kochendem Salzwasser al dente kochen.",
      "In der Zwischenzeit das Guanciale in einer Pfanne bei mittlerer Hitze knusprig braten.",
      "Die Eier in einer Schüssel verquirlen und den geriebenen Pecorino Romano hinzufügen.",
      "Die gekochten Spaghetti abgießen und in die Pfanne mit dem Guanciale geben. Die Ei-Käse-Mischung darüber gießen und gut vermengen.",
      "Mit Pfeffer würzen und sofort servieren."
    ]
  }
];
let newRecipe = {
  name: "",
  preparationTime: "",
  cookingTime: "",
  description: "",
  ingredients: [],
  instructions: []
};

function addRecipe() {
  recipes.push({...newRecipe});
  newRecipe = {
    name: "",
    preparationTime: "",
    cookingTime: "",
    description: "",
    ingredients: [],
    instructions: []
  };
  showForm.value = false;
}
function showAddRecipeForm() {
  showForm.value = true;
}


</script>

<template>
  <div class="recipeheader">
    <h1>Rezepte</h1>
      <button @click="loadThings">Load recipes</button>
    <button @click="showAddRecipeForm">Add Recipe</button>
    <div class="addrecipe">
    <form @submit.prevent="addRecipe" v-if="showForm">
      <label>Name: <input v-model="newRecipe.name" required /></label>
      <label>Preparation Time: <input v-model="newRecipe.preparationTime" required /></label>
      <label>Cooking Time: <input v-model="newRecipe.cookingTime" required /></label>
      <label>Description: <input v-model="newRecipe.description" required /></label>
      <label>Ingredients: <input v-model="newRecipe.ingredients" required /></label>
      <label>Instructions: <input v-model="newRecipe.instructions" required /></label>
      <button type="submit">Add Recipe</button>
    </form>
    </div>

  </div>
  <body class="body">
  <div class="recipename" v-if="showRecipeName">
      <h1 class>Rezepte</h1>
    <div v-for="(recipe, index) in recipes" :key="index">
      <h2>{{ recipe.name }}</h2> <br>
    </div>
      <p>Spaghetti Carbonara ist ein klassisches italienisches Nudelgericht, das in der Regel aus Spaghetti, Guanciale, Ei, Pecorino Romano und Pfeffer zubereitet wird. Die Zutaten werden in einer Pfanne gemischt, bis sie eine cremige Konsistenz haben. Das Gericht wird oft mit zusätzlichem Pecorino Romano und Pfeffer garniert.</p>
      <br>
  </div>
    <div class="zubereitung">
        <h3>Zubereitung</h3>
        <p>1. Die Spaghetti in einem großen Topf mit kochendem Salzwasser al dente kochen.</p>
        <p>2. In der Zwischenzeit das Guanciale in einer Pfanne bei mittlerer Hitze knusprig braten.</p>
        <p>3. Die Eier in einer Schüssel verquirlen und den geriebenen Pecorino Romano hinzufügen.</p>
        <p>4. Die gekochten Spaghetti abgießen und in die Pfanne mit dem Guanciale geben. Die Ei-Käse-Mischung darüber gießen und gut vermengen.</p>
        <p>5. Mit Pfeffer würzen und sofort servieren.</p>
    </div>
    <div v-for="(recipe, index) in recipes" :key="index">
        <h2>{{ recipe.name }}</h2>
    <div class="recipeingredients">
      <h3>Dauer</h3>
        <ul>
            <li> Zubereitungszeit: {{ recipe.preparationTime }}</li>
            <li> Kochzeit: {{ recipe.cookingTime }}</li>
        </ul>
    </div>
    </div>
    <div class="zutaten">
      <h3>Zutaten</h3>
      <ul>
        <li>400g Spaghetti</li>
        <li>200g Guanciale</li>
        <li>4 Eier</li>
        <li>100g Pecorino Romano</li>
        <li>Pfeffer</li>
      </ul>
    </div>
</body>



</template>

<style>
.addrecipe
{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 3rem;
  padding: 50px;
}
.addrecipe button[type="submit"] {
  margin-top: 20px;
  align-items: flex-start;
}
.body {
  margin-top: 0rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Adjust this line */
  gap: 20px; /* Adjust as needed */
  background-color: whitesmoke;
  padding: 10px;
}
.recipeheader {
    min-height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: navajowhite;
}
@media (min-width: 1024px) {
    .recipeheader {
        height: 100vh;
      justify-content: center;
        display: flex;
        align-items: center;
    }
}
</style>