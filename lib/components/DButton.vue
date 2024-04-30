<script setup lang="ts">
import {computed} from "vue";
import DEffect from "@lib/components/DEffect.vue";

const props = withDefaults(defineProps<{
  primary?: boolean,

  size?: "small" | "medium" | "large"
}>(), {
  primary: false,
  size: "medium"
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
  <d-effect>
    <button class="d-button" :class="classes" v-bind="$attrs">
      <slot/>
    </button>
  </d-effect>
</template>

<style scoped lang="postcss">
.d-button {
  @apply select-none border-2 outline-0
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