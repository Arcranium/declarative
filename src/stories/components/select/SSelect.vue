<script setup lang="ts">
import DSelect from "@lib/components/DSelect.vue";
import DSelectOption from "@lib/components/DSelectOption.vue";

withDefaults(defineProps<{
  size?: "small" | "medium" | "large"
}>(), {
  size: "medium"
});
</script>

<template>
  <DSelect :size="size">
    <DSelectOption value=1>Welcome1</DSelectOption>
    <DSelectOption value=2>Welcome2</DSelectOption>
  </DSelect>
</template>

<style scoped lang="postcss">

</style>