<script setup lang="ts">
import {DButton} from "@lib/components";
import {imperative, ImperativeModalState} from "@lib/index.ts";
import {getAppContext} from "@lib/util/composables/appContext.ts";
import {nextTick} from "vue";

const appContext = getAppContext();

const modals: any[] = [];

function openImperativeModal() {
  const modal = imperative.createModal({
    title: "Open Modal Dynamically",
    deniable: true,
    acceptable: true,
    denyLabel: "Close",
    acceptLabel: "Create again",
    closeOnAccept: false,
    acceptDisabled: modals.length > 9,
    onDeny() {
      imperative.hideModal(modals[modals.length - 1]);
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
    {{ imperative.ImperativeModalState.modals.length }}
  </d-button>
</template>

<style scoped lang="postcss">

</style>