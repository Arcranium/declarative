<script setup lang="ts">
import {computed} from "vue";

const props = withDefaults(defineProps<{
  appear?: boolean,

  axis?: "x" | "y" | "-x" | "-y",
  factor?: number | string,
  reverseDirection?: boolean
}>(), {
  appear: false,
  axis: "x",
  factor: 30,
  reverseDirection: true
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

  return `0`;
}

const factorString = computed(() => {
  return typeof props.factor == "string" ? props.factor : `${props.factor}px`;
})

const from = computed(() => {
  const factorValue = factorString.value;
  const multiplier = multipliers[props.axis];

  return `${multiplyFactor(multiplier[0], factorValue)}, ${multiplyFactor(multiplier[1], factorValue)}`;
});

const to = computed(() => {
  const factorValue = factorString.value;
  const multiplier = multipliers[props.axis];
  const globalMul = props.reverseDirection ? -1 : 1;

  return `${multiplyFactor(multiplier[0] * globalMul, factorValue)}, ${multiplyFactor(multiplier[1] * globalMul, factorValue)}`;
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
  transition: all 0.25s;
}

.d-slide-leave-active {
  position: absolute;
}

.d-slide-enter-from {
  opacity: 0;
  transform: translate(v-bind(from));
}

.d-slide-leave-to {
  opacity: 0;
  transform: translate(v-bind(to));
}
</style>