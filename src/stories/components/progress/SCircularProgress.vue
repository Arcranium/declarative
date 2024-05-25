<script setup lang="ts">
import {DCircularProgress} from "@lib/components";

withDefaults(defineProps<{
  value?: number,
  indeterminate?: boolean
}>(), {
  value: 0,
  indeterminate: false
})
</script>

<template>
  <d-circular-progress :value :indeterminate/>
</template>

<style scoped lang="postcss">

</style>