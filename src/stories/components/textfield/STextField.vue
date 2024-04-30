<script setup lang="ts">
import DTextField from "@lib/components/DTextField.vue";

defineProps<{
  size?: "small" | "medium" | "large",
  placeholder?: string
}>();
</script>

<template>
  <DTextField/>
</template>

<style scoped lang="postcss">

</style>