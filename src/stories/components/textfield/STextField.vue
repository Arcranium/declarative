<script setup lang="ts">
import "@lib/styles/index.css";

import DTextField from "@lib/components/DTextField.vue";
import {onMounted, ref, watch} from "vue";
import {DEffect} from "@lib/components";

const props = withDefaults(defineProps<{
  size?: "small" | "medium" | "large",
  placeholder?: string,
  storybookInvalid?: boolean
}>(), {
  size: "medium",
  placeholder: "",
  storybookInvalid: false
});
</script>

<template>
  <d-text-field :validity="storybookInvalid" :size="size" :placeholder="placeholder" />
</template>

<style scoped lang="postcss">

</style>