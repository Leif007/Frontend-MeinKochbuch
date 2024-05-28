<template>
  <header><div class="about">
    <h1>Dein Kochbuch</h1>

  </div>
  </header>
  <body>
  <div class="beschreibung">
    <div>
      <p>
      Dein Kochbuch ist eine Webanwendung, die dir hilft, deine Lieblingsrezepte zu speichern und zu organisieren. Du kannst Rezepte hinzufügen, bearbeiten und löschen. Außerdem kannst du Rezepte nach Kategorien sortieren und filtern. Dein Kochbuch ist einfach zu bedienen und bietet dir eine übersichtliche Benutzeroberfläche. Viel Spaß beim Kochen!
    </p>
    </div>
  </div>
  </body>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 75vh;
    display: flex;
    align-items: center;
  }
  .beschreibung {
    margin-top: -40rem;
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