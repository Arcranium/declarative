<script setup lang="ts">
import DModal from "@lib/components/modal/DModal.vue";
import DButton from "@lib/components/DButton.vue";
import {ref} from "vue";

const props = withDefaults(defineProps<{
  closable?: boolean
  noBackdrop?: boolean,

  alignVertical?: "start" | "center" | "end",
  alignHorizontal?: "start" | "center" | "end",

  fullscreen?: "True" | "False" | "Auto"
}>(), {
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
      v-if="open"
      v-model="open"

      :closable="closable"
      :no-backdrop="noBackdrop"
      :align-vertical="alignVertical"
      :align-horizontal="alignHorizontal"
      :fullscreen="fullscreen == 'Auto' ? 'auto' : (fullscreen == 'True')"
  >
    <template #title>{{open}}</template>
  </d-modal>

  <d-button @click="open = true">
    Open Modal
  </d-button>
</template>

<style scoped lang="postcss">

</style>