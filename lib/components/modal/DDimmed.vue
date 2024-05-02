<script setup lang="ts">
import {computed} from "vue";

const props = withDefaults(defineProps<{
  center?: boolean,
  teleport?: boolean,
  show?: boolean
}>(), {
  center: false,
  teleport: true,
  show: false
});

const emit = defineEmits([
    "click"
]);

const classes = computed(() => {
  return {
    'backdrop-blur-0 bg-transparent opacity-0 pointer-events-none': !props.show,
    'flex justify-center items-center': props.center
  }
})

function onClick(e: MouseEvent) {
  if(e.target != e.currentTarget) {
    console.log(e.target);
    console.log(e.currentTarget);

    e.stopPropagation();
    e.preventDefault();
    return;
  }

  e.preventDefault();
  emit("click", e);
}
</script>

<template>
  <Teleport to=":root">
    <div class="fixed top-0 left-0 w-dvw h-dvh bg-black/20 backdrop-blur-[2px] z-50 transition" @click="onClick" :class="classes">
      <slot/>
    </div>
  </Teleport>
</template>

<style scoped lang="postcss">
</style>