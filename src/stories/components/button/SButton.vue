<script setup lang="ts">
import "@lib/styles/index.css";

import DButton from "../../../declarative/components/button/DButton.vue";

withDefaults(defineProps<{
  label?: string,
  size?: "small" | "medium" | "large",

  primary?: boolean,
  dangerous?: boolean
  text?: boolean

  disabled?: boolean
}>(), {
  label: "Button",
  size: "medium",

  primary: false,
  dangerous: false,
  text: false,

  disabled: false
});
</script>

<template>
  <d-button
      :size
      :primary
      :dangerous
      :text

      :disabled
  >
    {{ label }}
  </d-button>
</template>

<style scoped>

</style>