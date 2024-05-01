<script setup lang="ts">
import {computed} from "vue";

const props = withDefaults(defineProps<{
  appear?: boolean,

  axis?: "x" | "y" | "-x" | "-y",
  factor?: number | string
}>(), {
  appear: false,
  axis: "x",
  factor: 30
});

const multipliers: { [k: string]: [number, number] } = {
  "x": [1, 0],
  "y": [0, 1],
  "-x": [-1, 0],
  "-y": [0, -1],
};

function multiplyFactor(multiplier: number, factor: string) {
  if(multiplier == 1) {
    return factor;
  } else if(multiplier == -1) {
    return `-${factor}`;
  }

  return ``;
}

const factorString = computed(() => {
  return typeof props.factor == "string" ? props.factor : `${props.factor}px`;
})

const from = computed(() => {
  const factorValue = factorString.value;
  const multiplier = multipliers[props.axis];

  return [multiplyFactor(multiplier[0], factorValue), multiplyFactor(multiplier[1], factorValue)];
});

const to = computed(() => {
  const factorValue = factorString.value;
  const multiplier = multipliers[props.axis];

  return [multiplyFactor(multiplier[0] * -1, factorValue), multiplyFactor(multiplier[1] * -1, factorValue)];
});
</script>

<template>
  <Transition name="d-slide" :appear="appear">
    <slot/>
  </Transition>
</template>

<style scoped lang="postcss">
.d-slide-enter-active,
.d-slide-leave-active {
  @apply transition-all duration-1000
}

.d-slide-enter-from {
  translate: v-bind('from[0]') v-bind('from[1]');
}

.d-slide-leave-to {
  translate: v-bind('to[0]') v-bind('to[1]');
}
</style>