<script setup lang="ts">
import DEffect from "@lib/components/DEffect.vue";
import {computed, provide, readonly, ref} from "vue";
import {onClickOutside} from "@vueuse/core";
import { TransitionExpand, TransitionSlide } from "@morev/vue-transitions";
import DDimmed from "@lib/components/modal/DDimmed.vue";
import DTransitionSlide from "@lib/components/transitions/DTransitionSlide.vue";
import {useTailwindBreakpoints} from "@lib/composables/breakpoints.ts";

const model = defineModel();

const props = withDefaults(defineProps<{
  size?: "small" | "medium" | "large",
  multiselect?: boolean,
  modal?: boolean | "auto"
}>(), {
  size: "medium",
  multiselect: false,
  modal: "auto"
});

const breakpoints = useTailwindBreakpoints();

const isOpen = ref(false);

const rootElementRef = ref<HTMLElement>();
const displayElementRef = ref<HTMLElement>();

onClickOutside(rootElementRef, () => {
  if(props.modal == true) return;

  isOpen.value = false
});

const classes = computed(() => {
  return [
    props.size,
    {
      open: isOpen.value
    }
  ]
});

provide('select-open', isOpen);
provide('select-multiselect', props.multiselect);
provide('select-render', readonly(displayElementRef));
provide('select-size', props.size);
provide('select-current', readonly(model));
provide('select-update', updateSelected);

const shouldRenderAsModal = computed(() => {
  if(props.modal == true) return true;
  if(props.modal == false) return false;

  return breakpoints.smallerOrEqual("md").value;
})

function updateSelected(value: any) {
  if (!props.multiselect) {
    model.value = value;
    return;
  }

  if (Array.isArray(model.value)) {
    if (model.value.includes(value)) {
      model.value.splice(model.value.indexOf(value), 1);
      return;
    }

    model.value.push(value);
    return;
  }

  if (!model.value) {
    model.value = [value];
    return;
  }

  model.value = [model.value, value];
}

function toggleOpen() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <div class="d-select-root" ref="rootElementRef">
    <d-effect>
      <button class="d-select" :class="classes" @click="toggleOpen">
        <span :key="JSON.stringify(model)" class="d-select-display" ref="displayElementRef"/>

        <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-360 280-560h400L480-360Z"/></svg>
      </button>
    </d-effect>

    <transition-expand v-if="!shouldRenderAsModal" appear>
      <div v-if="isOpen" class="d-select-options">
        <slot/>
      </div>
    </transition-expand>
    <d-dimmed v-else :show="isOpen">
      <d-transition-slide axis="y" :reverse-direction="false">
        <div v-if="isOpen" @click.self="isOpen = false" class="size-full flex justify-center">
          <div v-if="isOpen" class="mt-auto mb-5 mx-5 p-4 rounded-xl w-full bg-white flex flex-col gap-2">
            <slot/>
          </div>
        </div>
      </d-transition-slide>
    </d-dimmed>

    <div v-if="!isOpen" class="hidden">
      <slot/>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.d-select-root {
  @apply relative w-min
}

.d-select {
  @apply outline-0 bg-white border-2 w-min select-none flex items-center overflow-hidden
}

.d-select.small {
  @apply pl-2 pr-1 py-1 text-sm rounded-lg gap-2
}

.d-select.medium {
  @apply pl-4 pr-2 py-2 text-lg rounded-lg gap-1
}

.d-select.large {
  @apply pl-5 pr-3 py-3 text-2xl rounded-xl gap-2
}

.d-select > .icon {
  @apply transition-all
}

.d-select.open > .icon {
  @apply rotate-180
}

.d-select-options {
  @apply overflow-hidden absolute min-w-full mt-2 shadow-lg top-full left-0 flex flex-col gap-2 backdrop-blur bg-[rgba(255,255,255,0.8)] rounded-xl border-2 p-2
}
</style>