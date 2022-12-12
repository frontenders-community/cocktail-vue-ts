<script lang="ts" setup>
import type { Cocktail } from '@/models';
import { computed } from 'vue';

const props = defineProps<{
  cocktail: Cocktail | null
}>();

const totalParts = computed(() => {
  if (props.cocktail) {
    return props.cocktail.ingredients.reduce((total, item) => {
      return total += item.part;
    }, 0);
  } else {
    return -1;
  }
});

function getHeight(part: number) {
  return (100 / totalParts.value) * part;
}
</script>

<template>
  <div class="cocktail">
    <div class="glass">
      <div class="glass-inner">
        <div v-if="cocktail" id="ingredients" class="ingredients">
          <div
            class="ingredient"
            v-for="item in cocktail.ingredients"
            :key="item.name"
            :style="{
              backgroundColor: item.color,
              height: `${getHeight(item.part)}%`,
              // animationDelay: `${timeout}ms`,
            }"
          >
            {{ item.part }} part of {{ item.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cocktail {
  position: relative;
  margin-top: 40px;
  width: 300px;
  height: 300px;
}

.cocktail::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 0;
  right: 0;
  width: 100%;
  height: 4px;
  margin: 0 auto;
  background-color: #222;
}

.glass {
  position: relative;
  width: 100%;
  height: 100%;
  clip-path: var(--glass);
  background-color: #222;
}

.glass-inner {
  position: absolute;
  top: 5px;
  right: 5px;
  left: 5px;
  bottom: 5px;
  clip-path: var(--glass);
  background-color: #fff;
  opacity: .8;
}

.ingredients {
  margin-top: 10%;
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: center;
}

.ingredient {
  opacity: 0;
  animation-name: showIngredient;
  animation-duration: .5s;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
}

@keyframes showIngredient {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>