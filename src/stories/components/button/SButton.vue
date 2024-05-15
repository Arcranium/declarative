<script setup lang="ts">
import "@lib/styles/index.css";

import DButton from "@lib/components/DButton.vue";

withDefaults(defineProps<{
  label?: string,
  size?: "small" | "medium" | "large",

  primary?: boolean,
  dangerous?: boolean
}>(), {
  label: "Button",
  size: "medium",

  primary: false,
  dangerous: false
});
</script>

<template>
  <d-button
      :size="size"
      :primary="primary"
      :dangerous="dangerous"
  >
    {{ label }}
  </d-button>
</template>

<style scoped>

</style>