<script setup lang="ts">
import {computed} from "vue";

const props = withDefaults(defineProps<{
  primary?: boolean,
  dangerous?: boolean,
  text?: boolean

  size?: "small" | "medium" | "large",

  disabled?: boolean

  submit?: boolean,

  value?: string | number | null
}>(), {
  primary: false,
  dangerous: false,
  text: false,

  size: "medium",

  disabled: false,

  submit: false,

  value: null
});

const classes = computed(() => {
  return [
    props.size,
    {
      primary: props.primary,
      dangerous: props.dangerous,
      text: props.text,

      disabled: props.disabled
    }
  ]
});
</script>

<template>
  <button class="d-button" :class="classes" :type="submit ? 'submit' : 'button'" :disabled>
    <slot/>
  </button>
</template>

<style scoped lang="postcss">
.d-button {
  @apply select-none border-2 outline-0 whitespace-nowrap effect
}

.d-button.primary,
.d-button.dangerous {
  @apply text-white border-transparent
}

.d-button.text {
  @apply border-transparent
}

.d-button.disabled {
  @apply opacity-50 bg-gray-300 pointer-events-none
}

.d-button.primary {
  @apply bg-blue-500
}

.d-button.dangerous {
  @apply bg-red-400 ring-red-400
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