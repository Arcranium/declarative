<script setup lang="ts">
import {computed, ref} from "vue";

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
  <div class="w-14 h-14 !size-8 flex justify-center items-center" :class="classes">
    <div class="w-1/2 h-1/2 rounded-full bg-blue-500" :class="circleClasses"/>
    <svg class="-rotate-90 absolute" viewbox="0 0 100 100" width="100%" height="100%">
      <circle ref="indicatorRef" class="indicator transition-all fill-none stroke-blue-400" cx="50%" cy="50%" r="40%" />
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