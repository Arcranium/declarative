<script setup lang="ts">
import DEffect from "@lib/components/DEffect.vue";
import {computed, provide, readonly, ref} from "vue";
import {TransitionExpand} from "@morev/vue-transitions";
import {onClickOutside} from "@vueuse/core";

const props = withDefaults(defineProps<{
  size?: "small" | "medium" | "large",
  multiselect?: boolean
}>(), {
  size: "medium",
  multiselect: false
});

const isOpen = ref(false);
const currentSelected = ref<any | any[]>();

const rootElementRef = ref<HTMLElement>();
const displayElementRef = ref<HTMLElement>();

onClickOutside(rootElementRef, () => isOpen.value = false);

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
provide('select-current', readonly(currentSelected));
provide('select-update', updateSelected)

function updateSelected(value: any) {
  if (!props.multiselect) {
    currentSelected.value = value;
    return;
  }

  if (Array.isArray(currentSelected.value)) {
    if (currentSelected.value.includes(value)) {
      currentSelected.value.splice(currentSelected.value.indexOf(value), 1);
      return;
    }

    currentSelected.value.push(value);
    return;
  }

  if (!currentSelected.value) {
    currentSelected.value = [value];
    return;
  }

  currentSelected.value = [currentSelected.value, value];
}

function toggleOpen() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <div class="d-select-root" ref="rootElementRef">
    <d-effect>
      <button class="d-select" :class="classes" @click="toggleOpen">
        <span ref="displayElementRef"/>
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-360 280-560h400L480-360Z"/></svg>
      </button>
    </d-effect>
    <TransitionExpand>
      <div v-if="isOpen" class="d-select-options">
        <slot/>
      </div>
      <div v-else class="hidden">
        <slot/>
      </div>
    </TransitionExpand>
  </div>
</template>

<style scoped lang="postcss">
.d-select-root {
  @apply relative w-min
}

.d-select {
  @apply outline-0 bg-white border-2 w-min select-none flex items-center
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