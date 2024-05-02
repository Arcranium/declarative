<script setup lang="ts">
import DSelect from "@lib/components/select/DSelect.vue";
import DSelectOption from "@lib/components/select/DSelectOption.vue";

withDefaults(defineProps<{
  size?: "small" | "medium" | "large",
  multiselect?: boolean,
  modal?: boolean,
}>(), {
  size: "medium",
  multiselect: false,
  modal: "auto"
});

</script>

<template>
  <d-select :size="size" :multiselect="multiselect" :modal="modal">
    <d-select-option value=1>Welcome1</d-select-option>
    <d-select-option value=2>Welcome2</d-select-option>
    <d-select-option value=3>Welcome3</d-select-option>
    <d-select-option value=4>Welcome4</d-select-option>
    <d-select-option value=5>Welcome5</d-select-option>
  </d-select>
</template>

<style scoped lang="postcss">

</style>