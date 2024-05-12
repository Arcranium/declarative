<script setup lang="ts">
import {computed} from "vue";
import { DEffect } from "@lib/components/index";

const props = withDefaults(defineProps<{
  primary?: boolean,
  size?: "small" | "medium" | "large",

  submit?: boolean
}>(), {
  primary: false,
  size: "medium",

  submit: false
});

const classes = computed(() => {
  return [
    props.size,
    {
      primary: props.primary
    }
  ]
});
</script>

<template>
  <button class="d-button" :class="classes" type="submit">
    <slot/>
  </button>
</template>

<style scoped lang="postcss">
.d-button {
  @apply select-none border-2 outline-0 whitespace-nowrap effect
}

.d-button.primary {
  @apply bg-blue-500 text-white border-transparent
}

.d-button.small {
  @apply px-2 py-1 rounded-xl text-base
}

.d-button.medium {
  @apply px-4 py-2 rounded-2xl text-lg
}

.d-button.large {
  @apply px-6 py-4 rounded-3xl text-2xl
}
</style>