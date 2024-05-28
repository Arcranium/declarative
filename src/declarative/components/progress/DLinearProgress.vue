<script setup lang="ts">
import {computed} from "vue";

const props = withDefaults(defineProps<{
  value?: number,
  indeterminate?: boolean,
  indeterminateDuration?: number
}>(), {
  value: 0.5,
  indeterminate: false,
  indeterminateDuration: 1000
})

const percentage = computed(() => {
  if(props.indeterminate)
    return 100

  const clamped = Math.min(Math.max(0, props.value), 1)
  return clamped * 100
})

const indicatorClasses = computed(() => {
  return {
    indeterminate: props.indeterminate
  }
})

const indicatorStyles = computed(() => {
  return [
    {
      'width': `${percentage.value}%`
    }
  ]
})
</script>

<template>
  <div>
    <div class="bg-gray-300 w-full h-2 rounded-full overflow-hidden">
      <div class="bg-blue-500 h-2 rounded-full transition-[width]" :class="indicatorClasses" :style="indicatorStyles"/>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.indeterminate {
  transition: none;
  animation: indeterminate calc(v-bind(indeterminateDuration) * 1ms) infinite;
}

@keyframes indeterminate {
  from {
    opacity: 0;
    scale: 0 1;
  }
  30% {
    opacity: 0.7;
  }
  to {
    opacity: 0;
  }
}
</style>