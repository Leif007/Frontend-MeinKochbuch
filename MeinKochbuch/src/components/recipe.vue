<script setup>
import {loadThings} from "@/components/script.js";
import { ref } from 'vue';
let showRecipeName = true;
let showForm = ref(false);
let recipes =  [
  {
    name: "Spaghetti Carbonara",
    picture: "data:image/jpeg;base64,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",
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
let newRecipe ={
  name: "",
  picture: "",
  preparationTime: "",
  cookingTime: "",
  description: "",
  ingredients: [""],
  instructions: [""]
};

function addRecipe() {
  newRecipe.ingredients = newRecipe.ingredients.split('\n');
  newRecipe.instructions = newRecipe.instructions.split('\n');
  recipes.push({...newRecipe});
  newRecipe = {
    name: "",
    preparationTime: "",
    cookingTime: "",
    description: "",
    ingredients: [""],
    instructions: [""]
  };
  showForm.value = false;
}
function showAddRecipeForm() {
  showForm.value = true;
}
function deleteRecipe(index) {
  console.log("deleteRecipe function called with index: ", index);
  recipes.splice(index, 1);
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
        <label>Ingredients: <textarea v-model="newRecipe.ingredients" required></textarea></label>
        <label>Instructions: <textarea v-model="newRecipe.instructions" required></textarea></label>
        <label>Picture: <input v-model="newRecipe.picture"  /></label>
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  </div>
  <div class="newRecipe" v-for="(recipe, index) in recipes" :key="index">
    <h2>{{ recipe.name }}</h2>
    <button @click="deleteRecipe(index)">Delete Recipe</button>
    <img :src="recipe.picture" alt="Picture of the recipe" />
    <h3>Description</h3>
    <p>{{ recipe.description }}</p>
    <h3>Preparation Time</h3>
    <p>{{ recipe.preparationTime }}</p>
    <h3>Cooking Time</h3>
    <p>{{ recipe.cookingTime }}</p>
    <h3>Ingredients</h3>
    <ul>
      <li v-for="(ingredient, index) in recipe.ingredients" :key="index">{{ ingredient }}</li>
    </ul>
    <h3>Instructions</h3>
    <ul>
      <li v-for="(instruction, index) in recipe.instructions" :key="index">{{ instruction }}</li>
    </ul>
  </div>




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
  gap: 2px; /* Adjust as needed */
  background-color: whitesmoke;

}
.newRecipe{
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
    background-color: white;
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