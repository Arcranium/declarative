<script setup lang="ts">
import "@lib/styles/index.css";

import { DSelect, DSelectOption } from "@lib/components/select";
import {ref} from "vue";

withDefaults(defineProps<{
  size?: "small" | "medium" | "large",
  multiselect?: boolean,
  modal?: boolean | "auto",
}>(), {
  size: "medium",
  multiselect: false,
  modal: "auto"
});

const model = ref();
</script>

<template>
  <d-select :size="size" :multiselect="multiselect" :modal="modal" v-model="model" placeholder="Select">
    <d-select-option value=1>Opt1</d-select-option>
    <d-select-option value=2>Opt2</d-select-option>
    <d-select-option value=3>Opt3</d-select-option>
    <d-select-option value=4>Opt4</d-select-option>
    <d-select-option value=5>Opt5</d-select-option>
  </d-select>
</template>

<style scoped lang="postcss">

</style>