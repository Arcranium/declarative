<script setup lang="ts">
import {ref} from "vue";

defineOptions({
  inheritAttrs: false
});
</script>

<template>
  <span class="d-effect">
    <slot v-bind="$attrs"/>
  </span>
</template>

<style scoped lang="postcss">
.d-effect > * {
  @apply hover:ring-2 ring-offset-2 active:ring-4 focus:ring-2 invalid:ring-red-400 invalid:ring-2 transition-all
}
</style>