<script setup lang="ts">
import {DModal, DButton} from "@lib/components";

import {ImperativeModalOptionsFilled} from "@lib/imperative";
import {useImperativeModalStore} from "@lib/imperative/modal";
import {storeToRefs} from "pinia";

const imperativeModalStores = useImperativeModalStore();
const { modals } = storeToRefs(imperativeModalStores)
</script>

<template>
  <transition-group>
    <d-modal v-for="modal in modals" v-model="modal.options.show">
      <template #title>
        {{ modal.options.title }}
      </template>
      <template #default>
        {{ modal.options.description }}
      </template>
      <template #action>
        <div class="flex *:flex-1">
          <d-button v-if="modal.options.deniable" dangerous @click="modal.options.onDenyRequest().runIfTrue(modal.options.onDeny)">
            {{ modal.options.denyLabel }}
          </d-button>
          <d-button v-if="modal.options.acceptable" primary @click="modal.options.onAccept">
            {{ modal.options.acceptLabel }}
          </d-button>
        </div>
      </template>
    </d-modal>
  </transition-group>
</template>

<style scoped lang="postcss">

</style>