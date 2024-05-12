<script setup lang="ts">
import {createTopLevelElement} from "@lib/util/top_level_element";
import DDimmed from "@lib/components/modal/DDimmed.vue";
import {computed} from "vue";
import {useTailwindBreakpoints} from "@lib/composables/breakpoints";
import {DButton} from "@lib/components";

const props = withDefaults(defineProps<{
  closable?: boolean,
  noBackdrop?: boolean
  alignVertical?: "start" | "center" | "end",
  alignHorizontal?: "start" | "center" | "end",
  fullscreen?: boolean | "auto",
  screen?: "parent" | "screen",
  form?: boolean
}>(), {
  closable: true,
  noBackdrop: false,
  alignVertical: "center",
  alignHorizontal: "center",
  fullscreen: false,
  screen: "parent",
  form: false
});

const emit = defineEmits([
    "submit",
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
      props.screen == "parent" ? "!size-full" : "!w-dvw !h-dvh",
      "!rounded-none !border-none"
  ];

  return [shouldRenderFullscreen.value ? fullscreenClasses.join(" ") : "", {
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
  <Teleport :to="modalRoot" :disabled="true">
    <d-dimmed :show="model" :disabled="noBackdrop" :teleport="false">
      <form class="size-full flex" :class="backClasses" @click.self="onClose">
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
            <button type="submit">asdf</button>
          </div>
        </div>
      </form>
    </d-dimmed>
  </Teleport>
</template>

<style scoped lang="postcss">

</style>