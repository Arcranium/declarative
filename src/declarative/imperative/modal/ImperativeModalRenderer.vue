<script setup lang="ts">
import {DModal, DButton} from "@lib/components";

import {useImperativeModalStore} from "@lib/imperative/modal";
import {storeToRefs} from "pinia";

const imperativeModalStores = useImperativeModalStore();
const { modals } = storeToRefs(imperativeModalStores);
</script>

<template>
  <d-modal
      v-for="modal in modals"
      v-model="modal.options.show"

      :key="modal.identifier"
      :closable="typeof modal.options.closable == 'boolean' ? modal.options.closable : modal.options.closable()"
  >
    <template #title>
      {{ modal.options.title }}
    </template>
    <template #default>
      {{ modal.options.description }}
    </template>
    <template #action>
      <div class="flex *:flex-1 gap-2">
        <d-button v-if="modal.options.deniable" dangerous @click="modal.options.onDenyRequest().runIfTrue(() => {
            modal.options.onDeny()
            if(modal.options.closeOnDeny) {
              modal.options.show = false;
              modal.options.onClose()
            }
          })">
          {{ modal.options.denyLabel }}
        </d-button>
        <d-button v-if="modal.options.acceptable" primary @click="() => {
            modal.options.onAccept();
            if(modal.options.closeOnAccept) {
              modal.options.show = false;
              modal.options.onClose();
            }
          }">
          {{ modal.options.acceptLabel }}
        </d-button>
      </div>
    </template>
  </d-modal>
</template>

<style scoped lang="postcss">

</style>