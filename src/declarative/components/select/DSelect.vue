<script setup lang="ts">
import DEffect from "@lib/components/DEffect.vue";
import {computed, provide, readonly, ref, watch} from "vue";
import {
  onClickOutside,
  TransitionPresets, useElementVisibility,
  useIntersectionObserver,
  usePointerSwipe,
  useSwipe,
  useTransition
} from "@vueuse/core";
import { TransitionExpand } from "@morev/vue-transitions";
import DDimmed from "@lib/components/modal/DDimmed.vue";
import DTransitionSlide from "@lib/components/transitions/DTransitionSlide.vue";
import {useTailwindBreakpoints} from "@lib/composables/breakpoints";

const SWIPE_CLOSE_THRESHOLD = 0.65;

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

const isOpen = ref(false);

const rootElementRef = ref<HTMLElement>();
const displayElementRef = ref<HTMLElement>();
const modalElementRef = ref<HTMLElement>();

const breakpoints = useTailwindBreakpoints();

const { isSwiping, lengthX, lengthY } = useSwipe(modalElementRef);

const modalIntersectionRatio = ref(0);

useIntersectionObserver(
    modalElementRef,
    ([{ intersectionRatio }]) => {
      modalIntersectionRatio.value = intersectionRatio;
    },
    {
      threshold: [SWIPE_CLOSE_THRESHOLD],
    }
)

provide('select-open', isOpen);
provide('select-multiselect', props.multiselect);
provide('select-render', readonly(displayElementRef));
provide('select-size', props.size);
provide('select-current', model);
provide('select-update', updateSelected);

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

const shouldRenderAsModal = computed(() => {
  if(props.modal == true) return true;
  if(props.modal == false) return false;

  return breakpoints.smallerOrEqual("md").value;
});

const modalClasses = computed(() => {
  return {
    "scale-125 opacity-0 translate-y-[200%]": !isOpen.value,
  }
})

const modalStyles = computed(() => {
  return {
    "transform": `translate(${modalContainerTranslate.value[0]}px, ${modalContainerTranslate.value[1]}px)`,
    "transition": `${!isSwiping.value ? 'all' : 'none'} 0.2s`
  }
})

const modalContainerTranslate = computed(() => {
  if(isSwiping.value && isOpen.value) {
    return [0, -lengthY.value];
  }

  return [0, 0];
});

watch([modalIntersectionRatio, isSwiping], () => {
  if((modalIntersectionRatio.value < SWIPE_CLOSE_THRESHOLD) && !isSwiping.value) {
    isOpen.value = false;
  }
})

function updateSelected(value: any) {
  if (!props.multiselect) {
    // Single select
    model.value = value;
    return;
  }

  if (!model.value) {
    // No prev value
    model.value = [value];
    return;
  }

  if (Array.isArray(model.value)) {
    if (model.value.includes(value)) {
      model.value = model.value.toSpliced(model.value.indexOf(value), 1);
      return;
    }

    model.value.push(value);
    model.value = [...model.value];
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
    <d-dimmed v-else :show="isOpen" :teleport="false">
      <d-transition-slide axis="y" :reverse-direction="false">
        <div v-if="isOpen" @click.self="isOpen = false" class="size-full overflow-hidden flex justify-center transition-all">
          <div class="mt-auto mb-5 mx-5 p-4 rounded-xl w-full bg-white border-2 flex flex-col gap-2" ref="modalElementRef" :class="modalClasses" :style="modalStyles">
            <div class="w-full flex justify-center">
              <span class="w-2/5 border-2"/>
            </div>

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