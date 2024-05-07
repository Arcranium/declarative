<script setup lang="ts">
import "@lib/styles/index.css";

import DModal from "@lib/components/modal/DModal.vue";
import DButton from "@lib/components/DButton.vue";
import {ref} from "vue";

const props = withDefaults(defineProps<{
  title?: string,

  closable?: boolean
  noBackdrop?: boolean,

  alignVertical?: "start" | "center" | "end",
  alignHorizontal?: "start" | "center" | "end",

  fullscreen?: "True" | "False" | "Auto"
}>(), {
  title: "Title",

  closable: true,
  noBackdrop: false,

  alignVertical: "center",
  alignHorizontal: "center",

  fullscreen: "False"
});

const open = ref(false);
</script>

<template>
  <d-modal
      v-model="open"

      :closable="closable"
      :no-backdrop="noBackdrop"
      :align-vertical="alignVertical"
      :align-horizontal="alignHorizontal"
      :fullscreen="fullscreen == 'Auto' ? 'auto' : (fullscreen == 'True')"
  >
    <template #title>
      {{ title }}
    </template>
  </d-modal>

  <d-button @click="open = true">
    Open Modal
  </d-button>
</template>

<style scoped lang="postcss">

</style>