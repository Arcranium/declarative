<script setup lang="ts">
import DEffect from "@lib/components/DEffect.vue";
import {computed} from "vue";

const props = withDefaults(defineProps<{
  size: "small" | "medium" | "large",
  placeholder: string
}>(), {
  size: "medium",
  placeholder: ""
});

const model = defineModel();

const classes = computed(() => {
  return [
      props.size
  ];
})
</script>

<template>
  <d-effect>
    <input v-model="model" class="d-textfield" :class="classes" :placeholder="placeholder" type="text">
  </d-effect>
</template>

<style scoped lang="postcss">
.d-textfield {
  @apply border-2 rounded-xl outline-0
}

.d-textfield.small {
  @apply px-2 py-1
}

.d-textfield.medium {
  @apply px-4 py-2
}

.d-textfield.large {
  @apply px-6 py-4
}
</style>