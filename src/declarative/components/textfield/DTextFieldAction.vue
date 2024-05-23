<script setup lang="ts">
import {DButton} from "@lib/components";
import {computed, inject, Ref} from "vue";

const size = inject<Ref<"small" | "medium" | "large">>("textfield-size");
</script>

<template>
  <d-button class="d-textfield-actions" :size="size">
    <slot/>
  </d-button>
</template>

<style scoped lang="postcss">
.d-textfield-actions {
  @apply h-full w-8 !min-w-0 !p-0 !min-h-0 !aspect-square last:!border-x-2 !border-r-0 last:!rounded-r-xl !rounded-none overflow-hidden flex items-center justify-center
}

.d-textfield-actions.small {
  @apply size-10
}

.d-textfield-actions.medium {
  @apply size-12
}

.d-textfield-actions.large {
  @apply size-14
}
</style>