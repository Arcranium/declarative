<script setup lang="ts">
import {computed, inject} from "vue";
import {useSelectOptionCore} from "@lib/composables/select";
import {v4 as uuid} from "uuid";
import {storeToRefs} from "pinia";
import {DButton} from "@lib/components";

const props = withDefaults(defineProps<{
  value?: string | number,
  default?: boolean
}>(),{
  value: () => uuid(),
  default: false
})

const classes = computed(() => {
  return [
    {

    }
  ]
})

const isSelect = inject<boolean>("segmented-buttons-select")

const core = useSelectOptionCore(props.value, props.default)

const selected = core?.selected
</script>

<template>
  <d-button
      class="d-segmented-button"

      :primary="isSelect && selected"
      @click="isSelect ? core?.select(value) : null"
  >
    <slot/>
  </d-button>
</template>

<style scoped lang="postcss">
.d-segmented-button {
  @apply [&:not(:last-child):not(:first-child)]:rounded-none first:rounded-r-none last:rounded-l-none last:border-r-2 border-r-0
}
</style>