<script lang="ts" setup>
import type { Cocktail } from '@/models';

const props = defineProps<{
  cocktails: Array<Cocktail>,
}>();

const emit = defineEmits<{
  (e: "selectCocktail", name: string): void
}>();

function onClick(item: Cocktail) {
  emit("selectCocktail", item.name);
}
</script>

<template>
  <div class="buttons">
    <button
      class="button"
      v-for="item in cocktails"
      :key="item.name"
      @click="onClick(item)"
    >
      {{ item.name }}
    </button>
  </div>
</template>

<style scoped>
.buttons {
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
  column-gap: 20px;
}

.buttons button {
  flex-basis: 48%;
  padding: 12px 36px;
  font-size: 1.2rem;
  font-weight: 300;
  background-color: var(--button-bg-color);
  color: var(--button-text-color);
  border: 2px solid transparent;
  border-radius: 12px;
  transition: .5s ease-in-out;
  cursor: pointer;
}

.buttons button:hover {
  font-weight: 700;
}
</style>