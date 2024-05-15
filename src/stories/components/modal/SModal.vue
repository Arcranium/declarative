<script setup lang="ts">
import "@lib/styles/index.css";

import DModal from "@lib/components/modal/DModal.vue";
import DButton from "@lib/components/DButton.vue";
import {h, onMounted, ref} from "vue";
import {DTextField} from "@lib/components";
import {createTopLevelElement} from "@lib/util";

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

      form

      :closable="closable"
      :no-backdrop="noBackdrop"
      :align-vertical="alignVertical"
      :align-horizontal="alignHorizontal"
      :fullscreen="fullscreen == 'Auto' ? 'auto' : (fullscreen == 'True')"
  >
    <template #title>
      {{ title }}
    </template>
    <template #default>
      <d-text-field placeholder="Text Input 1" class="mb-1"/>
      Modal content
    </template>
    <template #action>
      <div class="flex gap-4">
        <d-button class="flex-1" @click="open = false">Close</d-button>
        <d-button class="flex-1" primary>Accept</d-button>
      </div>
    </template>
  </d-modal>

  <d-button @click="open = true">
    Open Modal
  </d-button>
</template>

<style scoped lang="postcss">

</style>