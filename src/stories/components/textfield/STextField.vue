<script setup lang="ts">
import DTextField from "@lib/components/DTextField.vue";

withDefaults(defineProps<{
  size?: "small" | "medium" | "large",
  placeholder?: string
}>(), {
  size: "medium",
  placeholder: ""
});
</script>

<template>
  <DTextField :size="size" :placeholder="placeholder"/>
</template>

<style scoped lang="postcss">

</style>