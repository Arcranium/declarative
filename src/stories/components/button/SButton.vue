<script setup lang="ts">
import "@stories/styles/main.css";

import DButton from "@lib/components/DButton.vue";

withDefaults(defineProps<{
  label?: string,
  size?: "small" | "medium" | "large",
  primary?: boolean,
}>(), {
  label: "Button",
  size: "medium",
  primary: false
});
</script>

<template>
  <d-button
      :size="size"
      :primary="primary"
  >
    {{ label }}
  </d-button>
</template>

<style scoped>

</style>