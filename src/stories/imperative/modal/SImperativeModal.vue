<script setup lang="ts">
import {DButton} from "@lib/components";
import {imperative} from "@lib/index.ts";
import {getAppContext} from "@lib/util/composables/appContext.ts";
import {nextTick} from "vue";
import {useImperativeModalStore} from "../../../declarative/imperative";

const appContext = getAppContext();

const modals = [];

function openImperativeModal() {
  const modal = imperative.createModal({
    title: "Open Modal Dynamically",
    deniable: true,
    acceptable: true,
    denyLabel: "Close",
    acceptLabel: "Create again",
    closeOnAccept: false,
    onDeny() {
      for(const item of modals) {
        imperative.destroyModal(item);
      }
    },
    onAccept() {
        openImperativeModal();
    },
    show: true
  });

  modals.push(modal);
}
</script>

<template>
  <d-button @click="openImperativeModal">
    Open Imperative Modal
    {{ useImperativeModalStore().modals.length }}
  </d-button>
</template>

<style scoped lang="postcss">

</style>