<script setup props="shoppingList">

import { computed, watchEffect, ref } from 'vue';

const props = defineProps({
  shoppingList: String
});

const shoppingList = ref([]);

watchEffect(() => {
  const newShoppingList = props.shoppingList;
  if (newShoppingList) {
    shoppingList.value = JSON.parse(newShoppingList);
  } else {
    shoppingList.value = [];
  }
});
</script>


<template>
  <main>
    <h1>Shopping List</h1>
    <p>Here you can see the Ingredients you need for various recipes</p>
  </main>
  <div class="shoppingList">
    <h1>Shopping List</h1>
    <ul>
      <li v-for="item in shoppingList" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<style scoped>
.shoppingList {
  margin-top: 5rem;
  padding: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 5px;
}

</style>