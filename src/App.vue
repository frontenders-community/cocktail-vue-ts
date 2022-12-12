<script setup lang="ts">
import SelectCocktails from './components/SelectCocktails.vue';
import ShowCocktail from './components/ShowCocktail.vue';
import { onMounted, reactive } from 'vue';
import type { Cocktail } from './models';

type State = {
  cocktails: Cocktail[];
  selectedCocktail: Cocktail | null;
}

const state: State = reactive({
  cocktails: [],
  selectedCocktail: null,
});

onMounted(async () => {
  const response = await fetch("http://localhost:3000/cocktails");
  const result = await response.json();
  state.cocktails = result;
});

function onSelectCocktail(name: string) {
  const find = state.cocktails.find(item => item.name === name);
  if (find !== undefined) {
    state.selectedCocktail = find;
  }
}
</script>

<template>
  <div class="container">
    <img src="./assets/img/barman.png" alt="Barman">
    <h1>Hi! Select your cocktail!</h1>
    <SelectCocktails
      :cocktails="state.cocktails"
      @select-cocktail="onSelectCocktail"
    />
    <ShowCocktail
      :cocktail="state.selectedCocktail"
    />
  </div>
</template>

<style scoped>
.container {
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

img {
  width: 300px;
  height: auto;
}

h1 {
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;
}
</style>
