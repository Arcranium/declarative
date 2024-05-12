<script setup lang="ts">
import {computed} from "vue";
import {createTopLevelElement} from "@lib/util/top_level_element";

const props = withDefaults(defineProps<{
  center?: boolean,
  teleport?: boolean | string,
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

const topLevelElement = createTopLevelElement("dimmed");

const classes = computed(() => {
  return [
    'fixed top-0 left-0 w-dvw h-dvh bg-black/20 backdrop-blur-[2px] z-max transition',
    {
      'opacity-0': !props.show,
      '!backdrop-blur-0 bg-transparent pointer-events-none': props.disabled || !props.show,
      'flex justify-center items-center': props.center
    }
  ];
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
  <Teleport :to="typeof teleport == 'boolean' ? topLevelElement : teleport" v-if="teleport != false">
    <div @click="onClick" :class="classes">
      <slot/>
    </div>
  </Teleport>
  <div v-else @click="onClick" :class="classes">
    <slot/>
  </div>
</template>

<style scoped lang="postcss">
</style>