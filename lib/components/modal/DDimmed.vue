<script setup lang="ts">
import {computed} from "vue";

const props = withDefaults(defineProps<{
  center?: boolean,
  teleport?: boolean,
  show?: boolean,
  disabled?: boolean
}>(), {
  center: false,
  teleport: true,
  show: false,
  disabled: false
});

const emit = defineEmits([
    "click"
]);

const classes = computed(() => {
  return {
    'opacity-0': !props.show,
    '!backdrop-blur-0 bg-transparent pointer-events-none': props.disabled || !props.show,
    'flex justify-center items-center': props.center
  }
})

function onClick(e: MouseEvent) {
  if(e.target != e.currentTarget) {
    e.stopPropagation();
    e.preventDefault();
    return;
  }

  e.preventDefault();
  emit("click", e);
}
</script>

<template>
  <Teleport to=":root" v-if="teleport">
    <d-dimmed v-bind="$attrs" :teleport="false">
      <slot/>
    </d-dimmed>
  </Teleport>
  <div v-else class="fixed top-0 left-0 w-dvw h-dvh bg-black/20 backdrop-blur-[2px] z-max transition" @click="onClick" :class="classes">
    <slot/>
  </div>
</template>

<style scoped lang="postcss">
</style>