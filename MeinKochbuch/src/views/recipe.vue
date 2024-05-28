<script setup>
import {loadThings} from "@/components/script.js";
let showRecipeName = true;
let recipes = [
    {
        name: "Spaghetti Carbonara",
        preparationTime: "20 Minuten",
        cookingTime: "15 Minuten"
    }
];
</script>

<template>
  <div class="recipeheader">
    <h1>Rezepte</h1>
      <button @click="loadThings">Load Courses</button>

  </div>
  <div class="recipename" v-if="showRecipeName">
      <h1 class>Rezepte</h1>
    <h2>Spaghetti Carbonara</h2> <br>
      <p>Spaghetti Carbonara ist ein klassisches italienisches Nudelgericht, das in der Regel aus Spaghetti, Guanciale, Ei, Pecorino Romano und Pfeffer zubereitet wird. Die Zutaten werden in einer Pfanne gemischt, bis sie eine cremige Konsistenz haben. Das Gericht wird oft mit zusätzlichem Pecorino Romano und Pfeffer garniert.</p>
      <br>
  </div>
    <div>
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

      <h3>Zutaten</h3>
      <ul>
        <li>400g Spaghetti</li>
        <li>200g Guanciale</li>
        <li>4 Eier</li>
        <li>100g Pecorino Romano</li>
        <li>Pfeffer</li>
      </ul>
</template>

<style>
@media (min-width: 1024px) {
    .recipeheader {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>