<template>
  <div class="about">
    <h1>Dein Kochbuch</h1>

  </div>
  <div class="beschreibung">
    <div>
      <p>
      Dein Kochbuch ist eine Webanwendung, die dir hilft, deine Lieblingsrezepte zu speichern und zu organisieren. Du kannst Rezepte hinzufügen, bearbeiten und löschen. Außerdem kannst du Rezepte nach Kategorien sortieren und filtern. Dein Kochbuch ist einfach zu bedienen und bietet dir eine übersichtliche Benutzeroberfläche. Viel Spaß beim Kochen!
    </p>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  .beschreibung {
    margin-left: 1rem;
    font-size: large;
    overflow: auto;
    display: flex;
    align-items: center;

  }
}
</style>
<script setup lang="ts">
</script>