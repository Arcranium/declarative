<script setup lang="ts">
import {computed, ref, watch} from "vue";

const props = withDefaults(defineProps<{
  value?: number,
  stroke?: number,
  indeterminate?: boolean,
  indeterminateDuration?: number
}>(), {
  value: 0.5,
  stroke: 4,
  indeterminate: false,
  indeterminateDuration: 1250
})

const indicatorRef = ref<SVGCircleElement>()

const strokeWidth = computed(() =>
  indicatorRef.value ? props.stroke : 0
)

const clampedValue = computed(() => Math.min(Math.max(0, props.value), 1))

const circumference = computed(() =>
    (indicatorRef.value?.r.animVal.value ?? 0) * Math.PI * 2
)
const dashOffset = computed(
    () => circumference.value * (1 - (props.indeterminate ? animatedIndeterminateOffset.value : clampedValue.value))
)
const animatedIndeterminateOffset = ref(0)

const classes = computed(() => {
  return {
    'animate-spin': props.indeterminate
  }
})

const circleClasses = computed(() => {
  return {
    'indeterminate': props.indeterminate
  }
})

let startTime: number | null = null;
let direction = 1;
function animateIndeterminateOffset(time: number) {
  if (!startTime) startTime = time;
  const progress = Math.min((time - startTime) / props.indeterminateDuration, 1);

  animatedIndeterminateOffset.value =
      direction === 1
          ? progress
          : 1 - progress;

  if (progress >= 1) {
    direction *= -1;
    startTime = time;
  }

  requestAnimationFrame(animateIndeterminateOffset);
}

// Start the animation
requestAnimationFrame(animateIndeterminateOffset);
</script>

<template>
  <div class="*:absolute w-14 h-14 flex justify-center items-center" :class="classes">
    <div class="w-8 h-8 rounded-full bg-blue-500" :class="circleClasses"/>
    <svg class="-rotate-90" viewbox="0 0 100 100" width="3.5rem" height="3.5rem">
      <circle ref="indicatorRef" class="indicator transition-all fill-none stroke-blue-400" cx="50%" cy="50%" r="1.3rem" />
    </svg>
  </div>
</template>

<style scoped lang="postcss">
.indicator {
  stroke-width: v-bind(strokeWidth);
  stroke-linecap: round;
  stroke-dasharray: v-bind(circumference);
  stroke-dashoffset: v-bind(dashOffset);
}

.indeterminate {
  animation: indeterminate 1s infinite
}

@keyframes indeterminate {
  from {
    scale: 50%
  }
  to {
    opacity: 0;
    scale: 90%
  }
}
</style>