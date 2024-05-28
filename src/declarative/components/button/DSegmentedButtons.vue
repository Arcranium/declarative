<script setup lang="ts">
import {SelectCoreType, useSelectCore} from "@lib/composables/select"
import {inject, provide} from "vue";

const props = withDefaults(defineProps<{
  select?: boolean,
  multiselect?: boolean
}>(), {
  select: false,
  multiselect: false
})

const model = defineModel()

const core = useSelectCore(model, props.multiselect)

provide("segmented-buttons-select", props.select)
</script>

<template>
  <div class="flex">
    <slot/>
  </div>
</template>

<style scoped lang="postcss">

</style>