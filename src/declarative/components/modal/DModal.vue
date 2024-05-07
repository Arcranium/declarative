<script setup lang="ts">
import {createTopLevelElement} from "@lib/util/top_level_element";
import DDimmed from "@lib/components/modal/DDimmed.vue";
import {computed} from "vue";
import {useTailwindBreakpoints} from "@lib/composables/breakpoints";

const props = withDefaults(defineProps<{
  closable?: boolean,
  noBackdrop?: boolean
  alignVertical?: "start" | "center" | "end",
  alignHorizontal?: "start" | "center" | "end",
  fullscreen?: boolean | "auto",
  screen?: "parent" | "screen"
}>(), {
  closable: true,
  noBackdrop: false,
  alignVertical: "center",
  alignHorizontal: "center",
  fullscreen: false,
  screen: "parent"
});

const emit = defineEmits([
    "close"
]);

const model = defineModel<boolean>();

const breakpoints = useTailwindBreakpoints();

const modalRoot = createTopLevelElement("modals");

const backClasses = computed(() => {
  return [
      `justify-${props.alignVertical}`,
      `items-${props.alignHorizontal}`
  ]
})

const classes = computed(() => {
  const fullscreenClasses = [
      props.screen == "parent" ? "!size-full" : "!w-dvw !h-dvh"
  ];

  return [{
    'scale-110': !model.value,
  }];
});

const shouldRenderFullscreen = computed(() => {
  if(props.fullscreen == "auto") {
    return breakpoints.smallerOrEqual("md").value;
  }

  return props.fullscreen;
})

function onClose() {
  if(!props.closable) return;

  emit("close");
  model.value = false;
}
</script>

<template>
  <Teleport :to="modalRoot">
    <d-dimmed :show="model" :disabled="noBackdrop" :teleport="false">
      <div class="size-full flex" :class="backClasses" @click.self="onClose">
        <div class="bg-white p-4 rounded-3xl sm:min-w-96 min-w-72 border-2 shadow-2xl transition-all duration-300" :class="classes">
          <div class="m-4 font-medium text-3xl select-none empty:hidden overflow-hidden">
            <slot name="title"/>
          </div>
          <div class="border-b-2"></div>
          <div class="py-4 px-4 empty:hidden">
            <slot></slot>
          </div>
          <div class="border-b-2"></div>
          <div class="p-3 empty:p-0 select-none empty:hidden">
            <slot name="action"></slot>
          </div>
        </div>
      </div>
    </d-dimmed>
  </Teleport>
</template>

<style scoped lang="postcss">

</style>