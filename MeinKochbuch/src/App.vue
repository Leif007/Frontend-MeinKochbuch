<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div id="app">

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/recipe">Recipe</RouterLink> <!-- Hinzufügen des RouterLink zu /recipe -->
        <RouterLink to="/shopping-list">Shopping List</RouterLink>
      </nav>
    </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

header {
  line-height: 1.5;
  max-height: 20vh;
  text-align: center;

  padding: 2px;
}
#app {
  display: flex;
  justify-content: center;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 3rem;
    padding: 1rem 0;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    flex-direction: row;
  }

}

</style>
<style>
body {
  background-color: darkgray;
}
</style>
