<script setup lang="ts">
import DEffect from "@lib/components/DEffect.vue";
import {computed, ref, watch} from "vue";

const props = withDefaults(defineProps<{
  size: "small" | "medium" | "large",
  placeholder: string,
  validity?: null | string | boolean
}>(), {
  size: "medium",
  placeholder: "",
  validity: null
});

const model = defineModel();

const inputRef = ref<HTMLInputElement>();

defineExpose({
  inputRef
});

const classes = computed(() => {
  return [
      props.size
  ];
})

watch([() => props.validity, inputRef], () => {
  let error = "";
  if(typeof props.validity == "boolean") {
    error = props.validity ? "Error" : "";
  } else if(typeof props.validity == "string") {
    error = props.validity;
  }

  inputRef.value?.setCustomValidity(error);
});
</script>

<template>
  <d-effect>
    <input ref="inputRef" v-model="model" class="d-textfield" :class="classes" :placeholder="placeholder" type="text">
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